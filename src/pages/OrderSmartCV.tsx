import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Shield, CheckCircle, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const formSchema = z.object({
  // Section 1: Personal Information
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  linkedinUrl: z.string().optional(),
  jobStatus: z.string().min(1, "Please select your current status"),
  
  // Section 2: CV Details
  numberOfRoles: z.string().optional(),
  cvType: z.string().min(1, "Please select CV type"),
  extras: z.array(z.string()).optional(),
  
  // Section 3: Verification Setup
  hostingOption: z.string().min(1, "Please select a hosting option"),
  
  // Section 4: Payment
  paymentOption: z.string().min(1, "Please select payment option"),
  rushDelivery: z.boolean().optional(),
  discountCode: z.string().optional(),
  
  // Section 5: Final
  specialInstructions: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to continue"),
});

type FormValues = z.infer<typeof formSchema>;

const OrderSmartCV = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      extras: [],
      rushDelivery: false,
      consent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName,
          phoneNumber: data.phone,
          email: data.email,
          linkedinProfile: data.linkedinUrl,
          currentJobTitle: data.jobStatus,
          numberOfRoles: data.numberOfRoles,
          cvType: data.cvType,
          extras: data.extras || [],
          cvFileUrl: undefined, // File upload to be implemented
          verificationHosting: data.hostingOption,
          additionalDocsUrls: [], // File upload to be implemented
          paymentOption: data.paymentOption,
          rushDelivery: data.rushDelivery || false,
          discountCode: data.discountCode,
          specialInstructions: data.specialInstructions,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit order');
      }

      toast({
        title: "Order Submitted! 🎉",
        description: "Check your email for confirmation.",
      });
      
      setTimeout(() => {
        navigate("/thank-you");
      }, 1500);
    } catch (error) {
      console.error('Order submission error:', error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields as any);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof FormValues)[] => {
    switch (step) {
      case 1:
        return ["fullName", "phone", "email", "linkedinUrl", "jobStatus"];
      case 2:
        return ["numberOfRoles", "cvType"];
      case 3:
        return ["hostingOption"];
      case 4:
        return ["paymentOption"];
      case 5:
        return ["consent"];
      default:
        return [];
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-32 max-w-3xl animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-gold/60 bg-clip-text text-transparent">
            Order Your Smart CV
          </h1>
          <p className="text-muted-foreground text-lg">
            Fill in your details and we'll create your professional digital identity
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap gap-6 justify-center mb-12 p-6 bg-deep-blue/10 backdrop-blur-sm rounded-lg border border-deep-blue/20">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-foreground">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-5 h-5 text-gold" />
            <span className="text-foreground">Verified by Pison</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-foreground">3-5 Days Delivery</span>
          </div>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Personal Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+234 XXX XXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="linkedinUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="jobStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Job Title / Status *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="job-seeker">Job Seeker</SelectItem>
                            <SelectItem value="employed">Employed</SelectItem>
                            <SelectItem value="freelancer">Freelancer</SelectItem>
                            <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: CV Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">CV Details</h2>
                  
                  <FormField
                    control={form.control}
                    name="numberOfRoles"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Roles to Include (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 3 roles" {...field} />
                        </FormControl>
                        <p className="text-sm text-muted-foreground">Help us know how much work experience to expect</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cvType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What type of CV are you requesting? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select CV type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="entry-level">Entry-Level (0–2 yrs)</SelectItem>
                            <SelectItem value="mid-level">Mid-Level (3–7 yrs)</SelectItem>
                            <SelectItem value="senior-level">Senior-Level (8+ yrs)</SelectItem>
                            <SelectItem value="freelance">Freelance/Portfolio CV</SelectItem>
                            <SelectItem value="academic">Academic/Research CV</SelectItem>
                            <SelectItem value="executive">Executive/Leadership CV</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="extras"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>Would you like to add any extras?</FormLabel>
                        </div>
                        {["Career Coaching (30min Call)", "LinkedIn Optimization", "Cover Letter Writing"].map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="extras"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item}
                                  className="flex flex-row items-start space-x-3 space-y-0 mb-3"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), item])
                                          : field.onChange(
                                              field.value?.filter((value) => value !== item)
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {item}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Upload Your Existing CV / Resume (Optional)</FormLabel>
                    <Input type="file" accept=".doc,.docx,.pdf" className="cursor-pointer" />
                    <p className="text-sm text-muted-foreground">Accept .doc, .docx, .pdf | Max size: 5MB</p>
                  </div>
                </div>
              )}

              {/* Step 3: Verification Folder Setup */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Verification Folder Setup</h2>
                  
                  <FormField
                    control={form.control}
                    name="hostingOption"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Do you want us to host your verification folder? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="pison-hosted" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                Yes – Host on Pison (recommended)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="google-drive" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                No – I'll provide my Google Drive folder
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="decide-later" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                I'll decide later
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Upload additional documents (Optional)</FormLabel>
                    <Input type="file" multiple className="cursor-pointer" />
                    <p className="text-sm text-muted-foreground">Certificates, portfolio files, recommendations, video</p>
                  </div>
                </div>
              )}

              {/* Step 4: Payment & Delivery */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Payment & Delivery</h2>
                  
                  <FormField
                    control={form.control}
                    name="paymentOption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Payment Option *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                            <SelectItem value="card">Card (Secure Gateway)</SelectItem>
                            <SelectItem value="flutterwave">Flutterwave/Paystack</SelectItem>
                            <SelectItem value="paypal">PayPal (International)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-deep-blue/10 border border-deep-blue/20 rounded-lg p-4">
                    <p className="text-sm text-foreground mb-2 font-medium">Expected Delivery Timeline</p>
                    <p className="text-sm text-muted-foreground">3–5 business days (Standard)</p>
                  </div>

                  <FormField
                    control={form.control}
                    name="rushDelivery"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="cursor-pointer">
                            Rush Delivery (Extra cost applies)
                          </FormLabel>
                          <p className="text-sm text-muted-foreground">
                            Get your CV in 1-2 business days
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="discountCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discount Code (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 5: Final Confirmation */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Final Confirmation</h2>
                  
                  <FormField
                    control={form.control}
                    name="specialInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Any Special Instructions? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us anything you'd like us to note while preparing your Smart CV..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="cursor-pointer">
                            I agree to the Terms of Service and authorize Pison Careers to process my details for Smart CV creation. *
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="gap-2 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="gap-2 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70"
                >
                  Submit Order
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default OrderSmartCV;
