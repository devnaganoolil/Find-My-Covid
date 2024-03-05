import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";

import PerfectScrollbar from "perfect-scrollbar";

var ps;

function Sidebar(props) {
    const [backgroundColor, setBackgroundColor] = React.useState("black");
    const [activeColor, setActiveColor] = React.useState("info");
    const location = useLocation();
    const sidebar = React.useRef();
    const activeRoute = (routeName) => {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
      };
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(sidebar.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
        }
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
            }
        };
    });

    return (
        <div className="sidebar"
         data-color={props.backgroundColor}>
            <div className="sidebar-wrapper" ref={sidebar}>
                <Nav>
                    {props.routes.map((prop, key) => {
                        return (
                            <li
                                className={
                                    prop.upgrade
                                        ? "active active-pro"
                                        : prop.pro
                                        ? "active active-pro"
                                        : ""
                                }
                                key={key}
                            >
                                <NavLink
                                    to={prop.layout + prop.path}
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className={prop.icon} />
                                    <p>{prop.name}</p>
                                </NavLink>
                            </li>
                        );
                    })}
                </Nav>
            </div>
        </div>
    );
}

export default Sidebar;
