import React from 'react'
import {Card, Col, Container} from 'react-bootstrap'
import { Zoom } from "react-awesome-reveal";

const ItemsList=({itemsData})=> {
  return (
  
      <Container >
        {  
          itemsData.length >= 1? (itemsData.map((item)=>{
            return (  <Col key={item.id} sm="12"  className='mb-2 item-list'>
              <Zoom left >
        <Card className='d-flex flex-row m-2'>
      <Card.Img className='img-item' variant="top" src={item.imgUrl}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
         <div className='item-title'> {item.title}</div>
         <div className='item-price'> {item.price}</div>

          </Card.Title>
        <Card.Text className='by-2'>
       {item.discription}
        </Card.Text>     
      </Card.Body>
    </Card> </Zoom>
        </Col>)
          })):<h3 className="text-center">لا يوجد اصناف</h3>
        }
      
      </Container>
     
  )
}

export default ItemsList