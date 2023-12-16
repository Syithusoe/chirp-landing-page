function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div>
          <p className="footer__logo">Chirp</p>
        </div>
        <div className="footer__right-section">
          <div>
            <img
              src="\assets\Twitter (Black).svg"
              alt=""
              width="20px"
              height="20px"
              className="footer__twitter-logo"
            />
          </div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
