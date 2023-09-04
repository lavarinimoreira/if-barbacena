import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Canvas
      className="canvas"
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4.3, 0.75, 7.5],
      }}
    >
      <Experience />
    </Canvas>
    <div className="footer">
      <a href="https://www.lavarinimoreira.me" target="_blank" rel="noreferrer">
        lavarinimoreira.me
      </a>
    </div>
  </>
);
