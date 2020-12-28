

function App() {
  return (
    <div className="bg-indigo-500 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-5 text-center shadow-2xl">
        <h1 className="text-5xl mb-4 italic py-5">Vísteme</h1>
        <form className="px-6">
          <div>
            <input type="text" placeholder="Correo" className="bg-indigo-200 py-2 my-2" />
          </div>
          <div>
            <input type="password" placeholder="Contraseña" className="bg-indigo-200 py-2 my-2" />
          </div>
          <div>
            <button type="submit" className="bg-indigo-500 rounded text-white px-3 py-2 mt-2">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
