import ToggleComponent from "./components/1-useToggle/ToggleComponent";

function App() {
  return (
    <div className="mx-auto w-5/6 max-w-[800px] bg-slate-200 p-2 rounded-lg mt-4">
      <div className="text-lg bg-slate-400 border rounded-lg m-4 text-center  p-4">
        Collection of Custom React Hooks
      </div>
      <ToggleComponent />
    </div>
  );
}

export default App;
