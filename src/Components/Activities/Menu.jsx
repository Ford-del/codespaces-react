import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();

  const menuMode = [
    { game: 'Number Guessing Game', path: '/number-guessing' },
    { game: 'Coin Flip', path: '/coin-flip' },
    { game: 'Rock Paper Scissors', path: '/rock-paper-scissors' },
  ];

  const [menu, setMenu] = useState(1);
  const [modeselect, setModeselect] = useState(null);

  const Mode = () => {
    if (modeselect) {
      navigate(modeselect.path);
    }
  };

  const handleChange = () => {
    setMenu((prevMenu) => prevMenu + 1);
  };

  const backChange = () => {
    setMenu((prevMenu) => prevMenu - 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '100px',
      }}
    >
      {menu === 1 && (
        <div>
          <h1>Welcome to Opi's Room of Recreation</h1>
          <button
            style={{
              width: '170px',
              height: '45px',
              alignSelf: 'center',
              marginTop: '50px',
              cursor: 'pointer'
            }}
            onClick={handleChange}
          >
            Start
          </button>
        </div>
      )}

      {menu === 2 && (
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>Select a mode</h1>
          <nav>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px',
                alignContent: 'center',
                justifyContent: 'center',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {menuMode.map((menu, index) => (
                <li
                  key={index}
                  style={{
                    cursor: 'pointer',
                    padding: '10px 0',
                    color: 'blue',
                    textDecoration: 'underline',
                  }}
                  onClick={() => setModeselect(menu)}
                >
                  {menu.game}
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={Mode}
            style={{
              marginTop: '20px',
              width: '170px',
              height: '45px',
              cursor: 'pointer'
            }}
          >
            Proceed
          </button>
          <button
            onClick={backChange}
            style={{
              marginTop: '20px',
              width: '170px',
              height: '45px',
              cursor: 'pointer'
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}


