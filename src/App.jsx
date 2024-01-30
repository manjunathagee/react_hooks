// import ToggleComponent from "./components/1-useToggle/ToggleComponent";
import TimeoutComponent from "./components/2-useTimeout/TimeoutComponent";

function App() {
  return (
    <div className="mx-auto w-5/6 max-w-[800px] bg-slate-200 p-2 rounded-lg mt-4">
      <div className="text-lg bg-slate-400 border rounded-lg m-4 text-center  p-4">
        Collection of Custom React Hooks
      </div>
      <div className="flex justify-center w-full flex-col items-center gap-4">
        <TimeoutComponent />
      </div>
    </div>
  );
}

export default App;
