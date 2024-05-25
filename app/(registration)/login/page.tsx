import { Login, RegistrationWrapper } from "@/components/Registration";

const page = () => {
  return (
    <RegistrationWrapper
      description="enter your details below"
      title="Log in to Exclusive"
    >
      <Login />
    </RegistrationWrapper>
  );
};

export default page;
