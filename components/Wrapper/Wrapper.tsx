import React from "react";

export const Wrapper = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return <div className={`py-10 px-32 ${classname}`}>{children}</div>;
};
