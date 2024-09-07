"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "../../../types/types";
import CustomFormSubmitButton from "../CustomFormSubmitButton";
import { use, useState } from "react";
import { userFormValidation } from "../FormValidation";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("patientForm");
  // 1. Define your form.
  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof userFormValidation>) => {
    setIsLoading(true);
    try {
      const createNewUserResponse = await createUser(values);

      if (createNewUserResponse?.name === "AppwriteException") {
        form.reset();
        throw new Error(
          createNewUserResponse.message || "Failed to create user"
        );
      }

      // Success
      form.reset();
      toast.success("User created successfully!");
      router.push(`/patients/${createNewUserResponse.$id}/register`);
    } catch (error: any) {
      form.reset();
      toast.error(`Error: ${error.message || "Failed to create user"}`);
      console.error("Error in onSubmit:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className="mb-12 space-y-4">
          <h1 className="header">{t("patientFormGreeting")}👋🏻</h1>
          <p>{t("patientFormScheduleApointment")}</p>
        </section>

        {/* Name */}
        <CustomFormField
          formControl={form.control}
          formFieldType={FormFieldType.INPUT}
          label={t("patientFormFullName")}
          description={t("patientFormNameDescription")}
          placeholder={t("patientFormNameExample")}
          iconSrc={"/assets/icons/user.svg"}
          iconAlt={"user icon"}
          name="name"
        />

        {/* Email */}
        <CustomFormField
          formControl={form.control}
          formFieldType={FormFieldType.INPUT}
          label={t("patientFormEmail")}
          description={t("patientFormEmailDescription")}
          placeholder={t("patientFormEmailExample")}
          iconSrc={"/assets/icons/email.svg"}
          iconAlt={"email"}
          name="email"
        />

        {/* Phone */}
        <CustomFormField
          formControl={form.control}
          formFieldType={FormFieldType.PHONE_INPUT}
          label={t("patientFormPhoneNumber")}
          description={"phone number"}
          placeholder={"(123) 456-7890"}
          name="phone"
        />

        <CustomFormSubmitButton isLoading={isLoading}>
          {t("submitButton")}
        </CustomFormSubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
