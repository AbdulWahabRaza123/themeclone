import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InfoIcon from "@mui/icons-material/Info";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ContactsIcon from "@mui/icons-material/Contacts";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
const NavLI = () => {
  const router = useRouter();
  return (
    <>
      <li
        className={`nav-item ${styles.home_border_above} ${
          styles.set_flex_icon_text
        } ${router.pathname == "/" ? "active" : ""}`}
      >
        <HomeIcon className={`${styles.margin_icon}`} />
        <Link href="/">
          <a className={`nav-link`}>home</a>
        </Link>
      </li>
      <li
        className={`nav-item ${styles.set_flex_icon_text} ${
          router.pathname == "/works" ? "active" : ""
        }`}
      >
        <HomeRepairServiceIcon className={`${styles.margin_icon}`} />
        <Link href="/works">
          <a className="nav-link">works</a>
        </Link>
      </li>
      <li
        className={`nav-item ${styles.set_flex_icon_text} ${
          router.pathname == "/about" ? "active" : ""
        }`}
      >
        <InfoIcon className={`${styles.margin_icon}`} />
        <Link href="/about">
          <a className="nav-link">about</a>
        </Link>
      </li>
      <li
        className={`nav-item ${styles.set_flex_icon_text} ${
          router.pathname == "/features" ? "active" : ""
        }`}
      >
        <FeaturedPlayListIcon className={`${styles.margin_icon}`} />
        <Link href="/">
          <a className="nav-link">features</a>
        </Link>
      </li>
      <li
        className={`nav-item ${styles.set_flex_icon_text} ${
          router.pathname == "/blog" ? "active" : ""
        }`}
      >
        <PostAddIcon className={`${styles.margin_icon}`} />
        <Link href="/">
          <a className="nav-link">blog</a>
        </Link>
      </li>
      <li
        className={`nav-item ${styles.set_flex_icon_text} ${
          router.pathname == "/contact" ? "active" : ""
        }`}
      >
        <ContactsIcon className={`${styles.margin_icon}`} />
        <Link href="/contact">
          <a className="nav-link" href="#">
            contact
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavLI;
