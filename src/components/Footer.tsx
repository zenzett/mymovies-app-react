import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.discord.com/">
            <FaDiscord size="1.5rem" />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter size="1.5rem" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube size="1.5rem" />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookF size="1.5rem" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size="1.5rem" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by MOVIX Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
