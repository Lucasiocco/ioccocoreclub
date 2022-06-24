import { Link } from "react-router-dom"

const Carrito = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Link to="/checkout">Proceder con la compra</Link>
    </div>
  )
}
export default Carrito