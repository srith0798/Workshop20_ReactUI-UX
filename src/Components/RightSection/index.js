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
  const [commonTab, changeCommonTab] = useState(false);

  function displayDocs(x) {
    const result =
      x === tabList[0] ? changeSurgTab(!surgTab) : changeCommonTab(!commonTab);
    return result;
  }

  return (
    <div className="container_right">
      {/* Top Section */}
      <div className="top_sec">
        <Box>
          <div className="rightSec_title">
            <Typography
              fontSize={"16px"}
              fontWeight={500}
              variant="body1"
              color="initial"
            >
              Patient Information
            </Typography>
            <div className="date_status">
              <Typography mr={2} fontSize={"14px"} color={"#9e9e9e"}>
                Last updated:
                <Typography component={"span"} fontSize={"14px"} color={"#000"}>
                  10:25 AM, today
                </Typography>
              </Typography>
              <MoreHorizIcon sx={{ fill: "#9e9e9e" }} />
            </div>
          </div>
          {/* Table */}
          <div className="table_container">
            {/* Table#1 */}
            <div className=" table_flex">
              <img
                className="pro_pic"
                src={userData[0].picture.large}
                alt={userData[0].id}
              />
              <div className="tab_info">
                <table className="tab_box_1">
                  <tbody>
                    <tr>
                      <td className="patient_name">{`${userData[0].name.title}. ${userData[0].name.first} ${userData[0].name.last}`}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                    </tr>
                  </tbody>
                </table>
                <table className="tab_box_2">
                  <tbody>
                    <tr>
                      <td>{userData[0].cellNo}</td>
                    </tr>
                    <tr>
                      <td>{userData[0].gender}</td>
                    </tr>
                    <tr>
                      <td>{userData[0].age}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#000",
                          fontWeight: "bold",
                          padding: "6px",
                        }}
                      >{`${userData[0].name.title}. ${userData[0].name.first} ${userData[0].name.last}`}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                          padding: "6px",
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
                          padding: "6px",
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
                          padding: "6px",
                        }}
                      >
                        Age: <span className="value">{userData[0].age}</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer> */}
            </div>
            {/* Table#2 */}
            <div className="tab_info">
              <table className="tab_box_3">
                <tbody>
                  <tr>
                    <td>Surgery Type:</td>
                  </tr>
                  <tr>
                    <td>Surgery Date:</td>
                  </tr>
                  <tr>
                    <td>Height(cm):</td>
                  </tr>
                  <tr>
                    <td>Weight(lb):</td>
                  </tr>
                  <tr>
                    <td>BMI:</td>
                  </tr>
                </tbody>
              </table>
              <table className="tab_box_4">
                <tbody>
                  <tr>
                    <td>{userData[0].surgeryType}</td>
                  </tr>
                  <tr>
                    <td>{userData[0].surgeryDate}</td>
                  </tr>
                  <tr>
                    <td>{userData[0].height}</td>
                  </tr>
                  <tr>
                    <td>{userData[0].weight}</td>
                  </tr>
                  <tr>
                    <td>{userData[0].bmi}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className=" ">
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                          padding: "6px",
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
                          padding: "6px",
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
                          padding: "6px",
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
                          padding: "6px",
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
                          padding: "6px",
                        }}
                      >
                        BMI: <span className="value">{userData[0].bmi}</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div> */}
            {/* Table#3 */}
            <div className="tab_info">
              <table className="tab_box_5">
                <tbody>
                  <tr>
                    <td>Anesthesiologist:</td>
                  </tr>
                  <tr>
                    <td>Anesthesiologist Phone:</td>
                  </tr>
                  <tr>
                    <td>Anesthesiologist Email:</td>
                  </tr>
                </tbody>
              </table>
              <table className="tab_box_6">
                <tbody>
                  <tr>
                    <td>{userData[0].doctorName}</td>
                  </tr>
                  <tr>
                    <td>{userData[0].doctorMobile}</td>
                  </tr>
                  <tr>
                    <td>{userData[0].doctorMail}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className=" ">
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          color: "#9e9e9e",
                          padding: "6px",
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
                          padding: "6px",
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
                          padding: "6px",
                        }}
                      >
                        Anesthesiologist Email:
                        <span className="value">{userData[0].doctorMail}</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div> */}
            {/* Surgery Status */}
            <div className="surgery_status">
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#9e9e9e",
                  p: "5px",
                  marginBottom: 1,
                }}
              >
                Surgery Clearance
              </Typography>
              <Box
                sx={{
                  width: 71,
                  height: 71,
                  borderRadius: "50%",
                  backgroundColor: "#00c853",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                component={"div"}
              >
                <p style={{ color: "white", fontSize: "18px" }}>Yes</p>
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
                height: "64px",
                marginTop: "30px",
                marginLeft: "2px",
                paddingX: 2.5,
                paddingY: 1,
                display: "flex",
                alignItems: "center",
                borderRadius: "2px",
                boxShadow: 0,
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
              key={each}
              onClick={() => displayDocs(each)}
            >
              <Typography textAlign={"center"} variant="body2">
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
        {/* Table Larger Screen */}
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
        {commonTab && <NotFound funcAlter={changeCommonTab} />}
      </div>
    </div>
  );
};

export default RightSection;
