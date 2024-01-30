// import ToggleComponent from "./components/1-useToggle/ToggleComponent";
// import TimeoutComponent from "./components/2-useTimeout/TimeoutComponent";
// import DebounceComponent from "./components/3-useDebounce/DebounceComponent";
// import StorageComponent from "./components/4-useStorage/StorageComponent";
// import AsyncComponent from "./components/5-useAsync/AsyncComponent";
import FetchComponent from "./components/6-useFetch/FetchComponent";

function App() {
  return (
    <div className="mx-auto w-5/6 max-w-[800px] bg-slate-200 p-2 rounded-lg mt-4">
      <div className="text-lg bg-slate-400 border rounded-lg m-4 text-center  p-4">
        Collection of Custom React Hooks
      </div>
      <div className="flex justify-center w-full flex-col items-center gap-4">
        <FetchComponent />
      </div>
    </div>
  );
}

export default App;
