//product component
import one from "../assets/images/image1.jpg"
import two from "../assets/images/image2.jpg"
import three from "../assets/images/image3.jpg"

function Products() {
    return (
      <div class="products">
        <div class="box">
          <img src={one} alt="fogg wood"/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={two} alt="villain" />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={three} alt="villain" />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
      </div>
    )
  }

  export default Products