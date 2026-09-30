import { useEffect, useRef } from "react";

const colors = {
  essential: { primary: 0xd8ff3e, secondary: 0xf0eadc },
  editorial: { primary: 0xff6d4a, secondary: 0xf6dfb5 },
  immersive: { primary: 0x85a8ff, secondary: 0xd8ff3e },
};

export function SiteMachine({ mode }) {
  const host = useRef(null);

  useEffect(() => {
    if (!host.current) return undefined;

    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed || !host.current) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.current.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    rig.rotation.set(-0.22, -0.55, -0.07);
    scene.add(rig);

    const materials = {
      ink: new THREE.MeshStandardMaterial({ color: 0x171713, roughness: 0.45, metalness: 0.42 }),
      pale: new THREE.MeshStandardMaterial({ color: 0xeee9dc, roughness: 0.7, metalness: 0.05 }),
      accent: new THREE.MeshStandardMaterial({ color: colors[mode].primary, emissive: colors[mode].primary, emissiveIntensity: 0.16, roughness: 0.5 }),
      line: new THREE.LineBasicMaterial({ color: colors[mode].secondary, transparent: true, opacity: 0.34 }),
    };

    const createPanel = (width, height, depth, x, y, z, material) => {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth, 3, 3, 1), material);
      panel.position.set(x, y, z);
      panel.geometry.translate(0, 0, 0);
      rig.add(panel);
      return panel;
    };

    const back = createPanel(4.8, 3.2, 0.18, 0.15, 0.05, -0.7, materials.ink);
    const middle = createPanel(4.2, 2.65, 0.12, -0.2, 0.02, 0.05, materials.pale);
    const front = createPanel(3.6, 2.15, 0.1, 0.32, -0.08, 0.72, materials.accent);
    back.rotation.z = -0.04;
    middle.rotation.z = 0.035;
    front.rotation.z = -0.025;

    const barMaterial = new THREE.MeshStandardMaterial({ color: 0x11110f, roughness: 0.65 });
    for (let index = 0; index < 4; index += 1) {
      const width = index === 0 ? 2.1 : 1.2 + index * 0.26;
      const bar = new THREE.Mesh(new THREE.BoxGeometry(width, 0.09, 0.06), barMaterial);
      bar.position.set(-0.45 + index * 0.12, 0.5 - index * 0.31, 0.81);
      bar.rotation.z = -0.025;
      rig.add(bar);
    }

    const orb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.47, 2),
      new THREE.MeshStandardMaterial({ color: 0xff6d4a, roughness: 0.28, metalness: 0.25 }),
    );
    orb.position.set(1.66, -0.82, 1.25);
    rig.add(orb);

    const points = [];
    for (let index = 0; index <= 80; index += 1) {
      const angle = (index / 80) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * 3.35, Math.sin(angle) * 2.25, -1.1));
    }
    const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), materials.line);
    orbit.rotation.set(0.35, 0.2, -0.12);
    rig.add(orbit);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x26261f, 2.5));
    const key = new THREE.DirectionalLight(0xffffff, 4.4);
    key.position.set(4, 5, 6);
    scene.add(key);
    const edge = new THREE.PointLight(colors[mode].primary, 18, 12);
    edge.position.set(-3, -1, 4);
    scene.add(edge);

    const pointer = { x: 0, y: 0 };
    const onPointer = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.42;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const resize = () => {
      const { width, height } = host.current.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host.current);
    resize();

    let frame;
    let elapsed = 0;
    const render = () => {
      elapsed += 0.01;
      if (!prefersReducedMotion) {
        rig.rotation.y += (pointer.x - rig.rotation.y - 0.55) * 0.035;
        rig.rotation.x += (-pointer.y - rig.rotation.x - 0.22) * 0.035;
        rig.position.y = Math.sin(elapsed * 0.8) * 0.08;
        orb.rotation.x += 0.004;
        orb.rotation.y += 0.006;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointer);
        observer.disconnect();
        renderer.dispose();
        for (const material of Object.values(materials)) material.dispose();
        barMaterial.dispose();
        scene.traverse((object) => object.geometry?.dispose?.());
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [mode]);

  return (
    <div className="machine-shell" aria-hidden="true">
      <div className="machine-fallback" />
      <div className="machine-canvas" ref={host} />
      <p className="machine-note">Strategy / design / code / launch</p>
    </div>
  );
}
