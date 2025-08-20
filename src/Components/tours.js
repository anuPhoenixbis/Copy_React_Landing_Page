import { Title } from "./Title";
import { tours } from "../data.js";
import Tour from "./Tour.js";


export const Tours = () => {
  return (
    <>
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour)=> {
          return (
            <Tour key ={tour.id} {...tour}/>
          );
        })}
      </div>
    </section>
    </>
  )
}