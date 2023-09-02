import {
  PresentationControls,
  useGLTF,
  // OrbitControls,
  useTexture,
  Center,
  Sparkles,
} from "@react-three/drei";

export default function Experience() {
  const { nodes } = useGLTF("./model/ifBarbacena.glb");
  console.log(nodes);

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

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
          <mesh geometry={nodes.if.geometry}>
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
