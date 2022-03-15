import React, { useState } from "react";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { Config } from "../../AppConfig";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../store/actions/login";

const Login = () => {
  const [Login, setLogin] = useState < any > {};
  const onchageLogin = (key: string, value: string) => {
    Login[key] = value;
    setLogin(Login);
  };
  const dispatch = useDispatch();
  const userLoginDeatils = useSelector((state: any) => state.loginData);
  console.log(userLoginDeatils);

  const onSubmit = (e: any) => {
    e.preventDefault();

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const { Email, Password } = Login;
    const LoginDetails = { Email, Password };
    if (Email == undefined && Password == undefined) {
      alert("blank values are not allowed");
      return false;
    } else if (emailPattern.test(Email)) {
      const url = `${Config.app.locBaseUrl}api/Auth/UserLogin`;

      axios.post(url, LoginDetails).then((response: any) => {
        console.log(response);
        if (response.data.IsSuccess === 1) {
          dispatch(loginData(response.data));

          localStorage.setItem("userId", response.data.Result.Id);
          localStorage.setItem("firstName", response.data.Result.FirstName);
          localStorage.setItem("lastName", response.data.Result.LastName);
          window.location.href = "/dashboard";
        }
      });

      return true;
    } else {
      alert("invalid emil address");
      return false;
    }
  };

  return (
    <div className="app-content content bg-purple full-height">
      <div className="content-wrapper full-height">
        <div className="content-body full-height">
          <section className="flexbox-container full-height">
            <div className="col-12 d-flex align-items-center justify-content-center full-height">
              <div className="col-md-4 col-10 box-shadow-2 p-0">
                <div className="card border-grey border-lighten-3 px-2 py-2 m-0">
                  <div className="card-title text-center">
                    <img
                      className="braand-logo"
                      src={"../../../icons/logo_print@2x.png"}
                      style={{ marginTop: "50px" }}
                    />
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <form
                        className="form-horizontal form-simple"
                        onSubmit={onSubmit}
                      >
                        <InputText
                          type="email"
                          iconName="fa fa-envelope"
                          placeHolderText="Enter Email Id"
                          hasIconLeft
                          addClasses={"form-control-lg input-lg"}
                          onChangeHandler={(e: any) =>
                            onchageLogin("Email", e.target.value)
                          }
                          //  value={Login.Email}
                        />
                        <InputText
                          type="password"
                          iconName="fa fa-lock"
                          placeHolderText="Enter Your Password"
                          hasIconLeft
                          addClasses={"form-control-lg input-lg"}
                          //   value={Login.password}
                          onChangeHandler={(e: any) =>
                            onchageLogin("Password", e.target.value)
                          }
                        />
                        <div className="form-group row">
                          <div className="col-md-6 col-12 text-center text-md-left">
                            <fieldset>
                              <input
                                type="checkbox"
                                id="remember-me"
                                className="chk-remember"
                              />
                              <label className="ml-1" htmlFor="remember-me">
                                Remember Me
                              </label>
                            </fieldset>
                          </div>
                          <div className="col-md-6 col-12 text-center text-md-right">
                            <Link to="/forgotPassword" className="card-link">
                              Forgot Password?
                            </Link>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          addClass="btn btn-outline-info btn-lg btn-block form-group"
                          buttonText="Login"
                        />

                        <Link to="/Register" className="card-link">
                          <Button
                            addClass="btn btn-outline-danger btn-lg btn-block form-group"
                            buttonText="Register"
                          />
                        </Link>
                      </form>
                    </div>
                    <h6 className="card-subtitle card-font line-on-side text-muted text-center font-small-3 pt-2">
                      <span>or login using</span>
                    </h6>

                    <div className="center d-flex justify-content-center align-items-center mt-3">
                      <i className="fa fa-google m-2 font-medium-3"></i>
                      <i className="fa fa-linkedin-square m-2 font-medium-3"></i>
                      <i className="fa fa-twitter-square m-2 font-medium-3"></i>
                      <i className="fa fa-facebook-square m-2 font-medium-3"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
