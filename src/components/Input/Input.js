import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <textarea
        type="text"
        className="input"
        placeholder="Type a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && sendMessage(event)}
      />
      <button
        className="sendButton"
        onClick={(event) => sendMessage(event)}
        onKeyPress={(event) => event.key === 'Enter' && sendMessage(event)}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
