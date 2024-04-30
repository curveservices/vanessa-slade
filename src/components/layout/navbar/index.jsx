import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="">
      <NavLink to="/">
        <div className="title">Vanessa Slade</div>
        <img src={logo} alt="Vanessa slade" />
      </NavLink>
      <Breadcrumbs />
    </header>
  );
};

export default Navbar;
