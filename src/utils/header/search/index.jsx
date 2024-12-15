const Search = () => {
  return (
    <div>
    <div className="w-full max-w-sm min-w-[500px] relative flex items-center">
      <input
        className="w-full bg-transparent bg-white placeholder:text-slate-400 text-gray-700 text-xs border border-slate-200 rounded-md 
        px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm 
        focus:shadow"
        placeholder="Aradığınız kategoriyi yazınız..."
      />
      <button
        className="rounded-md bg-gray-700 py-1 px-4 border border-transparent text-center text-sm text-white transition-all 
        shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none 
        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Ara
      </button>
    </div>
  </div>
  )
}

export default Search;
