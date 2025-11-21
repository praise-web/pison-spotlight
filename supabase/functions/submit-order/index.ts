import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
  linkedinProfile?: string;
  currentJobTitle?: string;
  numberOfRoles?: number;
  cvType: string;
  extras: string[];
  cvFileUrl?: string;
  verificationHosting: string;
  additionalDocsUrls: string[];
  paymentOption: string;
  rushDelivery: boolean;
  discountCode?: string;
  specialInstructions?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderData: OrderRequest = await req.json();
    console.log('Received order:', orderData);

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store order in database
    const { data: order, error: dbError } = await supabase
      .from('orders')
      .insert({
        full_name: orderData.fullName,
        phone_number: orderData.phoneNumber,
        email: orderData.email,
        linkedin_profile: orderData.linkedinProfile,
        current_job_title: orderData.currentJobTitle,
        number_of_roles: orderData.numberOfRoles,
        cv_type: orderData.cvType,
        extras: orderData.extras,
        cv_file_url: orderData.cvFileUrl,
        verification_hosting: orderData.verificationHosting,
        additional_docs_urls: orderData.additionalDocsUrls,
        payment_option: orderData.paymentOption,
        rush_delivery: orderData.rushDelivery,
        discount_code: orderData.discountCode,
        special_instructions: orderData.specialInstructions,
        status: 'pending'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to store order: ${dbError.message}`);
    }

    console.log('Order stored successfully:', order.id);

    // Prepare payment instructions
    const paymentInstructions = orderData.paymentOption === 'Bank Transfer' 
      ? `
        <h3>Payment Instructions</h3>
        <p>Please proceed with your bank transfer to complete your order. Our team will contact you shortly with the bank details.</p>
      `
      : `
        <h3>Payment</h3>
        <p>You selected ${orderData.paymentOption}. Our team will send you a secure payment link shortly.</p>
      `;

    const rushDeliveryNote = orderData.rushDelivery 
      ? '<p><strong>Rush Delivery:</strong> Your order will be prioritized for faster completion.</p>'
      : '';

    // Helper to send emails via Resend HTTP API
    const sendEmail = async (payload: { from: string; to: string[]; subject: string; html: string }) => {
      if (!RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set");
        return { error: "Missing RESEND_API_KEY" };
      }

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error sending email via Resend:", data);
        return { error: data };
      }

      return { data };
    };

    // Send confirmation email to customer
    const customerEmailResponse = await sendEmail({
      from: "Pison Careers <onboarding@resend.dev>",
      to: [orderData.email],
      subject: "🎉 Order Received - Pison Smart CV",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e3a8a;">🎉 Order Received!</h1>
          <p>Hi ${orderData.fullName},</p>
          <p>Thank you for trusting Pison Careers with your professional journey. Your Smart CV order has been successfully received.</p>
          
          <h2>Order Summary</h2>
          <ul>
            <li><strong>CV Type:</strong> ${orderData.cvType}</li>
            <li><strong>Payment Method:</strong> ${orderData.paymentOption}</li>
            ${orderData.extras.length > 0 ? `<li><strong>Extras:</strong> ${orderData.extras.join(', ')}</li>` : ''}
          </ul>
          
          ${rushDeliveryNote}
          ${paymentInstructions}
          
          <h3>What's Next?</h3>
          <ul>
            <li>🧠 Our experts will begin processing your CV</li>
            <li>🧾 <strong>Delivery:</strong> ${orderData.rushDelivery ? '1-2' : '3-5'} working days</li>
            <li>💬 We'll reach out if we need more info</li>
          </ul>
          
          <p><strong>Didn't upload a CV?</strong><br>
          Send it to <a href="mailto:smartcv@pisoncareers.com">smartcv@pisoncareers.com</a> with your full name as the subject.</p>
          
          <p style="margin-top: 30px;">Thank you for trusting Pison Careers.<br>
          You've just stepped into the limelight. The world is watching.</p>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Order ID: ${order.id}<br>
            If you have any questions, reply to this email or contact us.
          </p>
        </div>
      `,
    });

    console.log('Customer email sent:', customerEmailResponse);

    // Send notification email to internal team
    const internalEmailResponse = await sendEmail({
      from: "Pison Orders <onboarding@resend.dev>",
      to: ["admin@praiseoyedele.com.ng "],
      subject: `New Smart CV Order - ${orderData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e3a8a;">New Smart CV Order Received</h1>
          
          <h2>Customer Information</h2>
          <ul>
            <li><strong>Name:</strong> ${orderData.fullName}</li>
            <li><strong>Email:</strong> ${orderData.email}</li>
            <li><strong>Phone:</strong> ${orderData.phoneNumber}</li>
            ${orderData.linkedinProfile ? `<li><strong>LinkedIn:</strong> <a href="${orderData.linkedinProfile}">${orderData.linkedinProfile}</a></li>` : ''}
            ${orderData.currentJobTitle ? `<li><strong>Current Position:</strong> ${orderData.currentJobTitle}</li>` : ''}
          </ul>
          
          <h2>Order Details</h2>
          <ul>
            <li><strong>Order ID:</strong> ${order.id}</li>
            <li><strong>CV Type:</strong> ${orderData.cvType}</li>
            ${orderData.numberOfRoles ? `<li><strong>Number of Roles:</strong> ${orderData.numberOfRoles}</li>` : ''}
            <li><strong>Extras:</strong> ${orderData.extras.length > 0 ? orderData.extras.join(', ') : 'None'}</li>
            <li><strong>Verification Hosting:</strong> ${orderData.verificationHosting}</li>
            <li><strong>Payment Method:</strong> ${orderData.paymentOption}</li>
            <li><strong>Rush Delivery:</strong> ${orderData.rushDelivery ? 'Yes' : 'No'}</li>
            ${orderData.discountCode ? `<li><strong>Discount Code:</strong> ${orderData.discountCode}</li>` : ''}
          </ul>
          
          ${orderData.specialInstructions ? `
            <h2>Special Instructions</h2>
            <p>${orderData.specialInstructions}</p>
          ` : ''}
          
          ${orderData.cvFileUrl ? `
            <h2>Uploaded CV</h2>
            <p><a href="${orderData.cvFileUrl}">Download CV</a></p>
          ` : ''}
          
          ${orderData.additionalDocsUrls.length > 0 ? `
            <h2>Additional Documents</h2>
            <ul>
              ${orderData.additionalDocsUrls.map((url, i) => `<li><a href="${url}">Document ${i + 1}</a></li>`).join('')}
            </ul>
          ` : ''}
          
          <p style="margin-top: 30px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b;">
            <strong>Action Required:</strong> Process this order and contact the customer within 24 hours.
          </p>
        </div>
      `,
    });

    console.log('Internal email sent:', internalEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        orderId: order.id,
        message: 'Order submitted successfully' 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-order function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to submit order',
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
