import styles from "../../styles/HomeDown.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import WhatLikeHome from "./WhatLikeHome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import WhatWorkHome from "./WhatWorkHome";
import CarouselWork from "./CarouselWork";
import CarouselCustom from "./CarouselCustom";
import { useState, useEffect } from "react";
import imageSrc from "../imagesData";
const HomeDown = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <>
      <CarouselCustom imgSrc={imageSrc} width="800px" height="400px" />
      <div className={`${styles.main} mt-5`}>
        <div className={`d-flex`}>
          <ArrowRightAltIcon className="margin_icon" />
          <h3>
            <b>What We Like To Do</b>
          </h3>
        </div>
      </div>
      <div className={`container container-fluid mt-5 ${styles.inner}`}>
        <div className="row">
          <WhatLikeHome
            icon={SettingsSystemDaydreamIcon}
            title="DESIGNING"
            content="We have two Designer for Design any Brand Template or Logo.
            Designing is their passion and their vision is always creative
            Design."
          />
          <WhatLikeHome
            icon={SettingsSuggestIcon}
            title="DEVELOPING"
            content="Two Developer work hard 12 hour daily. One of them develope
            WordPress and other Joomla. They are master of those CMS."
          />
          <WhatLikeHome
            icon={SettingsInputAntennaIcon}
            title="BRANDING"
            content="Branding is most important aspects of any business, large or
            small, retail or B2B.Our Branding manager control that with his
            idea."
          />
        </div>
      </div>
      {/* </div> */}
      <div className={`${styles.main} mt-5`}>
        <div className={`d-flex`}>
          <ArrowRightAltIcon className="margin_icon" />
          <h3>
            <b>What Work</b>
          </h3>
        </div>
      </div>
      <div className={`container container-fluid mt-5 ${styles.inner} mb-5`}>
        <div className="row">
          <CarouselWork />
        </div>
      </div>
      <hr />
      <div className="row mt-5 mb-5">
        <WhatWorkHome
          title="LATEST TWEET"
          content="We are working for build some necessary WP plugin which are really
              effective for SEO and helps you to rank into search engine."
        />
        <WhatWorkHome
          title="RECENT POSTS"
          content="We take our sunglass when we go out. We have to take care of our
          eye so that sunglass is very necessary for us."
        />
        <WhatWorkHome
          title="DRIBBLE SHOTS"
          content={[
            <>
              <p>This is dummy text here you can see anything.</p>
            </>,
          ]}
        />
      </div>
    </>
  ) : (
    <div />
  );
};

export default HomeDown;
