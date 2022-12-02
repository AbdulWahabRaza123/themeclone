import styles from "../../styles/HomeDown.module.css";
import { WhatLikeHomeProps } from "../PropsInterface";
const WhatLikeHome = (props: WhatLikeHomeProps) => {
  return (
    <>
      <div className="col-md-4">
        <div
          className="designing"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <props.icon
            className="mb-2"
            style={{ width: "70px", height: "70px" }}
          />
          <h5>
            <b>{props.title}</b>
          </h5>
          <progress
            className={`mt-1 mb-4 ${styles.progress}`}
            value="18"
            max="100"
          >
            18%
          </progress>
          <p style={{ fontSize: "14px" }}>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default WhatLikeHome;
