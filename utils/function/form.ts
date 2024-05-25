function isValidEmail(email: string): boolean {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

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

export const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log(e.target);
};
