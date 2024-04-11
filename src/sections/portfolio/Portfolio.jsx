
import data from './data';
import './portfolio.css'
const Portfolio = () => {
  
  return (
    <section id='portfolio'>
        <h2>PORTFOLIO</h2>
      <div className="container portfolio__container">
        {data.map(item=>(
           <article key={item.id} className='portfolio__item'>
           <div className="portfolio__item-img">
             <img src={item.img} alt="" />
             <h3>{item.title}</h3>
             <small>{item.desc}</small>
             <div className="portfolio__item-cta">
             <a href={item.github_link} className='btn primary' target="_blank">Github</a>
             <a href={item.live_demo} className='btn light' target='_blank'>Live Demo</a>
             </div>
             </div>
         </article>
        ))}
       
      </div>

    </section>
  )
}

export default Portfolio;