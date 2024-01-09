import React, { useState } from 'react';
import FaqItem from './FaqItem'; // Asegúrate de importar FaqItem si está en un archivo separado
import './Faq.css'; // Importa tus estilos CSS aquí

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: '¿Cuáles son sus áreas de especialización legal?',
      answer: 'Aquí puedes enumerar las áreas específicas del derecho en las que tu bufete se especializa.',
      isOpen: false,
    },
    {
      question: '¿Cómo puedo programar una consulta legal?',
      answer: 'Proporciona información detallada sobre el proceso para que los clientes potenciales sepan cómo contactarte.',
      isOpen: false,
    },
    {
      question: '¿Cuánto cuesta obtener asesoramiento legal?',
      answer: 'Ofrece información general sobre las tarifas o el proceso de facturación.',
      isOpen: false,
    },
    {
      question: '¿Cuánto tiempo toma resolver un caso legal?',
      answer: 'Da una idea del tiempo estimado, aunque puede variar según el tipo de caso.',
      isOpen: false,
    },
    {
      question: '¿Ofrecen servicios de consulta gratuita?',
      answer: 'Si es aplicable, explícalo aquí.',
      isOpen: false,
    },
    {
      question: '¿Cómo puedo verificar el estado de mi caso?',
      answer: 'Proporciona detalles sobre cómo los clientes pueden obtener actualizaciones sobre sus casos.',
      isOpen: false,
    },
    {
      question: '¿Cuáles son los documentos necesarios para iniciar un caso legal?',
      answer: 'Ofrece orientación sobre la información y la documentación que los clientes deben proporcionar.',
      isOpen: false,
    },
    {
      question: '¿Pueden ayudarme si tengo un presupuesto limitado?',
      answer: 'Si ofreces opciones para casos con presupuestos limitados, explícalo aquí.',
      isOpen: false,
    },
    {
      question: '¿Cómo protegen la privacidad de la información del cliente?',
      answer: 'Brinda detalles sobre las medidas de seguridad que tomas para proteger la confidencialidad.',
      isOpen: false,
    },
    {
      question: '¿Cuál es su política de cancelación y reprogramación?',
      answer: 'Especifica tus políticas en relación con cambios en las citas o servicios.',
      isOpen: false,
    },
    // Agrega más preguntas y respuestas según sea necesario
  ]);

  const handleFaqClick = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: index === i ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <section id="faq">
      <h2>Preguntas Frecuentes (FAQ)</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={faq.isOpen}
            onClick={() => handleFaqClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
