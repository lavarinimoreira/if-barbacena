import {
  PresentationControls,
  useGLTF,
  // OrbitControls,
  useTexture,
  Center,
  Sparkles,
} from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Experience() {
  const { nodes } = useGLTF("./model/ifBarbacena.glb");
  // console.log(nodes);

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  // taking the width screen to set up the object scale
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    // console.log(width);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <color args={["#030202"]} attach="background" />

      {/* <OrbitControls makeDefault /> */}

      <Center>
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.2, 0.7]} // vertically movment limitation.
          azimuth={[-1, 0.4]} // horizontal movment limitation.
          config={{ mass: 2, tension: 80 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <mesh geometry={nodes.if.geometry} scale={width > 1200 ? 1 : 0.5}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </PresentationControls>
        <Sparkles
          size={12}
          scale={[10, 4, 10]}
          position-y={0}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  );
}
