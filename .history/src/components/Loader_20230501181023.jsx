import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className=""></span>
    </Html>
  )
}

export default Loader