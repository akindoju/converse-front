import { useState } from 'react';
import './join.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constant/routes';
import Header from '../../components/Header/Header';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const isInvalid = !name || !room;

  return (
    <div>
      <Header />
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="sub-heading">Join</h1>
          <form>
            <div>
              <input
                type="text"
                className="joinInput"
                placeholder="Name"
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="joinInput mt-20"
                placeholder="Room"
                onChange={({ target }) => setRoom(target.value)}
              />
            </div>
            <Link to={`${ROUTES.CHAT}?name=${name}&room=${room}`}>
              <button
                className={isInvalid ? 'btn-disabled' : 'button mt-20'}
                type="submit"
                disabled={isInvalid}
              >
                Join Room
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
