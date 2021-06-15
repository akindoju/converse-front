import * as ROUTES from "../../constant/routes";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room, activeUsers, setIsActiveUsersBtnClicked }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="online icon" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <button
          onClick={(event) => {
            event.preventDefault();
            setIsActiveUsersBtnClicked(
              (setIsActiveUsersBtnClicked) => !setIsActiveUsersBtnClicked
            ); //toggle active users btn
          }}
          className="activeUsersBtn"
        >
          {activeUsers.length}
        </button>
        <a href={ROUTES.JOIN}>
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
