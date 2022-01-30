export default function Patient({ paciente, setPaciente, eliminarPaciente }) {
  // Enviar confirmación al delete
  const handleEliminar = () => {
    const respuesta = confirm('¿Estás seguro que quieres eliminar?');
    if (respuesta) {
      // ejecutar prop con función de eliminar paciente
      return eliminarPaciente(paciente.id);
    }
  };
  return (
    <div className="bg-white drop-shadow-lg rounded-lg py-8 px-12 text-gray-700 h-fit">
      <p className="font-bold text-sm pb-1">
        NOMBRE:<span className="ml-3 font-light">{paciente.mascota}</span>
      </p>
      <p className="font-bold text-sm pb-1">
        PROPIETARIO:
        <span className="ml-3 font-light">{paciente.propietario}</span>
      </p>
      <p className="font-bold text-sm pb-1">
        EMAIL:<span className="ml-3 font-light">{paciente.email}</span>
      </p>
      <p className="font-bold text-sm pb-1">
        FECHA DE INGRESO
        <span className="ml-3 font-light">{paciente.fecha}</span>
      </p>
      <p className="font-bold text-sm pb-1">
        SÍNTOMAS:
        <span className="ml-3 font-light">{paciente.sintomas}</span>
      </p>
      <div className="mt-5 flex justify-between">
        <button
          onClick={() => setPaciente(paciente)}
          className="uppercase bg-indigo-600 hover:bg-indigo-800 px-10 py-1 text-white font-semibold transition-all"
        >
          Editar
        </button>
        <button
          onClick={handleEliminar}
          className="uppercase bg-rose-700 hover:bg-rose-800 px-10 py-1 text-white font-semibold transition-all"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
