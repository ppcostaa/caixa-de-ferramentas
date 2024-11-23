import React, { useState } from "react";
import ReactDOM from "react-dom";
import imageSrc from "./images/tool-box-clipart-lg.png";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    paddingTop: "50px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "500px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    animation: "slideIn 1s ease-in-out",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  button: {
    transitionDuration: "0.4s",
    padding: "16px 32px",
    borderRadius: "4px",
    backgroundColor: "white",
    color: "black",
    border: "2px solid #555555",
    cursor: "pointer",
    position: "relative",
    zIndex: 10,
    fontFamily: "Georgia",
    // fontWeight: "bold",
    fontSize: "20px",
  },
  buttonHover: {
    backgroundColor: "#555555",
    color: "white",
  },
  image: {
    width: "300px",
    height: "auto",
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    animation: "fallDown 3s ease-out forwards",
    zIndex: 5,
  },
};

const globalStyle = `
  @keyframes slideIn {
    from {
      margin-top: 100%;
      width: 300%;
    }
    to {
      margin-top: 0%;
      width: 100%;
    }
  }

  @keyframes fallDown {
    from {
      transform: translateX(-50%) translateY(-150vh);
    }
    to {
      transform: translateX(-50%) translateY(calc(100vh - 935px));
    }
  }
`;

const head = document.head;
const styleTag = document.createElement("style");
styleTag.innerHTML = globalStyle;
head.appendChild(styleTag);
function Popup({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  return (
    <div>
      <div style={styles.container}>
        <button
          style={{
            ...styles.button,
            marginTop: "25vh",
            ...(isHovered ? styles.buttonHover : {}),
          }}
          onClick={openPopup}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Popup
        </button>
      </div>
      <Popup isVisible={isPopupVisible} onClose={closePopup}>
        <h1>Criei um popup para minha caixa de ferramentas, oba!</h1>
        <p>Pouco a pouco, povoaremos essa caixinha :D</p>
      </Popup>
      <img src={imageSrc} style={styles.image} alt="Tool Box" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
