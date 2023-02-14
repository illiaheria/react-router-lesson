import { Outlet, Link, NavLink } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export const Layout = () => {
  return (
    <>
      <header className="App-header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="posts"> Posts </NavLink>
        <NavLink to="about"> About </NavLink>
        <NavLink to="counter"> Counter </NavLink>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
