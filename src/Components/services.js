import { Title } from "./Title"
import { services } from "../data.js";
import { Service } from "./service"

export const Services = () => {
  return (
    <>
    <section className="section services" id="services">
      <Title title="our" subtitle="services" /> {/*Passing in the title and subtitle values in the component*/}
      <div className="section-center services-center">
        {services.map((service)=>{
          return (
            <Service key={service.id} {...service}/>
          )
        })}
      </div>
    </section>
    </>
  )
}