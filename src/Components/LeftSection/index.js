import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";
import userData from "../../userData";
import { useState } from "react";

function LeftSection() {
  const userDataIn = userData;
  const [toggler, changeToggler] = useState(false);
  const toggleIcon = () => {
    changeToggler(!toggler);
  };
  return (
    <div className="container_left">
      <Typography className="left_head" variant="body1">
        Patients
      </Typography>
      {/* LargerScreen */}
      <div className="left_md">
        {toggler && (
          <Box>
            <div className="search-in">
              <input
                className="input"
                type="search"
                placeholder="Enter your search"
              />
              <SearchIcon className="s_icon" />
            </div>
            <ul className="user_lists">
              {userDataIn.map((each) => (
                <li key={each.id} className={`user_box user_box_${each.id} `}>
                  <img
                    className="user_pic"
                    src={each.picture.thumbnail}
                    alt={each.name.first}
                  />
                  <div className="user_content">
                    <Typography variant="p">{`${each.name.first} ${each.name.last}`}</Typography>
                    <Typography
                      className={`surg_date surg_${each.id}`}
                      variant="caption"
                    >
                      {each.surgeryDate}
                    </Typography>
                  </div>
                  <div className={` user_${each.id} user_status`}></div>
                </li>
              ))}
            </ul>
          </Box>
        )}
        {!toggler && (
          <Box>
            <ul className="user_lists">
              {userDataIn.map((each) => (
                <li key={each.id} className="user_box toggler_box">
                  <img
                    className="user_pic"
                    src={each.picture.thumbnail}
                    alt={each.name.first}
                  />
                  <div
                    className={` user_${each.id} user_status toggler_icon`}
                  ></div>
                </li>
              ))}
            </ul>
          </Box>
        )}
        {toggler ? (
          <img
            onClick={toggleIcon}
            className="arrow_icon"
            src="https://cdn.zeplin.io/5fe1c546802ac2404fc9aa60/assets/550c8ca0-259c-4e4e-af2b-0626bfc489db.svg"
            alt="arrow_icon"
          />
        ) : (
          <img
            onClick={toggleIcon}
            className="arrow_icon"
            src="https://cdn.zeplin.io/5fe1c546802ac2404fc9aa60/assets/312d7bd6-0435-4348-8bae-4f66df50b1a0.svg"
            alt="arrow_icon"
          />
        )}
      </div>
      {/* ResponsiveScreen */}
      <Box className="left_xs">
        <ul className="user_lists">
          {userDataIn.map((each) => (
            <li key={each.id} className="user_box toggler_box">
              <img
                className="user_pic"
                src={each.picture.thumbnail}
                alt={each.name.first}
              />
              <div
                className={` user_${each.id} user_status toggler_icon`}
              ></div>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default LeftSection;
