"use client";

import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

export const Rings = () => {
  return (
    <Suspense fallback={<div>Cargando</div>}>
      <Spline
        className="w-full h-full aspect-square absolute top-0 left-0 object-cover"
        scene="https://prod.spline.design/X-01ojD1ffvCVukt/scene.splinecode"
      />
    </Suspense>
  );
};
