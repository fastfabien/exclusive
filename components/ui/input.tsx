"use client";

import { handleInputChange } from "@/utils/function";
import { useState } from "react";

interface InputProps {
  type: string;
  required?: boolean;
  placeholder: string;
  name: string;
  classname?: string;
}

export const Input = ({
  name,
  placeholder,
  type,
  required = false,
  classname,
}: InputProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return type !== "textarea" ? (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        className={`font-normal bg-transparent outline-none border-b py-2 placeholder:capitalize ${
          error ? "border-primary" : "border-secondary"
        } ${classname}`}
        onChange={(e) => handleInputChange(e, setValue, setError, setMessage)}
      />
      {message && (
        <span className="text-xs text-primary font-semibold">{message}</span>
      )}
    </div>
  ) : (
    <div className="flex flex-col gap-1">
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        className={`font-normal bg-transparent outline-none border-b py-2 placeholder:capitalize ${
          error ? "border-primary" : "border-secondary"
        } ${classname}`}
        onChange={(e) => handleInputChange(e, setValue, setError, setMessage)}
      />
      {message && (
        <span className="text-xs text-primary font-semibold">{message}</span>
      )}
    </div>
  );
};
