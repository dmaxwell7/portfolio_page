import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="cab"></span>
    </Html>
  )
}

export default Loader