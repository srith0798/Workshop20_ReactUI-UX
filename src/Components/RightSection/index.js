import {
  Box,
  Button,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
} from "@mui/material";
import userData from "../../userData";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import NotFound from "../NotFound";

import "./index.css";
import { useState } from "react";
import SurgeryTab from "../SurgeryTab";

const RightSection = () => {
  const tabList = [
    "List of prior Surgeries",
    "List of Medical Diagnosis",
    "List of Medications",
    "Airway Evaluation",
    "Anesthesia Clearance and Recommendation",
  ];

  const [surgTab, changeSurgTab] = useState(false);
  // const [colorTab, changeColor] = useState(false);
  const [diagTab, changeDiagTab] = useState(false);
  const [mediTab, changeMediTab] = useState(false);
  const [evalTab, changeEvalTab] = useState(false);
  const [recomTab, changeRecomTab] = useState(false);

  function displayDocs(x) {
    switch (x) {
      case tabList[0]:
        return changeSurgTab(!surgTab);
      case tabList[1]:
        return changeDiagTab(!diagTab);
      case tabList[2]:
        return changeMediTab(!mediTab);
      case tabList[3]:
        return changeEvalTab(!evalTab);
      case tabList[4]:
        return changeRecomTab(!recomTab);
      default:
        return null;
    }
  }

  function changeColor(event) {
    if (surgTab || diagTab || mediTab || evalTab || recomTab) {
      event.target.style.color = "#0091ea";
    }
  }
  return (
    <div className="container_right">
      {/* Top Section */}
      <div className="top_sec">
        <Box>
          <div className="rightSec_title">
            <Typography variant="body1" color="initial">
              Patient Information
            </Typography>
            <div className="date_status">
              <Typography mr={2} color={"#9e9e9e"}>
                Last updated:
                <Typography component={"span"} color={"#000"}>
                  10:25 AM, today
                </Typography>
              </Typography>
              <MoreHorizIcon sx={{ fill: "#9e9e9e" }} />
            </div>
          </div>

          <div className="table_container">
            {/* Table#1 */}
            <div className=" table_flex chro_1">
              <img
                className="pro_pic"
                src={userData[0].picture.large}
                alt={userData[0].id}
              />
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      >{`${userData[0].name.title}. ${userData[0].name.first} ${userData[0].name.last}`}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Phone:
                        <span className="value">{userData[0].cellNo}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Gender:
                        <span className="value">{userData[0].gender}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Age: <span className="value">{userData[0].age}</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* Table#2 */}
            <div className=" ">
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Surgery Type:
                        <span className="value">{userData[0].surgeryType}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Surgery Date:
                        <span className="value">{userData[0].surgeryDate}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Height(cm):
                        <span className="value">{userData[0].height}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Weight(lb):
                        <span className="value">{userData[0].weight}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        BMI: <span className="value">{userData[0].bmi}</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* Table#3 */}
            <div className=" ">
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Anesthesiologist:
                        <span className="value">{userData[0].doctorName}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Anesthesiologist Phone:
                        <span className="value">
                          {userData[0].doctorMobile}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                        }}
                      >
                        Anesthesiologist Email:
                        <span className="value">{userData[0].doctorMail}</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* Surgery Status */}
            <div className="surgery_status">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#9e9e9e",
                  p: 2,
                }}
              >
                Surgery Clearance
              </Typography>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  backgroundColor: "#00c853",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                component={"div"}
              >
                <p style={{ color: "white", fontSize: "20px" }}>Yes</p>
              </Box>
            </div>
          </div>
        </Box>
        <ul className="tab_items_md">
          {tabList.map((each) => (
            <Paper
              elevation={3}
              sx={{
                width: "150px",
                marginTop: 2,
                marginX: 2,
                paddingX: 2.5,
                paddingY: 1,
                display: "flex",
                alignItems: "center",
              }}
              className={`${each !== tabList[0] ? "active_tab" : ""}`}
              key={each}
            >
              <Typography
                className={`${each === tabList[0] ? "active_text" : ""}`}
                textAlign={"center"}
                variant="body2"
              >
                {each}
              </Typography>
            </Paper>
          ))}
        </ul>
      </div>
      {/* Bottom Section */}
      <div className="bottom_sec">
        <ul className="tab_items_xs">
          {tabList.map((each) => (
            <Paper
              elevation={3}
              sx={{
                width: "150px",
                marginTop: 2,
                marginX: 2,
                padding: 2,
                display: "flex",
                alignItems: "center",
              }}
              className={`${each !== tabList[0] ? "active_tab" : ""}`}
              key={each}
              onClick={() => displayDocs(each)}
            >
              <Typography
                textAlign={"center"}
                variant="body2"
                onClick={changeColor}
              >
                {each}
              </Typography>
            </Paper>
          ))}
        </ul>
      </div>
      {/* Patient History */}
      <div className="pat_history">
        {/* Box1 */}
        <div className="box">
          <Typography
            sx={{ bgcolor: "#e1f5fe", p: 2 }}
            variant="body1"
            component={"h5"}
          >
            First Time Surgery
          </Typography>
          <Typography
            sx={{ bgcolor: "#eeeeee", p: 2 }}
            variant="body2"
            component={"p"}
          >
            No
          </Typography>
        </div>
        {/* Box2 */}
        <div className="box">
          <Typography
            sx={{ bgcolor: "#e1f5fe", p: 2 }}
            variant="body1"
            component={"h5"}
          >
            First history of Surgical Complications
          </Typography>
          <Typography
            sx={{ bgcolor: "#eeeeee", p: 2 }}
            variant="body2"
            component={"p"}
          >
            Yes
          </Typography>
        </div>
        {/* Box3 */}
        <div className="box">
          <Typography
            sx={{ bgcolor: "#e1f5fe", p: 2 }}
            variant="body1"
            component={"h5"}
          >
            If, yes please provide the details
          </Typography>
          <Typography
            sx={{ bgcolor: "#eeeeee", p: 2 }}
            variant="body2"
            component={"p"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            duis
          </Typography>
        </div>
        {/* Table */}
        <Typography color={"#424242"} mb={2}>
          Previous Surgeries
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "#e1f5fe" }}>
                <TableCell>Surgery Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Anesthesia Type</TableCell>
                <TableCell>Surgical Complications</TableCell>
                <TableCell>
                  Anesthetic Complications(nausea,vomiting,difficult incubation)
                </TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ bgcolor: "#eeeeee" }}>
                <TableCell>Shoulder reconstruction</TableCell>
                <TableCell>January 2008</TableCell>
                <TableCell>General 'Breathing Tube'</TableCell>
                <TableCell>No</TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <DeleteIcon /> <EditIcon />{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button sx={{ marginY: 2 }} variant="contained" startIcon={<AddIcon />}>
          Add Surgery
        </Button>
      </div>

      {/* Responsive Modal  */}
      <div className="backDrop">
        {surgTab && <SurgeryTab funcAlter={changeSurgTab} />}
        {diagTab && <NotFound funcAlter={changeDiagTab} />}
        {mediTab && <NotFound funcAlter={changeMediTab} />}
        {evalTab && <NotFound funcAlter={changeEvalTab} />}
        {recomTab && <NotFound funcAlter={changeRecomTab} />}
      </div>
    </div>
  );
};

export default RightSection;
