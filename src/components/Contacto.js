import React from 'react';
import './Contacto.css'

function Contacto() {
  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <p>Para cualquier consulta o para programar una consulta legal, por favor completa el formulario y verifica el CAPTCHA.</p>
      <form action="#" method="post">
          <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
          </div>
          <div class="form-group">
              <label for="correo">Correo Electrónico:</label>
              <input type="email" id="correo" name="correo" required />
          </div>
          <div class="form-group">
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </div>
          <div class="form-group">
              <label for="captcha">CAPTCHA:</label>
              <input type="text" id="captcha" name="captcha" required />
          </div>
          <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
