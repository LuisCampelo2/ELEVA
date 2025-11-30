import logo from "../../assets/imgs/elevaLogo.png";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <>
      <nav className="nav">
        <img className="logo" src={logo} alt="" />

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          HOME
        </Link>

        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          PROJETOS
        </Link>

        <Link
          to="/students"
          className={location.pathname === "/students" ? "active" : ""}
        >
          ESTUDANTES
        </Link>

       
        <Link
          to="/contacts"
          className={location.pathname === "/contacts" ? "active" : ""}
        >
          CONTATOS
        </Link>
      </nav>
    </>
  );
};
