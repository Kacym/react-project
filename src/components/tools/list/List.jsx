import React from 'react'
import "./List.css"
import products from '../../../utils/constants'

const List = () => {
  return (
    <ul className='list'>
        {
            products.map((item)=> {
                return (
                    <li key={item.id} className='list-item'>
                        <h2 className='product-name'>{item.title}</h2>
                        <img className='product-img' src={item.url} alt={item.title} />
                        <span className='product-rating'>{item.rating}/5</span>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default List