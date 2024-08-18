import { CustomFormSubmitButtonProps } from "@/types/types";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CustomFormSubmitButton = (props: CustomFormSubmitButtonProps) => {
  const { isLoading, className, children } = props;

  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loading image"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading
        </div>
      ) : (
        <div className="flex items-center gap-4">{children}</div>
      )}
    </Button>
  );
};

export default CustomFormSubmitButton;
