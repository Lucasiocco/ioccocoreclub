import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({ handleChange, data, handleSubmit}) => {
  return (
    <div className='Form'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" 
            onChange={handleChange}
            value={data.name}
            />
            <input type="email" name="email" placeholder="Email"
            onChange={handleChange}
            value={data.email}
            />
            <input type="text" name="phone" placeholder="Teléfono"
            onChange={handleChange}
            value={data.phone}
            />
        </form>
        <Link to="/Checkout">Proceder con la compra</Link>
    </div>
  )
}

export default Form