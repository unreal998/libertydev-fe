import './styles/style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact-info">
        <p className="footer__description">Let's Bring Your Ideas to Life</p>
        <p className="footer__description">
          Opportunities don't happen, you create them. Fill in the quick form so
          we can contact you.
        </p>
        <div className="footer__contact-item">
          <p className="footer__contact-icon">img</p>
          <div>
            <p className="footer__contact-title">you can email us</p>
            <p className="footer__contact-details">solutions@axisbits.ch</p>
          </div>
        </div>
        <div className="footer__contact-item">
          <p className="footer__contact-icon">img</p>
          <div>
            <p className="footer__contact-title">or give us a call</p>
            <p className="footer__contact-details">+380 96 000 00 00</p>
          </div>
        </div>
      </div>
      <div className="footer__contact-form">
        <input
          className="footer__input footer__input--name"
          placeholder="Name"
        />
        <input
          className="footer__input footer__input--email"
          placeholder="Email"
        />
        <input
          className="footer__input footer__input--phone"
          placeholder="Phone"
        />
        <input
          className="footer__input footer__input--message"
          placeholder="Message"
        />
        <button className="footer__button">Send</button>
      </div>
    </div>
  );
};

export default Footer;
