"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      type={"button"}
      disabled={false}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
