import Image from "next/image";
import styles from "../../styles/HomeDown.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SocialIcons from "../SocialIcons";
import { TeamCardProps } from "../PropsInterface";
const TeamCard = (props: TeamCardProps) => {
  return (
    <>
      <div className="col-md-4 text-center">
        <div className="member mb-5">
          <Image
            style={{ borderRadius: "50%" }}
            src={props.src}
            alt="team"
            width="150px"
            height="150px"
          />
          <h5>{props.name}</h5>
          <progress
            className={`mt-1 mb-3 ${styles.progress}`}
            value="18"
            max="100"
          >
            18%
          </progress>

          <p>
            <span style={{ fontSize: "16px" }}>FOUNDER-&nbsp;</span>
            {props.description}
          </p>
          <FacebookIcon />
          <SocialIcons icon={InstagramIcon} margin="5px" />
          <SocialIcons icon={TwitterIcon} margin="5px" />
          <SocialIcons icon={WhatsAppIcon} margin="5px" />
        </div>
      </div>
    </>
  );
};

export default TeamCard;
