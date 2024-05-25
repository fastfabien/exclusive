interface RegistationWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const RegistrationWrapper = ({
  children,
  description,
  title,
}: RegistationWrapperProps) => {
  return (
    <div className="flex flex-row mt-15 mb-36 gap-32 justify-between">
      <div
        className="w-[45rem] h-[48.8125rem] bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/SideImage.png")' }}
      />
      <div className="py-32 pr-32">
        <h1 className="text-secondary text-4xl font-medium leading-6 mb-6 first-letter:uppercase">
          {title}
        </h1>
        <p className="font-normal text-secondary leading-6 text-base mb-12 first-letter:uppercase">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};
