export const Badge = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname: string;
}) => {
  return (
    <div
      className={`bg-primary py-1 px-3 text-white rounded-sm text-xs font-normal leading-6 ${classname}`}
    >
      {children}
    </div>
  );
};
