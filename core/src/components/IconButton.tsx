interface IconButtonProps {
  name: string;
  icon: JSX.Element;
  onClick: () => void;
  selected: boolean;
}

export default function IconButton({ name, icon, onClick, selected }: IconButtonProps) {
  return (
    <div
      className={`flex flex-col bg-white justify-center items-center flex-wrap border-2 shadow-sm p-2 hover:bg-100 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer rounded-xl border-200 ${
        selected ? 'bg-violet-300' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center my-4 scale-150">{icon}</div>
      <h2 className="text-lg text-center">{name}</h2>
    </div>
  );
}
