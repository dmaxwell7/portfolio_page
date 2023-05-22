import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-l0ad"></span>
    </Html>
  )
}

export default Loader