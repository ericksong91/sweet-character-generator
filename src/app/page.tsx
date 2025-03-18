import Preview from "./_components/Preview";
import Image from "next/image";
import Options from "./_components/Options";

function App() {
  return (
    <div className="app min-h-screen p-4 bg-slate-500 ">
      <main className="main container flex flex-col flex-grow items-center gap-3 mx-auto p-5 bg-slate-200">
        <h1 className="heading font-extrabold text-7xl tracking-widest text-decoration: underline">Sweet Character Creator</h1>
        <Preview />
        <Options />
      </main>
    </div>
  );
};

export default App;
