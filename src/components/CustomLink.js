import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      style={{
        color: match ? "green" : "white",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
