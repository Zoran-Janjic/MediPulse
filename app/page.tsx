import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen">
      {/* TODO: Add otp */}

      <section className="flex container flex-col p-1 items-center justify-around ">
        <Image
          src={"/assets/icons/logo-full.svg"}
          height={"1000"}
          width={"1000"}
          alt="logo"
          className="mb-12 h-10 w-fit"
        />

        <PatientForm />

        <div className="text-14-regular mt-20 flex justify-between w-full">
          <p className="justify-items-end text-dark-600 xl:text-left">
            ©2024MediPulse
          </p>
          <Link href={"/?admin=true"} className="text-green-500">
            Admin
          </Link>
        </div>
      </section>

      <Image
        src={"/assets/images/onboarding-img.png"}
        height={"1000"}
        width={"1000"}
        alt="doctor image"
        className="side-img max-w-[50%]"
      />
    </main>
  );
}
