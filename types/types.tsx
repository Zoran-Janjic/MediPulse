import { Control } from "react-hook-form";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  RADIO = "radio",
  SWITCH = "switch",
  UPLOAD = "upload",
  SKELETON = "skeleton",
}

export interface CustomFormProps {
  formControl: Control<any>;
  label?: string;
  description?: string;
  formFieldType: FormFieldType;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  name: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

export interface CustomFormSubmitButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}
