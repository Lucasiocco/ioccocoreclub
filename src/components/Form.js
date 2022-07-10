import React from 'react'

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
            <button>Finalizar Compra</button>
        </form>
    </div>
  )
}

export default Form