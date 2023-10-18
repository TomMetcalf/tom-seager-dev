import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
