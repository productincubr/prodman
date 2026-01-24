import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars({ count = 1500 }) {
  const pointsRef = useRef()
  
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      // Random sphere distribution - closer stars for better visibility
      const radius = 2 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      
      // Random star sizes for variety - increased range
      sizes[i] = Math.random() * 3.0 + 1.0
    }
    
    return [positions, sizes]
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (pointsRef.current) {
      // Slow rotation
      pointsRef.current.rotation.y = time * 0.05
      pointsRef.current.rotation.x = time * 0.02
      
      // Twinkling effect
      const material = pointsRef.current.material
      if (material.uniforms && material.uniforms.uTime) {
        material.uniforms.uTime.value = time
      }
    }
  })

  // Custom shader material for twinkling
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float size;
        
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          
          gl_Position = projectedPosition;
          
          // Vary size with time for twinkling - increased base size
          float twinkle = sin(uTime * 2.0 + position.x * 10.0) * 0.5 + 0.5;
          gl_PointSize = size * uPixelRatio * 4.0 * (0.7 + twinkle * 0.3);
          gl_PointSize *= (1.0 / - viewPosition.z);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        
        void main() {
          // Circular points
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          if (distanceToCenter > 0.5) discard;
          
          // Soft edges
          float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          
          // Twinkling intensity
          float twinkle = sin(uTime * 3.0 + gl_FragCoord.x * 0.1) * 0.3 + 0.7;
          
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * twinkle);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={shaderMaterial} attach="material" />
    </points>
  )
}

const StarsCanvas = () => {
  return (
    <div className="stars-canvas-wrapper" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Stars />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
