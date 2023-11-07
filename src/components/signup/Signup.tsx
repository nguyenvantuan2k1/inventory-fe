import {
  UserOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import * as React from "react";

export interface ISignupProps {}

export default class Signup extends React.PureComponent<ISignupProps> {
  public render() {
    return (
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper">
            <div className="login-content">
              <div className="login-userset">
                <div className="login-logo">
                  <img src="/src/assets/img/logo.png"/>
                </div>
                <div className="login-userheading">
                  <h3>Create an Account</h3>
                  <h4>Continue where you left off</h4>
                </div>
                <div className="grid gap-4">
                  <label>Full Name</label>
                  <Input
                    size="large"
                    placeholder="Enter your full name"
                    suffix={<UserOutlined className="site-form-item-icon" />}
                  />
                  <label>Email</label>
                  <Input
                    size="large"
                    placeholder="Enter your email address"
                    suffix={<MailOutlined />}
                  />
                  <label>Password</label>
                  <Input
                    size="large"
                    placeholder="Enter your password"
                    type="password"
                    suffix={<EyeInvisibleOutlined />}
                  />
                </div>
                <div className="form-login">
                  <a className="btn btn-login">Sign Up</a>
                </div>
                <div className="signinform text-center">
                  <h4>
                    Already a user?{" "}
                    <a href="#" className="hover-a">
                      Sign In
                    </a>
                  </h4>
                </div>
                <div className="form-setlogin">
                  <h4>Or sign up with</h4>
                </div>
                <div className="form-sociallink">
                  <ul>
                    <li>
                      <a href="#javascript:void(0);">
                        <img
                          src="src/assets/img/icons/google.png"
                          className="me-2"
                          alt="google"
                        />
                        Sign Up using Google
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/src/assets/img/icons/facebook.png"
                          className="me-2"
                          alt="google"
                        />
                        Sign Up using Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="login-img">
              <img src="/src/assets/img/login.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
