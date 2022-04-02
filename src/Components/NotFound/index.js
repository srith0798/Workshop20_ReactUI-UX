import ClearIcon from "@mui/icons-material/Clear";
import "./index.css";

function NotFound(params) {
  const { funcAlter } = params;
  const changeStatus = () => {
    funcAlter(false);
  };
  return (
    <div className="errBox">
      <h1 className="errMsg">Not Found</h1>
      <ClearIcon className="x_icon" onClick={changeStatus} />
    </div>
  );
}

export default NotFound;
