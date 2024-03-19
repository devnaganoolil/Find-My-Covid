import React, { useState } from "react";
import { NavLink, useLocation , Link} from "react-router-dom";
import { Nav } from "reactstrap";
import * as FaIcons from "react-icons/fa";
import "./Sidebar.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { Icon } from "leaflet";

var ps;

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="Sidebar">
                <Link to="#" className = 'Menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <span className="toggle-text">FindMyCOVID</span> {/* Added text */}
            </div>
            <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>   
            </nav>
        </IconContext.Provider>
        </>

    )
}

export default Sidebar;
