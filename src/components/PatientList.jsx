import Patient from './Patient';

export default function PatientList({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) {
  return (
    <div className="2xl:col-span-2 lg:pr-12 sm:px-12 lg:px-0">
      <h2 className="text-xl text-gray-800 text-center mb-4">
        Añade pacientes y{' '}
        <span className="text-indigo-700 font-bold"> administralos</span>
      </h2>
      <div className="h-[580px] pb-5 overflow-y-scroll grid gap-4">
        {pacientes.length > 0 ? (
          pacientes.map(e => {
            return (
              <Patient
                key={e.id}
                paciente={e}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })
        ) : (
          <>
            <h1 className="text-center self-center text-4xl">
              Aún no hay{' '}
              <span className="font-black block text-indigo-700">
                pacientes
              </span>
            </h1>
          </>
        )}
      </div>
    </div>
  );
}
