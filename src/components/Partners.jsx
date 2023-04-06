
import { partners } from "../constants"
import '../styles/partners.css'


const Partners = () => {
  return (
        <section className="partners-container">
            {partners.map((partner) =>(
                <div key={partner.id} className="partner">
                    <img src={partner.logo} alt="partner" />
                </div>
        ))}
        </section>
    )


}

export default Partners