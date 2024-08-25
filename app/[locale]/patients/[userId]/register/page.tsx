import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/registerForm/RegisterForm";

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen p-1">
      <section className="remove-scrollbar container my-auto ">
        {/* TODO: Add otp */}
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={"1000"}
            width={"1000"}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm />

          <div className="text-14-regular mt-20 flex justify-between w-full">
            <p className="justify-items-end text-dark-600 xl:text-left">
              ©2024MediPulse
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/images/register-img.png"}
        height={"1000"}
        width={"1000"}
        alt="doctor image"
        className="rounded-xl side-img max-w-[50%]"
      />
    </div>
  );
};

export default Register;