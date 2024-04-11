import './about.css'
// import '../../component/card/card.css'
import CV from '../../assets/AshuResume.pdf'
import { HiDownload } from "react-icons/hi";
import Card from '../../component/card/Card';
import data from './data';
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
          <img src="/portrait-2.svg" alt="" />
          </div>
         
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
          {data.map(item=>(
            <Card key={item.id} className="about__card">
              <span className='about__card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
          </div>
          <p>
          Hi, my name is Ashutosh Singh and I'm from Prayagraj, India.
I recently graduated with a Bachelor's degree in Computer Science and Engineering in 2023.
As a Frontend developer, I enjoy tackling new challenges and continuously expanding my skillset.
I am proficient in Javascript, as well as have knowledge in programming languages such as C++, Python.
I have a passion for working with modern Javascript libraries and frameworks  like React.js
I am also interested in building new Web Technologies and Products, as well as exploring areas related to Artificial Intelligence.
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About