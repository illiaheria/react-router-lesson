import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>
        This page not found <Link to="/">redirect to main page</Link>
      </h1>
    </div>
  );
};
