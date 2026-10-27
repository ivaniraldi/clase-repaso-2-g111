import Carousel from 'react-bootstrap/Carousel';

export default function Hero() {
  return (
    <div className='container my-3'>
         <Carousel>
      <Carousel.Item>
        <img className='hero-img' src='https://images.pexels.com/photos/33845917/pexels-photo-33845917.jpeg' alt="First slide" />
        <Carousel.Caption className="hero-cap">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='hero-img' src='https://images.pexels.com/photos/19599238/pexels-photo-19599238.jpeg' alt="Second slide" />
        <Carousel.Caption className="hero-cap">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='hero-img' src='https://images.pexels.com/photos/11412766/pexels-photo-11412766.jpeg' alt="Third slide" />
        <Carousel.Caption className="hero-cap">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
