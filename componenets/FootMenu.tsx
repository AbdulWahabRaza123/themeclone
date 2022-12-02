import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/Home.module.css";
import SocialIcons from "./SocialIcons";
const FootMenu = () => {
  return (
    <>
      <div className={`${styles.footer_mobile_false}`}>
        <div className="mt-5">
          <div className="d-flex">
            <FacebookIcon />
            <SocialIcons icon={InstagramIcon} margin="5px" />
            <SocialIcons icon={TwitterIcon} margin="5px" />
            <SocialIcons icon={WhatsAppIcon} margin="5px" />
            <SocialIcons icon={GitHubIcon} margin="5px" />
            <SocialIcons icon={RedditIcon} margin="5px" />
          </div>
        </div>

        <div className="mt-2">
          <footer>All &copy; Right Reverse</footer>
        </div>
      </div>
    </>
  );
};
export default FootMenu;
