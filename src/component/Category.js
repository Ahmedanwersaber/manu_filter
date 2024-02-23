import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Category=({filterByCategory})=> {
  const onFilter = (cat)=>{
    filterByCategory(cat)
  }
  return (
   <Row className='Category'>
    <Col sm="12" className='d-flex  justify-content-center'>
    <div>
        <Button className='btn mx-2' onClick={() => onFilter('الكل')}>الكل</Button>
        <Button onClick={() => onFilter('فطار')} className='btn mx-2'>فطار</Button>
        <Button onClick={() => onFilter('غداء')} className='btn mx-2'>غداء</Button>
        <Button onClick={() => onFilter('عشاء')} className='btn mx-2'>عشاء</Button>


    </div>
    </Col>
   </Row>
  )
}

export default Category
