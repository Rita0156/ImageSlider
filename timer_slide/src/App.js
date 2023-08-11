import logo from './logo.svg';
import './App.css';
import ImageSlider from './component/ImageSlider';
import Timer from './component/Timer';
import RevTimer from './component/RevTimer';
function App() {
  return (
    <div className="App">
                   <ImageSlider/>
                    <div style={{display:"flex",width:"70%", margin:"auto"}}>
                       <Timer/>
                       <RevTimer/>
                    </div>
    </div>
  );
}

export default App;
