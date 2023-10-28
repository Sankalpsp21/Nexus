interface IconButtonProps {
  name: string;
  icon: JSX.Element;
}

export default function IconButton({ name, icon }: IconButtonProps) {
  return (
    <div className="flex flex-col justify-center bg-white items-center flex-wrap border-2 shadow-sm p-2 hover:bg-100 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer rounded-xl">
      <div className="flex flex-row items-center justify-center my-4 scale-150">{icon}</div>
      <h2 className="text-lg text-center">{name}</h2>
    </div>
  );
}
