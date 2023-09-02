import {
  useGLTF,
  OrbitControls,
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

      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.if.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

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
