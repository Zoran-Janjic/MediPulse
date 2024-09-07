import PatientForm from "@/components/forms/patientForm/PatientForm";
import Image from "next/image";
import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "../../components/transtlationProvider";
import LanguageChanger from "@/components/languageChanger/LanguageChanger";

// This is server rendered
const i18nNameSpaces = ["common", "patientForm"];
export default async function Home({ params }: { params: { locale: string } }) {
  // Initialize translations with the given locale and namespace
  // NOTE: First namespace in the array is the default one used. If we access another one we use namespaceName:value
  const { t, resources } = await initTranslations(
    params.locale,
    i18nNameSpaces
  );

  return (
    // We use the transaltion provided once per page so we can access the transaltion in the children
    <TranslationsProvider
      resources={resources}
      locale={params.locale}
      namespaces={i18nNameSpaces}
    >
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

            <PatientForm />

            <div className="text-14-regular mt-20 flex justify-between w-full">
              <p className="justify-items-end text-dark-600 xl:text-left">
                ©2024MediPulse
              </p>
              <Link href={"/?admin=true"} className="text-green-500">
                {t("adminTitle")}
              </Link>
              <LanguageChanger />
            </div>
          </div>
        </section>
        <Image
          src={"/assets/images/onboarding-img.png"}
          height={"1000"}
          width={"1000"}
          alt="doctor image"
          className="rounded-xl side-img max-w-[50%]"
        />
      </div>
    </TranslationsProvider>
  );
}
