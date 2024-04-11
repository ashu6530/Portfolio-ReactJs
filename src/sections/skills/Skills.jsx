import { useState } from "react";
import "./skills.css";
import data from "./data";
import Card from "../../component/card/Card";
import softSkillsData from "./softSkillsData";



const Skills = () => {
  const [showFrontendSkills, setShowFrontendSkills] = useState(false);

  const handleFrontendClick = () => {
    setShowFrontendSkills(true);
  };

  const handleSoftSkillsClick = () => {
    setShowFrontendSkills(false);
  };
  return (
    <section id="skills">
    <div className="container skills__container">
      <div className="skills__btn-container">
      <button className="btn__padding btn primary" onClick={handleFrontendClick}>Frontend Skills</button> 
      <button className="btn__padding btn primary" onClick={handleSoftSkillsClick}>Soft Skills</button> 
      </div>
      
      {showFrontendSkills ? (
        <div className="skills__cards">
          {data.map(item=>(
            <Card key={item.id} className="skills__card">
              <span className='skills__card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
      ) : (
        <div className="skills__cards">
          {softSkillsData.map(item=>(
            <Card key={item.id} className="skills__card">
              <span className='skills__card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
         
        </div>
      )}
    </div>

    </section>
  );
};

export default Skills;
