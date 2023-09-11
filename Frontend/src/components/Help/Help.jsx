import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-semibold mb-4'>Sección de Ayuda</h1>

      <div className='bg-white p-6 rounded shadow-md'>
        <h2 className='text-lg font-semibold mb-2'>Guía de Uso del Sistema</h2>
        <p className='text-gray-700 mb-4'>
          Aprende cómo utilizar todas las características del sistema de gestión
          de inventario.
        </p>
        <Link to='/GuiaUso' className='text-blue-500 hover:underline'>
          Ir a la Guía de Uso
        </Link>
      </div>

      <div className='mt-4 bg-white p-6 rounded shadow-md'>
        <h2 className='text-lg font-semibold mb-2'>Preguntas Frecuentes</h2>
        <p className='text-gray-700 mb-4'>
          Encuentra respuestas a las preguntas más comunes que puedas tener.
        </p>
        <Link
          to='/preguntas-frecuentes'
          className='text-blue-500 hover:underline'
        >
          Ver Preguntas Frecuentes
        </Link>
      </div>

      {/* Agrega más secciones según tus necesidades */}
    </div>
  );
};
export default Help;
