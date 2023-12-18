import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Modal from "react-modal";
import disableScroll from "disable-scroll";

import "./App.css";
import CardPage from "./pages/CardPage";
import DesktopPage from "./pages/DesktopPage";
import modalAlert from "../src/images/modalAlert.png";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "40%",
      height: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "translate(-50%, -50%)",
      fontSize: "1.4rem",
    },
  };

  // 스크롤 로직을 직접 호출
  useEffect(() => {
    if (isMobile) {
      disableScroll.off();
    } else {
      disableScroll.on();
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div id="App" className="App" data-scroll-container>
        <CardPage />
      </div>
    );
  } else {
    return (
      <div id="App" className="App" data-scroll-container>
        <Modal isOpen={true} style={customStyles}>
          <div id="app-inner-div">
            <img
              src={modalAlert}
              style={{ width: "15%", height: "15%", verticalAlign: "bottom" }}
              alt="모달알림"
            ></img>
            모바일에서 확인해주세요.
          </div>
        </Modal>
        <DesktopPage />
      </div>
    );
  }
};

export default App;
