import React from 'react'

const Nosotros = () => {
  return (
    <div class="paginaNosotros">
        <h1 className="bienvenida">¡Nuestros Profesionales!</h1>
        <div class="containerNos">
            <div class="profe1">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="/assets/multimedia/fotoNina.JPG" alt="Avatar"/>
                        </div>
                        <div class="flip-card-back">
                            <h1>Nina</h1>
                            <a class="flip-card-image" href=""><img src="../img/instagram.png" alt="" /></a>
                            <a class="flip-card-image" href=""><img src="../img/whatsapp.png" alt="" /></a>
                            <div class="flip-card-text">
                            <p>Profesora Nacional de Edudacion Fisica.</p>
                            <p>Entrenadora de gimnasia artistica en "Racing Club sede villa del parque".</p>
                            <p>Entrenadora de acrobacia en "Doble Salto".</p>
                            <p>Coach en "Megatlon Martinez."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profe2">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="/assets/multimedia/fotoLucas.jpg" alt="Avatar"/>
                        </div>
                        <div class="flip-card-back">
                            <h1>Lucas</h1>
                            <a class="flip-card-image" href=""><img src="../img/instagram.png" alt="" /></a>
                            <a class="flip-card-image" href=""><img src="../img/whatsapp.png" alt="" /></a>
                            <div class="flip-card-text">
                            <p>Profesor Nacional de Edudacion Fisica.</p>
                            <p>Preparador Fisico.</p>
                            <p>Coach en "Mega Gimnasio Devoto.</p>
                            <p>Jugador de futsal en "Villa Mitre".</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box1"></div>
            <div class="box2"></div>
        </div>
    </div>
  )
}

export default Nosotros