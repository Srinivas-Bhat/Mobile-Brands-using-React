// import logo from './logo.svg';
import './App.css';
import Mobile from "./components/Mobile"



let info = [
  {head: "Mobile Operating System",
    names: {
      a: "Android",
      b: "Blackberry",
      c: "iPhone",
      d: "Windows Phone",
    }},
    {head: "Mobile Manufacturers",
    names: {
      a: "Samsung",
      b: "HTC",
      c: "Micromax",
      d: "Apple",
    }},

];

function App() {
  return (
    <div>
      {info.map((el) => (
        <Mobile{...el}/>
      ))}
    </div>
  );
};

export default App;
