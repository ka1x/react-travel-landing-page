
import './reviews.css'
import { location } from '../../assets'


const Reviews = () => {
  return (
<section className="reviews">
  <div className="img-container">
    <img src="" alt="" />
  </div>
  <div className="desc-container">
    <h1>Tourist Experiences</h1>

    <div className="name">
      <h3>name</h3>
      <div className="location">
        <img src={location} alt="location" />
        <h4>germany </h4>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae commodi laborum aspernatur, qui ea eius quas? Dolores architecto doloribus ratione, quas sapiente accusantium eius iure eligendi, mollitia, modi veniam culpa aliquid nesciunt aliquam. Culpa, eum molestiae nostrum dicta ut amet commodi explicabo fugit suscipit voluptatibus repudiandae alias blanditiis, dolorem eligendi aperiam inventore, veniam impedit. Expedita voluptatum obcaecati, blanditiis dolores beatae voluptatem tempora et cumque magnam consectetur exercitationem corrupti est!</p>
    </div>
  </div>
</section>  )
}

export default Reviews