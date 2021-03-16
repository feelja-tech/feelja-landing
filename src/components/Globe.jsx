import React from "react";
import { EncomGlobe } from "encom-globe-react";
import { useWindowSize } from "react-use";
import "encom-globe-react/dist/index.css";
import { globeData } from "../helpers/globeData";
import globeGrid from "../helpers/globeGrid.json";

export function Globe() {
  const { width, height } = useWindowSize();

  return (
    <EncomGlobe
      width={width}
      height={height * 0.9}
      markers={[]}
      constellations={[]}
      globeReadyCb={() => {}}
      globeConfig={{
        font: "Helvetica Neue, sans-serif",
        data: globeData,
        tiles: globeGrid.tiles,
        baseColor: "red",
        markerColor: "red",
        pinColor: "red",
        satelliteColor: "yellow",
        scale: 1.0,
        dayLength: 1000 * 28,
        introLinesDuration: 1000,
        maxPins: 500,
        maxMarkers: 4,
        viewAngle: 0.6,
      }}
    />
  );
}
