import "./Footer.scss";
import Wave from "../../assets/img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>costec222@gmail.com</span>
        <div className="f-icons">
          <a href=" https://www.instagram.com/vitorc.alcantara/" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>

          <a href=" https://www.linkedin.com/in/vitoralcantara-dev/" target="_blank">
            <Linkedin color="white" size={"3rem"} />
          </a>

          <a href=" https://github.com/Vialc" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
