import React from 'react'
import { Row,Col } from 'react-bootstrap'

const Headeritem=() =>{
  return (
    <div className='Header'>
      <Row>
        <Col sm="12" className='  justify-content-center text-center'>
            <div className='title'>قائمة الطعام </div>
            <div className='justify-content-center d-flex m-4'>
                <p className='underline'></p>
            </div>
            
        </Col>
      </Row>
    </div>
  )
}

export default Headeritem
