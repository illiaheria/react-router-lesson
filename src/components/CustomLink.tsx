import { Link, LinkProps, useMatch } from "react-router-dom";

interface ICustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const CustomLink: React.FC<ICustomLinkProps> = ({
  to,
  children,
  ...props
}) => {
  const match = useMatch(to as string);
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
