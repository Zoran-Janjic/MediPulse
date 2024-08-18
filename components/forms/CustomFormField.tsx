"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { CustomFormProps, FormFieldType } from "../../types/types";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
type E164Number = string;

const CustomFormField = (props: CustomFormProps) => {
  const { formControl, name, formFieldType, label } = props;

  const RenderField = ({
    field,
    props,
  }: {
    field: any;
    props: CustomFormProps;
  }) => {
    const { iconSrc, iconAlt, formFieldType, placeholder } = props;

    switch (formFieldType) {
      case FormFieldType.INPUT:
        return (
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
            {props.iconSrc && (
              <Image
                src={props.iconSrc}
                height={24}
                width={24}
                alt={props.iconAlt || "icon"}
                className="ml-2"
              />
            )}
            <FormControl>
              <Input
                placeholder={props.placeholder}
                {...field}
                className="shad-input border-0"
              />
            </FormControl>
          </div>
        );
      case FormFieldType.PHONE_INPUT:
        return (
          <FormControl>
            <PhoneInput
              defaultCountry="US"
              placeholder={props.placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className="input-phone"
            />
          </FormControl>
        );
    }
  };

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {formFieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="text-sm">{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
