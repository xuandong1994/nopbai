import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card11 from '../producct/image/bannerindex - Copy.jpg';
import "../producct/card.css";




function Cards() {
  return (
   <>
   <div className='a'>
      <h1> Giỏ hàng</h1>
   </div>
   <div>
   <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6}).map((_, idx) => (
        <Col key={idx}>
      
          <Card>
            <Card.Img variant="top" src={Card11}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button style={{borderRadius: 5, backgroundColor:"gray"}}>By Now</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   </div>
   </>
  );
}

export default Cards;