
const FrequentlyAskedQuestions = () => {
  return (
    <div className='p-5 overflow-y-scroll' style={{ height: 'calc(100vh - 10rem)' }}>
      <h1 className='text-2xl font-semibold mb-4'>Preguntas Frecuentes</h1>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>¿Cómo registro un nuevo producto?</h2>
        <p className='text-gray-700'>
          Para registrar un nuevo producto, sigue estos pasos:
        </p>
        <ol className='list-decimal pl-6'>
          <li>Ve a la sección &quot;Inventario&quot; en el menú principal.</li>
          <li>Haz clic en el botón &quot;Agregar Producto&quot; para abrir el formulario de registro.</li>
          <li>Completa todos los campos obligatorios, como nombre, descripción y categoría.</li>
          <li>Presiona el botón &quot;Guardar&quot; para registrar el nuevo producto.</li>
        </ol>
      </div>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>¿Cómo actualizo la información de un producto existente?</h2>
        <p className='text-gray-700'>
          Para actualizar la información de un producto existente, sigue estos pasos:
        </p>
        <ol className='list-decimal pl-6'>
          <li>Ve a la sección &quot;Inventario&quot; en el menú principal.</li>
          <li>Encuentra el producto que deseas actualizar en la lista de productos.</li>
          <li>Haz clic en el botón &quot;Editar&quot; junto al producto deseado.</li>
          <li>Modifica los campos que desees actualizar.</li>
          <li>Presiona el botón &quot;Guardar&quot; para aplicar los cambios.</li>
        </ol>
      </div>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>¿Cómo cambio mi contraseña?</h2>
        <p className='text-gray-700'>
          Para cambiar tu contraseña, sigue estos pasos:
        </p>
        <ol className='list-decimal pl-6'>
          <li>Ve a la sección &quot;Configuración&quot; en el menú principal.</li>
          <li>Haz clic en la opción &quot;Cambiar Contraseña&quot;.</li>
          <li>Ingresa tu contraseña actual y la nueva contraseña deseada en los campos correspondientes.</li>
          <li>Confirma la nueva contraseña.</li>
          <li>Presiona el botón &quot;Guardar&quot; para cambiar tu contraseña.</li>
        </ol>
      </div>

      <div className='bg-white p-6 rounded shadow-md'>
        <h2 className='text-lg font-semibold mb-2'>¿Cómo puedo cambiar al modo oscuro?</h2>
        <p className='text-gray-700'>
          Para activar el modo oscuro, sigue estos pasos:
        </p>
        <ol className='list-decimal pl-6'>
          <li>Ve a la sección &quot;Configuración&quot; en el menú principal.</li>
          <li>Haz clic en la opción &quot;Modo Oscuro&quot;.</li>
          <li>Activa la opción &quot;Modo Oscuro&quot; para habilitar este modo de visualización.</li>
          <li>Los cambios se aplicarán automáticamente y la aplicación se mostrará en modo oscuro.</li>
        </ol>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
