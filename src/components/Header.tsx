import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../redux/configStore";

type Props = {};
export default function Header(props: Props) {
  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  const renderLoginUI = () => {
    if (userLogin) {
      return (
        <div className="login flex-item">
          <NavLink className={"login-link"} to={"/login"}>
            {userLogin.email}
          </NavLink>
        </div>
      );
    }
    return (
      <div className="login flex-item">
        <NavLink className={"login-link"} to={"/login"}>
          Login
        </NavLink>
      </div>
    );
  };
  return (
    <div className="header">
      <section className="logo-header">
        <div className="logo">
          <NavLink to="" className={"logo-link"}>
            <h3>LOGO</h3>
          </NavLink>
        </div>
        <div className="nav-bar-search">
          <div className="search flex-item">
            <NavLink className={"search-link"} to={"/search"}>
              <i className="fa fa-search"></i>Search
            </NavLink>
          </div>
          <div className="carts flex-item">
            <NavLink className={"carts-link"} to={"/cart"}>
              <i className="fa fa-cart-shopping"></i> (1)
            </NavLink>
          </div>
          {renderLoginUI()}
          <div className="register flex-item">
            <NavLink className={"register-link"} to={"/register"}>
              Register
            </NavLink>
          </div>
        </div>
      </section>
      <section className="menu">
        <nav className="nav-menu">
          <NavLink className="mx-2" to="">
            Home
          </NavLink>
          <NavLink className="mx-2" to="">
            Man
          </NavLink>
          <NavLink className="mx-2" to="">
            Woman
          </NavLink>
          <NavLink className="mx-2" to="">
            Kid
          </NavLink>
          <NavLink className="mx-2" to="">
            Sport
          </NavLink>
        </nav>
      </section>
    </div>
  );
}
