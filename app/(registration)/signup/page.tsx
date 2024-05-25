import { RegistrationWrapper, SignUp } from "@/components/Registration";

const page = () => {
  return (
    <RegistrationWrapper
      description="Enter your details below"
      title="Create an account"
    >
      <SignUp />
    </RegistrationWrapper>
  );
};

export default page;
