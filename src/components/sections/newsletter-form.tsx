"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter, type NewsletterSubscribeState } from "@/app/actions";
import { Mail } from "lucide-react";

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto shadow-md">
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  );
}

export default function NewsletterForm() {
  const [state, formAction] = useFormState<NewsletterSubscribeState | undefined, FormData>(subscribeToNewsletter, undefined);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
        formRef.current?.reset(); // Also reset the native form element
      }
    }
  }, [state, toast, form]);


  // This client-side validation handler is for immediate feedback.
  // The server action will also validate.
  const clientSubmit = (data: NewsletterFormValues) => {
     const formData = new FormData();
     formData.append('email', data.email);
     formAction(formData);
  };


  return (
    <form
      ref={formRef}
      action={formAction} // This enables progressive enhancement
      onSubmit={form.handleSubmit(clientSubmit)} // This is for client-side validation and smoother UX
      className="mt-6 space-y-4"
    >
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <div className="relative w-full">
           <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="pl-10 h-12 text-base"
            {...form.register("email")}
            aria-label="Email for newsletter"
          />
        </div>
        <SubmitButton />
      </div>
      {form.formState.errors.email && (
        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
      )}
      {!form.formState.errors.email && state && !state.success && state.message && (
         <p className="text-sm text-destructive">{state.message}</p>
      )}
    </form>
  );
}
