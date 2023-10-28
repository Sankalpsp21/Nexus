import { Link } from 'react-router-dom';

export function One() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">One</h1>
      <Link to="/2">Two</Link>
    </div>
  );
}

export function Two() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">Two</h1>
      <Link to="/1">One</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
