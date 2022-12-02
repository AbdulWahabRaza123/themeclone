import styles from "../../styles/HomeDown.module.css";
import { WhatWorkHomeProps } from "../PropsInterface";
const WhatWorkHome = (props: WhatWorkHomeProps) => {
  return (
    <>
      <div className="col-md-4">
        <div className={`${styles.main} `}>
          <div className={`d-flex`}>
            <h3>
              <b>{props.title}</b>
            </h3>
          </div>
        </div>
        <div className={`container container-fluid mt-3 ${styles.inner}`}>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default WhatWorkHome;
