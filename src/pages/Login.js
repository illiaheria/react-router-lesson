import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../hoc/LoginProvider";

export const Login = () => {
  const { isLoggedIn, changeLoginStatus } = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLogin = () => {
    changeLoginStatus(true);
    if (location.state.to.pathname) {
      navigate(location.state.to.pathname, { replace: true });
    } else navigate("/");
  };

  return (
    <>
      Login Page <button onClick={handleLogin}>Log in</button>
    </>
  );
};
