import { Pane } from "tweakpane";
import * as THREE from "three";

export function setupUI({}) {
  const pane = new Pane();

  // Water parameters folder
  const Folder = pane.addFolder({ title: "Folder" });

  // const geometryFolder = Folder.addFolder({ title: "Geometry" });

  // geometryFolder
  //   .addBinding(waterResolution, "size", {
  //     min: 2,
  //     max: 1024,
  //     step: 2,
  //     label: "Resolution",
  //   })
  //   .on("change", ({ value }) => {
  //     console.log(value);
  //     // Update geometry with new dimensions
  //     const newGeometry = new THREE.PlaneGeometry(
  //       2,
  //       2,
  //       waterResolution.size,
  //       waterResolution.size
  //     );
  //     water.geometry.dispose();
  //     water.geometry = newGeometry;
  //   });

  // Color
  const colorFolder = Folder.addFolder({ title: "Color" });

  // colorFolder.addBinding(water.material.uniforms.uOpacity, "value", {
  //   min: 0,
  //   max: 1,
  //   step: 0.01,
  //   label: "Opacity",
  // });

  // colorFolder.addBinding(water.material.uniforms.uTroughColor, "value", {
  //   label: "Trough Color",
  //   view: "color",
  //   color: { type: "float" },
  // });
}
