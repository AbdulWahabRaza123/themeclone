import styles from "../../styles/HomeDown.module.css";
import { useState } from "react";
import WorkPics from "./WorkPics";
import All from "./WorkTypes/All";
import CssDesign from "./WorkTypes/css";
import Design from "./WorkTypes/design";
import html from "./WorkTypes/html";
import Illustrator from "./WorkTypes/illustrator";
import web from "./WorkTypes/web";
const Work = () => {
  const [btnFlag, setBtnFlag] = useState({
    btn1: true,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
    btn6: false,
  });
  const handleColorBtn = (btn: string) => {
    if (btn == "btn1") {
      if (btnFlag.btn1 === false) {
        setBtnFlag({
          btn1: true,
          btn2: false,
          btn3: false,
          btn4: false,
          btn5: false,
          btn6: false,
        });
      }
    } else if (btn == "btn2") {
      if (btnFlag.btn2 === false) {
        setBtnFlag({
          btn1: false,
          btn2: true,
          btn3: false,
          btn4: false,
          btn5: false,
          btn6: false,
        });
      }
    } else if (btn == "btn3") {
      if (btnFlag.btn3 === false) {
        setBtnFlag({
          btn1: false,
          btn2: false,
          btn3: true,
          btn4: false,
          btn5: false,
          btn6: false,
        });
      }
    } else if (btn == "btn4") {
      if (btnFlag.btn4 === false) {
        setBtnFlag({
          btn1: false,
          btn2: false,
          btn3: false,
          btn4: true,
          btn5: false,
          btn6: false,
        });
      }
    } else if (btn == "btn5") {
      if (btnFlag.btn5 === false) {
        setBtnFlag({
          btn1: false,
          btn2: false,
          btn3: false,
          btn4: false,
          btn5: true,
          btn6: false,
        });
      }
    } else if (btn == "btn6") {
      if (btnFlag.btn6 === false) {
        setBtnFlag({
          btn1: false,
          btn2: false,
          btn3: false,
          btn4: false,
          btn5: false,
          btn6: true,
        });
      }
    } else {
    }
  };
  return (
    <>
      <div className="container container-fluid">
        <div className={`text-center ${styles.main}`}>
          <h2>Work</h2>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
        </div>
        <div className="container container-fluid mt-5">
          <div className={`text-center`}>
            <div className={`d-flex  ${styles.setBtnWork}`}>
              <button
                style={{
                  border: "1px solid #61DBFB",
                  marginTop: "5px",
                  backgroundColor: `${btnFlag.btn1 === true ? "#61DBFB" : ""}`,
                }}
                className="btn"
                onClick={() => {
                  handleColorBtn("btn1");
                }}
              >
                All
              </button>
              <button
                style={{
                  border: "1px solid #61DBFB",
                  marginLeft: "10px",
                  marginTop: "5px",
                  backgroundColor: `${btnFlag.btn2 === true ? "#61DBFB" : ""}`,
                }}
                className="btn"
                onClick={() => {
                  handleColorBtn("btn2");
                }}
              >
                Web
              </button>
              <button
                style={{
                  border: "1px solid #61DBFB",
                  marginLeft: "10px",
                  marginTop: "5px",
                  backgroundColor: `${btnFlag.btn3 === true ? "#61DBFB" : ""}`,
                }}
                className="btn"
                onClick={() => {
                  handleColorBtn("btn3");
                }}
              >
                Illustrator
              </button>
              <button
                style={{
                  border: "1px solid #61DBFB",
                  marginLeft: "10px",
                  marginTop: "5px",
                  backgroundColor: `${btnFlag.btn4 === true ? "#61DBFB" : ""}`,
                }}
                className="btn"
                onClick={() => {
                  handleColorBtn("btn4");
                }}
              >
                UI/UX
              </button>
              <button
                style={{
                  border: "1px solid #61DBFB",
                  marginLeft: "10px",
                  marginTop: "5px",
                  backgroundColor: `${btnFlag.btn5 === true ? "#61DBFB" : ""}`,
                }}
                className="btn"
                onClick={() => {
                  handleColorBtn("btn5");
                }}
              >
                HTML
              </button>
              <button
                style={{
                  border: "1px solid #61DBFB",
                  marginLeft: "5px",
                  marginTop: "5px",
                  backgroundColor: `${btnFlag.btn6 === true ? "#61DBFB" : ""}`,
                }}
                className="btn"
                onClick={() => {
                  handleColorBtn("btn6");
                }}
              >
                CSS
              </button>
            </div>
          </div>
        </div>
        {btnFlag.btn1 === true ? (
          <WorkPics All={All} />
        ) : btnFlag.btn2 === true ? (
          <WorkPics All={web} />
        ) : btnFlag.btn3 === true ? (
          <WorkPics All={Illustrator} />
        ) : btnFlag.btn4 === true ? (
          <WorkPics All={Design} />
        ) : btnFlag.btn5 === true ? (
          <WorkPics All={html} />
        ) : btnFlag.btn6 === true ? (
          <WorkPics All={CssDesign} />
        ) : null}
      </div>
    </>
  );
};

export default Work;
