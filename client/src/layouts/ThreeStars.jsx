import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Cloud } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const ThreeStars = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
      <Cloud position={[0, 0, 0]} speed={0.2} opacity={0.5} />
    </Canvas>
  )
}

const colorPalette = [
  '#ffa0e0',
  '#ebe8d9',
  '#f65039',
  '#e0e0e0',
  '#ccff99',
  '#ff99cc',
  '#99ccff',
  '#ff9999',
  '#99ffff',
  '#ffff99',
]

const colorPicker = () => {
  const index = Math.floor(Math.random() * 10)
  console.log(index)
  return colorPalette[index]
}

const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 }),
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50
    ref.current.rotation.y -= delta / 50
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color={colorPicker()}
          size={0.005}
          fog={true}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default ThreeStars
