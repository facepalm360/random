import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

export function Paint() {
  return (
    <div>
      <ReactSketchCanvas
        width="100%"
        height="600px"
        strokeWidth={4}
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg"
        strokeColor="blue"
      />
    </div>
  );
}
