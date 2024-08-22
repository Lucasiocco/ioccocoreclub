import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div class="heroSection">
<h1 class="bienvenida">Te damos la Bienvenida</h1>
<h1 class="bienvenida2">"Al Club"</h1>
        <section class="sec1">
            <div class="texto1">
                <p>
                    En <b>The Core Club</b> buscamos tu mejor version, de la mano de los mejores profesionales, para
                    alcanzar todos tus objetivos personales!
                </p>
                <p>
                    No solo vamos a exigirte fisicamente, buscamos que estes agusto con el lugar, que logres generar un
                    sentido de pertenencia, ya que para nosotros esto es mas que un box de entrenamiento.
                </p>
                <p>¡El primer paso lo das vos, el segundo lo damos juntos!</p>
                <NavLink to="/" class="button-tienda">Ir a la Tienda</NavLink>
            </div>

            <div class="video1">
                <img src="./img/Clean.gif" alt=""/>
            </div>
        </section>
        <section class="sec2">
            <h2>"La victoria es algo que se construye física y psicológicamente cada día que se entrena y cada noche que se sueña" - <b>Emmitt Smith.</b></h2>
        </section>
        </div>
  )
}

export default Hero