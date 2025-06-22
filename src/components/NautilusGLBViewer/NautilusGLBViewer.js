import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const NautilusGLBViewer = ({ modelPath, scale = 1, position = [0, 0, 0] }) => {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const currentClock = useRef(new THREE.Clock());

  useEffect(() => {
    let scene, camera, renderer;
    const currentMount = mountRef.current;

    if (!currentMount) return;

    // Limpa a cena antes de montar uma nova
    while (currentMount.firstChild) {
      currentMount.removeChild(currentMount.firstChild);
    }

    scene = new THREE.Scene();
    // Definimos o background da cena como null para que seja transparente
    scene.background = null;

    camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 3);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true // Mantenha alpha: true para permitir transparência
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        modelRef.current = gltf.scene;
        modelRef.current.scale.set(scale, scale, scale);
        modelRef.current.position.set(position[0], position[1], position[2]);

        // --- INÍCIO DO AJUSTE DE ROTAÇÃO ---
        // Gira o modelo 40 graus no sentido anti-horário no eixo Y
        // 40 graus convertidos para radianos (40 * Math.PI / 180)
        modelRef.current.rotation.y = 0.698;
        // --- FIM DO AJUSTE DE ROTAÇÃO ---

        scene.add(modelRef.current);

        if (gltf.animations && gltf.animations.length) {
          mixerRef.current = new THREE.AnimationMixer(modelRef.current);
          const action = mixerRef.current.clipAction(gltf.animations[0]);
          action.play();
        }
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar o modelo GLB:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      const delta = currentClock.current.getDelta();
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      if (modelRef.current) {
        scene.remove(modelRef.current);
        modelRef.current.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, [modelPath, scale, position]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default NautilusGLBViewer;