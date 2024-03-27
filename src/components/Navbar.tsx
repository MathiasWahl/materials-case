import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <Link to="/">
      <div className="bg-green-100 flex justify-center h-20 items-center">
        {' '}
        Not Loopfront
      </div>
    </Link>
  );
}
