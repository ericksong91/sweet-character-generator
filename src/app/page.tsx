import Preview from "./_components/Preview";

function App() {
  return (
    <div className="app min-h-screen p-4 bg-slate-500 ">
      <main className="main container flex flex-col flex-grow items-center gap-3 mx-auto p-5 bg-slate-200">
        <h1 className="heading font-extrabold text-7xl tracking-widest">Sweet Character Creator</h1>
        <Preview />
      </main>
    </div>
  );
};

export default App;
