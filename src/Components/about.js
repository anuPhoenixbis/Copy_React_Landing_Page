import aboutImg from '../images/about.jpeg';
import { Title } from './Title';

export const About = () => {
  return (
    <>
    <section className="section" id="about">
      <Title  title="about" subtitle="us" /> {/*Passing in the title and subtitle values in the component*/}
      {/* <div className="section-title">
        <h2>about <span>us</span></h2>
      </div> */
      // this is the Title component that we created to render the title and subtitle dynamically
      }

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
    </>
  )
}