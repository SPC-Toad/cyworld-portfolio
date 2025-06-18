import React from 'react'
import './List.css'

function List({title, data}) {
  return (
    <div className='list-container'>
        <div className='list-title-text'>{title}</div>
        <ul className='list-content-container'>
            {
                data.map((items, index) => (
                <li
                    key={index}
                    className="list-item"
                >
                    {items}
                </li>
                ))
            }
        </ul>
    </div>
  )
}

export default List