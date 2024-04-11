import data from "./data";
import "./header.css";
import { FaRegMessage } from "react-icons/fa6";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header__profile">
          <img src="/portrait-1.svg" alt="tech_nerd" />
        </div>
        <h3>Ashutosh Singh</h3>
        <p>Hi, I am Ashutosh , a passionate Software Developer, based in India.</p>
        <div className="header__cta">
          <a href="#contact" className="btn primary"><FaRegMessage />Get in Touch</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>
        <div className="header__socials">
          {
          data.map(item=><a key={item.id} href={item.link} target="_blank" rel={item.rel}>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
