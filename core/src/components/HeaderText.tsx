export default function HeaderText() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <h1 className="text-8xl text-950 font-bold text-center">
        A better way to do
        <br />
        <span className="text-300">conversations</span>
      </h1>

      <div className="flex flex-row items-center justify-center mt-16">
        <h3 className="text-4xl text-950 font-bold text-center">
          <span className="text-300">Nexus</span> is a new way to
          <span className="text-300"> connect </span>
          with those around you.
        </h3>
      </div>
    </div>
  );
}
