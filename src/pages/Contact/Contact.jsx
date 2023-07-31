// import Navbar from "../../components/Navbar/Navbar";
import "./Contact.scss";
import contactPNG from "../../assets/contact.png";
// import facebookIcon from "../../assets/icons/facebook.png";
// import instagramIcon from "../../assets/icons/instagram.png";
// import whatsappIcon from "../../assets/icons/whatsapp.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrap openAnimation">
        <div className="container">
          <img src={contactPNG} alt="contact" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="500" />
          <div className="item" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h1>
              Contact <span>US</span>
            </h1>
            <form>
              <label htmlFor="email">Name : </label>
              <input type="text" id="email" placeholder="yourname" />
              <label htmlFor="massage">Massage : </label>
              <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
              <div>
                <input type="submit" value="send" className="btn btn-primary material-symbols-outlined" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
