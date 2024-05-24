interface TitleProps {
  title: string;
  postTitle: string;
}

export const Title = ({ title, postTitle }: TitleProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <span className="block w-5 h-10 bg-primary rounded-sm" />
        <span className="capitalize text-primary text-base font-semibold leading-6">
          {postTitle}
        </span>
      </div>
      <h2 className="capitalize text-secondary text-4xl font-semibold leading-[48px]">
        {title}
      </h2>
    </div>
  );
};
