import { BellOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <div className="header">
        <div className="header-left active">
          <a href="index.html" className="logo">
            <img src="/src/assets/img/logo.png" alt="" />
          </a>
          <a href="index.html" className="logo-small">
            <img src="/src/assets/img/logo-small.png" alt="" />
          </a>
          <a id="toggle_btn" href="javascript:void(0);"></a>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <ul className="nav user-menu">
          <li className="nav-item">
            <div className="top-nav-search">
              <a href="javascript:void(0);" className="responsive-search">
                <i className="fa fa-search"></i>
              </a>
              <form action="#">
                <div className="searchinputs">
                  <input type="text" placeholder="Search Here ..." />
                  <div className="search-addon">
                    <span>
                      <img src="/src/assets/img/icons/closes.svg" alt="img" />
                    </span>
                  </div>
                </div>
                <a className="btn" id="searchdiv">
                  <img src="/src/assets/img/icons/search.svg" alt="img" />
                </a>
              </form>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow flag-nav">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="javascript:void(0);"
              role="button"
            >
              <img src="/src/assets/img/flags/us1.png" alt="" height="20" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="/src/assets/img/flags/us.png" alt="" height="16" />{" "}
                English
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="/src/assets/img/flags/fr.png" alt="" height="16" />{" "}
                French
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="/src/assets/img/flags/es.png" alt="" height="16" />{" "}
                Spanish
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="/src/assets/img/flags/de.png" alt="" height="16" />{" "}
                German
              </a>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow ">
            <a
              href="javascript:void(0);"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <Badge count={1} size="small">
                <BellOutlined className="text-2xl" />
              </Badge>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            alt=""
                            src="/src/assets/img/profiles/avatar-02.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added
                            new task{" "}
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown ">
            <a
              href="javascript:void(0);"
              className="dropdown-toggle nav-link userset "
              data-bs-toggle="dropdown"
            >
              <div>
                <span className="user-img inline-block">
                  <img src="/src/assets/img/profiles/avator1.jpg" alt="" />
                  <span className="status online"></span>
                </span>
              </div>
            </a>

            <div className="dropdown-menu menu-drop-user">
              <div className="profilename">
                <div className="profileset">
                  <span className="user-img">
                    <img src="/src/assets/img/profiles/avator1.jpg" alt="" />
                    <span className="status online"></span>
                  </span>
                  <div className="profilesets">
                    <h6>John Doe</h6>
                    <h5>Admin</h5>
                  </div>
                </div>
                <hr className="m-0" />
                <a className="dropdown-item" href="profile.html">
                  {" "}
                  <i className="me-2" data-feather="user"></i> My Profile
                </a>
                <a className="dropdown-item" href="generalsettings.html">
                  <i className="me-2" data-feather="settings"></i>Settings
                </a>
                <hr className="m-0" />
                <a className="dropdown-item logout pb-0" href="signin.html">
                  <img
                    src="/src/assets/img/icons/log-out.svg"
                    className="me-2"
                    alt="img"
                  />
                  Logout
                </a>
              </div>
            </div>
          </li>
        </ul>

        <div className="dropdown mobile-user-menu">
          <a
            href="javascript:void(0);"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="generalsettings.html">
              Settings
            </a>
            <a className="dropdown-item" href="signin.html">
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
