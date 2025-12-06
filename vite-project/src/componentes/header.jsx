import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <h1 className="title">Mi Tienda</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link" to="/categoria">
              Categoria
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export { Header };
