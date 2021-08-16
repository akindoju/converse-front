import "./Message.css";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let currentUser = false;

  const trimmedName = name.trim().toLowerCase(); //where name is currentUser's name
  const admin = user === "admin";
  const otherPeople = !currentUser && !admin;

  user === trimmedName && (currentUser = true);

  return (
    <div>
      {currentUser ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">Me</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : otherPeople ? (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10">{user}</p>
        </div>
      ) : (
        admin && <div className="adminMsg">{text}</div>
      )}
    </div>
  );
};
export default Message;
