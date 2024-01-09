import React from 'react';
import './Acerca.css'
function Acerca() {
  return (
    <section id="acerca">
                <h2>Acerca de Nosotros</h2>
                <div className='acerca-d-nosotros'>
                    <img src="/img/nosotros_3.avif" alt="Nuestro Equipo" id="equipo-img" />
                    <p>
                    En nuestro bufete, nos enorgullece ser un equipo de abogados altamente comprometidos en brindar asesoramiento legal experto y proporcionar una representación efectiva a nuestros clientes.Nuestra misión es abordar tus necesidades legales de manera integral, asegurándonos de comprender tus preocupaciones y metas específicas.Ya sea que estés buscando asesoramiento en cuestiones legales complejas o representación en un caso legal, estamos aquí para brindarte el apoyo necesario en cada paso del camino.Confía en nosotros para proteger tus derechos y defender tus intereses con pasión y dedicación.
                    </p>
                </div>
                <h2 className='acercaH2'>Nuestro equipo</h2>
                <div class="abogados" id="abogados">
                    <div class="abogado">
                        <img src="/img/abogado_1.avif" alt="Abogado 1" />
                        <h3>Nombre del Abogado 1</h3>
                        <p>Descripción del abogado 1.</p>
                    </div>
                    <div class="abogado">
                        <img src="/img/abogado_2.avif" alt="Abogado 2" />
                        <h3>Nombre del Abogado 2</h3>
                        <p>Descripción del abogado 2.</p>
                    </div>
                    <div class="abogado">
                        <img src="/img/abogado_3.avif" alt="Abogado 3" />
                        <h3>Nombre del Abogado 3</h3>
                        <p>Descripción del abogado 3.</p>
                    </div>
                    <div class="abogado">
                        <img src="/img/abogado_4.avif" alt="Abogado 3" />
                        <h3>Nombre del Abogado 4</h3>
                        <p>Descripción del abogado 3.</p>
                    </div>
                    
                </div>
            </section>
  );
}

export default Acerca;
