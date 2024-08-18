"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "../../types/types";
import CustomFormSubmitButton from "./CustomFormSubmitButton";
import { useState } from "react";
import { userFormValidation } from "./FormValidation";
import { z } from "zod";

const PatientForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof userFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋🏻</h1>
          <p>Schedule your appointment.</p>
        </section>

        {/* Name */}
        <CustomFormField
          formControl={form.control}
          formFieldType={FormFieldType.INPUT}
          label={"Full name"}
          description={"Enter your full name"}
          placeholder={"John Doe"}
          iconSrc={"/assets/icons/user.svg"}
          iconAlt={"user icon"}
          name="name"
        />

        {/* Email */}
        <CustomFormField
          formControl={form.control}
          formFieldType={FormFieldType.INPUT}
          label={"Email"}
          description={"email"}
          placeholder={"example@example.com"}
          iconSrc={"/assets/icons/email.svg"}
          iconAlt={"email"}
          name="username"
        />

        {/* Phone */}
        <CustomFormField
          formControl={form.control}
          formFieldType={FormFieldType.PHONE_INPUT}
          label={"Phone number"}
          description={"phone number"}
          placeholder={"(123) 456-7890"}
          name="phoneNumber"
        />

        <CustomFormSubmitButton isLoading={isLoading}>
          Submit
        </CustomFormSubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
