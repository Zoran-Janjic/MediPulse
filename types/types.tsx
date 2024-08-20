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

/* eslint-disable no-unused-vars */

type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type Gender = "Male" | "Female" | "Other";
type Status = "pending" | "scheduled" | "cancelled";

export interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
interface User extends CreateUserParams {
  $id: string;
}

interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

//  type UpdateAppointmentParams = {
//   appointmentId: string;
//   userId: string;
//   appointment: Appointment;
//   type: string;
// };
