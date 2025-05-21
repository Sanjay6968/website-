import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Cube3D = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 0.5, 9.5);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(600, 600);
    renderer.shadowMap.enabled = true; // Shadow mapping

    // Create an OrbitControls instance
    const controls = new OrbitControls(camera, renderer.domElement);
    //controls.enabled = false; //Disable user interaction for auto-rotation

    //Set limits on scroll/zoom
    controls.minDistance = 2;
    controls.maxDistance = 10;

    // Check if the containerRef is available before appending the renderer
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Load the glTF file
    const loader = new GLTFLoader();
    loader.load('./Akar600Pro.gltf', (gltf) => {
        const loadedModel = gltf.scene;
        loadedModel.scale.set(2,2,2);
        loadedModel.rotation.set(0,0,0);
        loadedModel.traverse((node) => {
            if (node instanceof THREE.Mesh) {
                node.castShadow = true; // Enable shadow casting for the loaded model
            }
        });
        scene.add(loadedModel);
        
        setIsLoading(false);

        // Add ambient light to the scene
        const ambientLight = new THREE.AmbientLight(0x404040);
        ambientLight.intensity = 1.5;
        scene.add(ambientLight);

        // Add directional light to the model
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1,3,2);
        directionalLight.intensity = 3;
        directionalLight.castShadow = true; // Enable shadow casting for the light
        scene.add(directionalLight);

        //Calculate size of loaded object's bounding box
        const box = new THREE.Box3().setFromObject(loadedModel);
        const size = box.getSize(new THREE.Vector3());

        const floorGeometry = new THREE.PlaneGeometry(size.x * 2, size.z * 2);
        // Add floor for shadows
        const floorMaterial = new THREE.MeshStandardMaterial({
            color: 0x808080,
            roughness: 0.9,
            metalness: 0.0,
            transparent: true,
            opacity: 0,
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1;
        floor.receiveShadow = true; // Enable shadow receiving for the floor
        scene.add(floor);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (scene.children.length > 0) {
        const loadedModel = scene.children[0];
        loadedModel.rotation.y += 0.002;
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up resources
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={containerRef}></div>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '20px',
            borderRadius: '5px',
          }}
        >
          Loading... {}
        </div>
      )}
    </div>
  );
};

export default Cube3D;
