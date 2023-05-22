import React from "react";

interface TextAreaProps {
  label?: string;
  row: number;
}

export const TextArea = ({ label, row }: TextAreaProps) => {
  return (
    <>
      <textarea
        className="bg-transparent text-[#D1D1D1] placeholder:text-[#D1D1D1] w-full border-2 border-[#9F9D9B] p-2 outline-none rounded-xl"
        placeholder={label}
        cols={5}
        rows={row ? row : 8}
      ></textarea>
    </>
  );
};
