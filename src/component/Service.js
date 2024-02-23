import React from 'react'
import { list } from './data'

const Service=({listitem})=> {
  return( 
     <> 
    {
    

        listitem.length >= 1? (listitem.map((list)=>{
      return(
  <div className='card-total '>
    
    <div className="card w-25 d-md-inline-flex  m-3 justify-content-center ">
    
      <div className="view overlay">
        <img className="card-img-top " src={list.img}
          alt="Card image cap"/>
        <a href="#!">
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>
    
      <div className="card-body">
    
        <h4 className="card-title">{list.title}</h4>
        <p className="card-text">{list.discription}</p>
    
        <a href="#" className="btn btn-primary">Button</a>
    
      </div>
    
    </div>
</div>
      )
    })):<h3>لا يوجد اى اصناف </h3>
    }
  </>
 )

}

export default Service
