import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Students from './Studentarray';



function StudentCard() {
   
    return (
      <Container className="bg-primary">
        <h1 className='text-center'>product list</h1>
      <Row>
      {Students.map((product)=>(
          <Col key={product.id} md={4} className="mb-4 mt-4">
              <Card>
                <Card.Img  variants="top" src={product.imageUrl}/>
                  <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.id}</Card.Text>
                      <Card.Text>{product.std}</Card.Text>


                      

                  </Card.Body>
                  
                
              </Card>
          </Col>    

     ) )}
     </Row>
     </Container>
       
    );
  }
   
 
export default StudentCard
