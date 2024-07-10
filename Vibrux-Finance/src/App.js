import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './Component/Experience';
import Overlay from './Component/Overlay';

function App() {

  return (
    <>
    <div className=' w-full h-screen fixed z-0 top-0 left-0 '>
    <Canvas>
      <Experience/>
    </Canvas>
    </div>
    <Overlay/>

</>
  );
}

export default App;
