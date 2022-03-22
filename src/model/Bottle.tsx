import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Bottle = () => {
  const gltf = useLoader(GLTFLoader, "/resources/scene.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default Bottle;
