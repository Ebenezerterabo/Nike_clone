import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

export default function Services() {
    return (
        <section className="container mx-auto px-10 py-5 flex flex-col md:flex-row gap-8 mt-10">
            {services.map((service, index) => (
                    <div key={index}>
                        <ServiceCard {...service}/>
                    </div>
            ))}
        </section>
    )
}