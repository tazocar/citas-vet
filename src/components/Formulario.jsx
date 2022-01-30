import { useEffect, useState } from 'react';

import Error from './Error';

export default function Formulario({
  paciente,
  pacientes,
  setPacientes,
  setPaciente,
}) {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fechaAhora = Date.now().toString(36);

    return random + fechaAhora;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if ([mascota, propietario, fecha, email, sintomas].includes('')) {
      setError(true);
      return;
    }
    // Objeto con datos de paciente con States actualizados
    const objetoPaciente = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas,
      // pacienteID es null? > generarID, si no, usar el pacienteID
      id: paciente.id ?? generarId(),
    };

    // Si existe ID significa que estamos editando
    if (paciente.id) {
      const pacientesEditados = pacientes.map(e =>
        e.id === paciente.id ? objetoPaciente : e
      );
      setPacientes(pacientesEditados);
      setPaciente({});
      // si no tiene ID estamos creando un nuevo paciente
    } else {
      setPacientes([...pacientes, objetoPaciente]);
    }
    // Limpiar states
    setError(false);
    limpiarStates();
  };

  const limpiarStates = () => {
    setMascota('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  };

  // vigilar cambios en paciente
  useEffect(() => {
    // si paciente no viene vacío
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } else {
      limpiarStates();
    }
  }, [paciente]);

  return (
    <>
      <div className="2xl:col-span-2 2xl:col-start-2 lg:pl-12 sm:px-12 lg:px-0">
        <h2 className="text-xl text-gray-800 text-center mb-4">
          Añade pacientes y{' '}
          <span className="text-indigo-700 font-bold"> administralos</span>
        </h2>
        <div className="bg-white drop-shadow-lg rounded-lg">
          {error && <Error texto="Todos los campos son obligatorios" />}
          <form className="grid py-10 px-12" onSubmit={handleSubmit}>
            <label
              htmlFor="mascota"
              className="font-bold text-gray-700 text-sm pb-1"
            >
              NOMBRE MASCOTA
            </label>
            <input
              id="mascota"
              className="rounded p-2 pl-5 mb-4 font-light bg-gray-50 border"
              type="text"
              placeholder="Ej: Snowy"
              value={mascota}
              onChange={e => setMascota(e.target.value)}
            />
            <label
              htmlFor="propietario"
              className="font-bold text-gray-700 text-sm pb-1"
            >
              NOMBRE PROPIETARIO
            </label>
            <input
              id="propietario"
              className="rounded p-2 pl-5 mb-4 font-light bg-gray-50 border"
              type="text"
              placeholder="Ej: Juan"
              value={propietario}
              onChange={e => setPropietario(e.target.value)}
            />
            <label
              htmlFor="email"
              className="font-bold text-gray-700 text-sm pb-1"
            >
              EMAIL
            </label>
            <input
              id="email"
              className="rounded p-2 pl-5 mb-4 font-light bg-gray-50 border"
              type="email"
              placeholder="Email contacto propietario"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label
              htmlFor="fecha"
              className="font-bold text-gray-700 text-sm pb-1"
            >
              FECHA INGRESO
            </label>
            <input
              id="fecha"
              className="rounded p-2 pl-5 mb-4 font-light bg-gray-50 border"
              type="date"
              value={fecha}
              onChange={e => setFecha(e.target.value)}
            />
            <label
              htmlFor="sintomas"
              className="font-bold text-gray-700 text-sm pb-1"
            >
              SÍNTOMAS
            </label>
            <textarea
              id="sintomas"
              className="rounded p-2 pl-5 mb-4 font-light bg-gray-50 border"
              type="text"
              placeholder="Descripción de síntomas"
              value={sintomas}
              onChange={e => setSintomas(e.target.value)}
            />
            <input
              className="uppercase bg-indigo-600 hover:bg-indigo-800 px-10 py-3 text-white font-semibold transition-all"
              type="submit"
              value={paciente.id ? 'Editar paciente' : 'agregar paciente'}
            />
          </form>
        </div>
      </div>
    </>
  );
}
