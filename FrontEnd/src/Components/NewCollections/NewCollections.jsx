import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Items/Item'

const NewCollections = () => {
  return (
    <div className='new_collections'>
      <h1>NEW COLLECTION</h1> <hr />
      <div className="collection">
        {new_collection.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price ={item.new_price} old_price ={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
