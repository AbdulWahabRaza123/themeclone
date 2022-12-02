import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import NavLI from "./NavLI";
import FooterMenu from "./FootMenu";
import { MenuProps } from "./PropsInterface";
const MenuPage = (props: MenuProps) => {
  const [flagBtn, setFlagBtn] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta
            name="description"
            content="This is a blogging app using next js"
          />
          <link rel="icon" href="/favicon.ico" />
          <title>{props.title}</title>
        </Head>
        <Script
          id="ajax"
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        />
        <Script
          id="bootstrap-min-js"
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        />
        <Script
          id="bootstrap"
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        />

        <div className="container container-fluid">
          <div className={styles.margin}>
            <div className="row">
              <div
                className={`col-md-8 mt-5 ${
                  flagBtn === true ? styles.add_margin : null
                }`}
              >
                {<props.Comp />}
              </div>

              <div
                className={`col-md-3 col-md-offset-1 ${styles.set_nav_res_flex} `}
              >
                <div className={`${styles.nav_list_col_flex}`}>
                  <div className={`${styles.image_container}`}>
                    <Image
                      className={`${styles.image}`}
                      src="/favicon.ico"
                      alt="icon"
                      width="150px"
                      height="70px"
                    />
                  </div>

                  <nav
                    className={`navbar navbar-expand-lg mt-5 ${styles.set_margin_nav_btn}`}
                  >
                    <button
                      onClick={() => {
                        if (flagBtn === true) {
                          setFlagBtn(false);
                        } else {
                          setFlagBtn(true);
                        }
                      }}
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul
                        className={`navbar-nav mr-auto ${styles.nav_list} ${styles.nav_list_col_flex}`}
                      >
                        <NavLI />
                      </ul>
                    </div>
                  </nav>
                  <FooterMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
