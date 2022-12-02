import styles from "../../styles/HomeDown.module.css";
import CarouselCustom from "../HomeComp/CarouselCustom";
import TeamCard from "./TeamCard";
const About = () => {
  return (
    <>
      <div className={`text-center ${styles.main}`}>
        <h1>ABOUT US</h1>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 mt-5">
          <CarouselCustom
            imgSrc={["/well-slider1.jpg"]}
            width="600px"
            height="330px"
          />
        </div>
        <div className={`col-md-6 mt-5 ${styles.main}`}>
          <h5>WELCOME TO OUR SITE</h5>
          <progress
            className={`mt-1 mb-3 ${styles.progress_about}`}
            value="18"
            max="100"
          >
            18%
          </progress>
          <p>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora, orquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo.
          </p>
        </div>
      </div>
      <div className={`${styles.main}`}>
        <div className={`mt-5 mb-5`}>
          <h5>
            <b>MEET OUR TEAM</b>
          </h5>
        </div>
        <div className="row">
          <TeamCard
            src="/member1.jpg"
            name="Anthony Doe"
            description=" nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit."
          />
          <TeamCard
            src="/member2.jpg"
            name="Joesphina Doe"
            description=" nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit."
          />
          <TeamCard
            src="/member3.jpg"
            name="Marshall Doe"
            description="  nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit."
          />
        </div>
      </div>
    </>
  );
};

export default About;
