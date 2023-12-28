import Hero from "./component/Hero";

const App = () => {

  const itemObj = {
    name : "mahin",
    roll:334,
    city:"barish"
  }



  return (
    <div>

    <Hero item={itemObj}/>
    </div>
  );
};

export default App;