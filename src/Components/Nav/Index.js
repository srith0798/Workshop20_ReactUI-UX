import { makeStyles } from "@mui/styles";
import { useState } from "react";

import "./Index.css";

const useStyle = makeStyles({
  activeIn: {
    backgroundColor: "#0091ea",
    width: "100%",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 30,
    paddingRight: 30,
    cursor: "pointer",
    color: "white",
  },
});

function Nav() {
  const inStyles = useStyle();

  const [anchorNavEl, changeStatus] = useState(true);
  const anchorNav = () => {
    changeStatus(!anchorNavEl);
    // console.log(anchorNavEl);
  };
  const status = anchorNavEl ? "active" : "";
  return (
    <div className="Navbar">
      {/* Larger Screen */}
      <div className="menu_item">
        <img
          className="pic"
          src="https://cdn.zeplin.io/5fe1c546802ac2404fc9aa60/assets/ab313db0-9615-4d30-9e8f-c98d3152b886-3x.png"
          alt="logo"
        />

        <h4 className={inStyles.activeIn}>Patients</h4>
        <h4>Calendars</h4>
        <h4>Users</h4>
        <h4>Billing</h4>
      </div>
      {/* Responsive */}
      <img
        onClick={anchorNav}
        className=" pic responsive_logo"
        src="https://cdn.zeplin.io/5fe1c546802ac2404fc9aa60/assets/ab313db0-9615-4d30-9e8f-c98d3152b886-3x.png"
        alt="logo"
      />
      <div className={`${status} responsive_items`}>
        <h4 className={inStyles.activeIn}>Patients</h4>
        <h4 className="responsive_item">Calendars</h4>
        <h4 className="responsive_item">Users</h4>
        <h4 className="responsive_item">Billing</h4>
      </div>
      {/* Notification Box */}
      <div className="bell">
        <img
          src="https://cdn.zeplin.io/5fe1c546802ac2404fc9aa60/assets/1bab25d9-eaa9-4f5c-a282-bcb50f400866.svg"
          alt="bell"
        />
        <span className="period">.</span>
        <img
          className="user-pic"
          src="https://randomuser.me/api/portraits/med/women/2.jpg"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Nav;
