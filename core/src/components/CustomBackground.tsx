interface CustomBackgroundProps {
  children: React.ReactNode;
}

function CustomBackground({ children }: CustomBackgroundProps) {
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='%236200ff' fill-opacity='0.46' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
  };
  return (
    <div className="h-screen" style={backgroundStyle}>
      {children}
    </div>
  );
}

export default CustomBackground;
