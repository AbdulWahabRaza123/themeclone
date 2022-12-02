import styles from "../../styles/HomeDown.module.css";
const ContactUs = () => {
  return (
    <>
      <div className={`text-center ${styles.main}`}>
        <h1>Contact Us</h1>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
      </div>
      <div className="mt-5 mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106236.984694469!2d73.0136576!3d33.685504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1666264639199!5m2!1sen!2s"
          width="750"
          height="450"
          className={`${styles.map_style}`}
          style={{ border: "0px" }}
          loading="lazy"
        />
      </div>
      <div className={`${styles.main}`}>
        <div className="row">
          <h4>GET IN TOUCH</h4>
          <div className="col-md-8">
            <form className="mt-3 mb-5">
              <input
                name="name"
                placeholder="Enter Name"
                className="form-control"
                value=""
              />
              <input
                name="email"
                placeholder="Enter Email"
                className="form-control mt-3"
                value=""
              />
              <input
                name="name"
                placeholder="Enter URL"
                className="form-control mt-3"
                value=""
              />
              <textarea
                placeholder="Description"
                className="form-control mt-3"
                name="description"
              />
              <button className="btn btn-success mt-3">Submit</button>
            </form>
          </div>
          <div className="col-md-4 mt-3">
            <h3>Details:</h3>
            <ul className="mt-4">
              <li>121 King St, Melbourne VIC 3000, Australia</li>
              <li>+61 3 8376 6284</li>
              <li>+61 3 8376 6284</li>
              <li>contact@u-turn.com</li>
              <li>www.u-turn.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
