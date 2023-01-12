import Carousel from 'react-bootstrap/Carousel';
import Mercedes1 from '../assets/img/mercedes1.jpg';
import Mercedes2 from '../assets/img/mercedes2.jpg';
import Mercedes3 from '../assets/img/mercedes3.jpg';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Mercedes1 }
          alt="First slide"
          style={{height: 650}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mercedes2}
          alt="Second slide"
          style={{height: 650}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mercedes3}
          alt="Third slide"
          style={{height: 650}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider