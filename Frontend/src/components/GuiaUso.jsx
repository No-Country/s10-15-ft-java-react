

const GuiaUso = () => {
  return (
    <div className='p-5 overflow-y-scroll' style={{ height: 'calc(100vh - 10rem)' }}>
      <h1 className='text-2xl font-semibold mb-4'>Guía de Uso del Sistema</h1>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Introducción</h2>
        <p className='text-gray-700'>
          Bienvenido al Sistema de Inventario, una herramienta poderosa para
          gestionar tus productos y usuarios de manera eficiente. A
          continuación, te presentamos una vista general de sus características
          principales.
        </p>
      </div>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Dashboard</h2>
        <p className='text-gray-700'>
          En el Dashboard, podrás acceder a información esencial, como la
          cantidad de productos almacenados y proveedores disponibles. Además,
          te proporcionará una visión rápida de los productos con bajo stock y
          aquellos con existencias abundantes.
        </p>
      </div>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Inventario</h2>
        <p className='text-gray-700'>
          La sección de Inventario te permite gestionar tus productos de manera
          eficiente. Aquí podrás ver una lista de productos almacenados,
          eliminar o actualizar productos, y aplicar filtros por nombre y
          categoría. También puedes agregar nuevos productos haciendo clic en el
          botón AddItem.
        </p>
      </div>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Usuarios</h2>
        <p className='text-gray-700'>
          En la sección de Usuarios, tendrás un registro de todos los usuarios
          registrados en la aplicación. Desde aquí, puedes realizar
          modificaciones y eliminar usuarios según sea necesario.
        </p>
      </div>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Configuración</h2>
        <p className='text-gray-700'>
          La sección de Configuración te permite personalizar tu perfil. Puedes
          actualizar tu foto de perfil, cambiar tu contraseña, modificar tu
          nombre de usuario y correo electrónico, e incluso cambiar el modo de
          visualización a modo oscuro.
        </p>
      </div>

      <div className='bg-white p-6 rounded shadow-md mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Ayuda</h2>
        <p className='text-gray-700'>
          La sección de Ayuda contiene información detallada sobre cómo utilizar
          la aplicación correctamente. Aquí encontrarás respuestas a tus
          preguntas y consejos útiles para aprovechar al máximo todas las
          características.
        </p>
      </div>

      <div className='bg-white p-6 rounded shadow-md'>
        <h2 className='text-lg font-semibold mb-2'>Cerrar Sesión</h2>
        <p className='text-gray-700'>
          Cuando hayas terminado de usar la aplicación, asegúrate de cerrar
          sesión de manera segura haciendo clic en el botón de Cerrar Sesión.
        </p>
      </div>
    </div>
  )
}

export default GuiaUso;
