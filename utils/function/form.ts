import { SHA256 as sha256 } from "crypto-js";
import { toast } from "react-toastify";

const WEBSITE_URL = process.env.NEXT_PUBLIC_API_URL as string;

function isValidEmail(email: string): boolean {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

export const hashPassword = async (password: string) => {
  return sha256(password).toString();
};

export const handleInputChange = (
  e: any,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const target = e.target;
  const value = target.value;

  if (target.type === "email" && !isValidEmail(value)) {
    setError(true);
    setMessage("Please enter a valid email");
    setValue(value);
  } else if (target.type === "tel" && !isValidPhone(value)) {
    setError(true);
    setMessage("Please enter a valid phone number");
    setValue(value);
  } else if (target.type === "text" && value.length < 3) {
    setError(true);
    setMessage("Value invalid");
    setValue(value);
  } else {
    setValue(value);
    setError(false);
    setMessage("");
  }
};

export const handleSubmit = (e: any, action: any) => {
  e.preventDefault();
  const form = e.target;
  const hasError = Array.from(form).some((input) => {
    return (
      input instanceof HTMLInputElement &&
      input.classList.contains("border-primary")
    );
  });
  if (hasError) {
    toast.error("Verify your input!", {
      theme: "colored",
      position: "top-right",
    });
    return false;
  }
  action(form);
};

export const createUser = (form: any) => {
  const data = {
    name: form[0].value,
    email: form[1].value,
    password: form[2].value,
  };

  fetch(`${WEBSITE_URL}/api/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success > 0) {
        toast.success(data.message, {
          position: "top-right",
          theme: "colored",
        });
        form[0].value = "";
        form[1].value = "";
        form[2].value = "";
      } else {
        toast.error(data.message, {
          position: "top-right",
          theme: "colored",
        });
      }
    });
};
