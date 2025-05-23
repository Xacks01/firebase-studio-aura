
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
// Removed Mail icon import as it's not used in the new design

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto bg-[#3A3A3A] text-white hover:bg-slate-600 rounded-md h-12 px-6 shadow-md"
    >
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
        formRef.current?.reset();
      }
    }
  }, [state, toast, form]);

  const clientSubmit = (data: NewsletterFormValues) => {
     const formData = new FormData();
     formData.append('email', data.email);
     formAction(formData);
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={form.handleSubmit(clientSubmit)}
      className="w-full" // Ensuring form takes full width of its container
    >
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative w-full">
          {/* Mail icon removed from here */}
          <Input
            id="email"
            type="email"
            placeholder="Email" // Updated placeholder
            className="h-12 text-base bg-[#CAB7E2] border-[#3A3A3A] rounded-md w-full placeholder:text-muted-foreground focus:border-[#3A3A3A]" // Applied new styles
            {...form.register("email")}
            aria-label="Email for newsletter"
          />
        </div>
        <SubmitButton />
      </div>
      {form.formState.errors.email && (
        <p className="text-sm text-destructive mt-2">{form.formState.errors.email.message}</p>
      )}
      {!form.formState.errors.email && state && !state.success && state.message && (
         <p className="text-sm text-destructive mt-2">{state.message}</p>
      )}
    </form>
  );
}
