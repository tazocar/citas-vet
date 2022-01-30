import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import PatientList from './components/PatientList';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    // Nuevo array excluyendo el paciente a eliminar
    const pacientesActualizados = pacientes.filter(p => p.id !== id);
    setPacientes(pacientesActualizados);
    setPaciente({});
  };

  // Al cargar el componente, cargar pacientes del LocalStorage
  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLS);
  }, []);

  // Vigilar cambios en pacientes y guardarlos en LocalStorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="">
      <h1 className="font-black text-gray-800 text-5xl text-center p-10 lg:px-40 lg:py-20">
        Seguimiento pacientes{' '}
        <span className="text-indigo-700">Veterinaria</span>
      </h1>
      <div className="grid 2xl:grid-cols-6 lg:grid-cols-2 gap-12">
        <Formulario
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <PatientList
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
