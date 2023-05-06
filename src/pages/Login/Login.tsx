import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { loginAsyncApi } from "../../redux/UserReducer/userReducer";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
export type UserLoginModel = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch:DispatchType = useDispatch()
  const frmLogin = useFormik<UserLoginModel>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email cannot be blank")
        .email("email is invalid"),
      password: Yup.string().min(3, "Password must be at least 3 characters"),
    }),
    onSubmit: (values: UserLoginModel) => {
    const actionAsyncLogin = loginAsyncApi(values)
    dispatch(actionAsyncLogin)
    },
  });
  return (
    <form className="container" onSubmit={frmLogin.handleSubmit}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-25">
          <h3>Login</h3>
          <div className="form-group">
            <p>Email</p>
            <input
              className="form-control"
              name="email"
              onChange={frmLogin.handleChange}
            />
            {frmLogin.errors.email && (
              <div className="text text-danger">{frmLogin.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <p>Password</p>
            <input
              className="form-control"
              name="password"
              type="password"
              onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur}
            />
            {frmLogin.errors.password && (
              <div className="text text-danger">{frmLogin.errors.password}</div>
            )}
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
