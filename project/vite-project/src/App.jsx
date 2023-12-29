import { useRef } from "react";
const App = () => {

  let elem = useRef()

  function change () {
    elem.current.classList.remove("bg-danger")
    elem.current.classList.add ("bg-success")
  }
  return (
    <div>
      <h1 className="bg-danger" ref={elem}>How are you ?</h1>

      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;