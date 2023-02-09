import { Outlet, Link, NavLink } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export const Layout = () => {
  const activeStyles = {
    color: "red",
  };
  return (
    <>
      <header className="App-header">
        {/* <CustomLink to="/"> Home </CustomLink>
            <CustomLink to="posts"> Posts </CustomLink>
            <CustomLink to="about"> About </CustomLink> 
        */}
        <NavLink
          to="/"
          //   style={({ isActive }) => (isActive ? activeStyles : undefined)}
          //   className={({ isActive }) => (isActive ? "btn" : undefined)}
        >
          Home
        </NavLink>
        <NavLink to="posts"> Posts </NavLink>
        <NavLink to="about"> About </NavLink>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
