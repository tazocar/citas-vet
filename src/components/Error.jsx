export default function Error(props) {
  return (
    <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <strong className="font-bold">Oh no!</strong>
      <span className="ml-1 sm:inline">{props.texto}</span>
    </div>
  );
}
