// import Navbar from "../../components/Navbar/Navbar";
import "./Contact.scss";
import "../../css/_utility.scss";
import contactPNG from "../../assets/contact.png";
// import facebookIcon from "../../assets/icons/facebook.png";
// import instagramIcon from "../../assets/icons/instagram.png";
// import whatsappIcon from "../../assets/icons/whatsapp.png";

const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* main content */}
      <div className="contact openAnimation">
        <div className="contact-wrap">
          <div className="container">
            <img src={contactPNG} alt="contact" />
            <div className="item">
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
                  {/* <a href="http://wa.me/+6281929984560?text=gege" className="btn btn-primary material-symbols-outlined">
                    send
                  </a> */}
                  {/* <a href="http://wa.me/+6285714382010?text=tutor+bang" className="btn btn-primary material-symbols-outlined">
                    send
                  </a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
