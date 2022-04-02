import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
} from "@mui/material";

import "./index.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

function SurgeryTab(params) {
  const { funcAlter } = params;
  const changeStatus = () => {
    funcAlter(false);
  };
  return (
    <div className="active_page">
      {/* Box1 */}
      <div className="box">
        <Typography
          sx={{ bgcolor: "#e1f5fe", p: 2, fontWeight: 400 }}
          variant="body1"
          component={"h6"}
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
          sx={{ bgcolor: "#e1f5fe", p: 2, fontWeight: 400 }}
          variant="body1"
          component={"h5"}
        >
          First History of Surgical Complications
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
          sx={{ bgcolor: "#e1f5fe", p: 2, fontWeight: 400 }}
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis
        </Typography>
      </div>
      <Typography color={"#424242"} fontWeight={"400"} fontSize={16} mb={2}>
        Previous Surgeries
      </Typography>
      {/* Table_md */}
      <Box className="table_md">
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
      </Box>
      {/* Table_responsive */}
      <Box className="table_sm">
        <div className="tab_items">
          <div className="tab_item">
            <Typography variant="body1" className="tab_head">
              Surgery Type
            </Typography>
            <Typography variant="body2" className="tab_cell">
              Shoulder reconstruction
            </Typography>
          </div>
          <div className="tab_item">
            <Typography variant="body1" className="tab_head">
              Date
            </Typography>
            <Typography variant="body2" className="tab_cell">
              January 2008
            </Typography>
          </div>
          <div className="tab_item">
            <Typography variant="body1" className="tab_head">
              Anesthesia Type
            </Typography>
            <Typography variant="body2" className="tab_cell">
              General 'Breathing Tube'
            </Typography>
          </div>
          <div className="tab_item">
            <Typography variant="body1" className="tab_head">
              Surgical Complications
            </Typography>
            <Typography variant="body2" className="tab_cell">
              No
            </Typography>
          </div>
          <div className="tab_item">
            <Typography variant="body1" className="tab_head">
              Anesthetic Complications(nausea,vomiting,difficult incubation)
            </Typography>
            <Typography variant="body2" className="tab_cell">
              No
            </Typography>
          </div>
        </div>
      </Box>

      <Button sx={{ marginY: 2 }} variant="contained" startIcon={<AddIcon />}>
        Add Surgery
      </Button>
      <ClearIcon className="del_icon" onClick={changeStatus} />
    </div>
  );
}

export default SurgeryTab;
