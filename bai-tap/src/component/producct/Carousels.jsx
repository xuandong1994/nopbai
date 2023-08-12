
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel11 from "../producct/image/bannerindex - Copy.jpg";
import Carousel12 from "../producct/image/phonglamviecbaner - Copy.jpg";
import Carousel13 from "../producct/image/phongngubaner.jpg";
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  return (
    <Carousel > {/* Thêm thuộc tính interval */}
      <Carousel.Item>
        <img className="d-block w-100" height={700} src={Carousel11} alt="Slide 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" height={700} src={Carousel12} alt="Slide 2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" height={700} src={Carousel13} alt="Slide 3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;

