'use client';

import type { COBEOptions } from 'cobe';

import { useCallback, useEffect, useRef } from 'react';

import createGlobe from 'cobe';
import { useSpring } from 'react-spring';

import { cn } from '@pbd/ui';

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 4,
  mapSamples: 50000,
  mapBrightness: 0.5,
  baseColor: [0.69, 0.87, 0.9],
  markerColor: [246 / 255, 218 / 255, 141 / 255],
  glowColor: [1, 1, 1],
  markers: [
    // Karachi
    { location: [24.827, 67.0251], size: 0.125 },
    // London
    { location: [51.5074, -0.1278], size: 0.094 },
    // Paris
    { location: [48.8566, 2.3522], size: 0.065 },
    // New York City
    { location: [40.7128, -74.006], size: 0.081 },
    // Tokyo
    { location: [35.6895, 139.6917], size: 0.057 },
    // Singapore
    { location: [1.3521, 103.8198], size: 0.072 },
    // Dubai
    { location: [25.276987, 55.296249], size: 0.099 },
    // San Francisco
    { location: [37.7749, -122.4194], size: 0.083 },
    // Barcelona
    { location: [41.3851, 2.1734], size: 0.056 },
    // Amsterdam
    { location: [52.3676, 4.9041], size: 0.092 },
    // Seoul
    { location: [37.5665, 126.978], size: 0.061 },
    // Rome
    { location: [41.9028, 12.4964], size: 0.089 },
    // Prague
    { location: [50.0755, 14.4378], size: 0.073 },
    // Madrid
    { location: [40.4168, -3.7038], size: 0.059 },
    // Berlin
    { location: [52.52, 13.405], size: 0.084 },
    // Los Angeles
    { location: [34.0522, -118.2437], size: 0.096 },
    // Chicago
    { location: [41.8781, -87.6298], size: 0.068 },
    // Washington D.C.
    { location: [38.9072, -77.0369], size: 0.077 },
    // Beijing
    { location: [39.9042, 116.4074], size: 0.091 },
    // Istanbul
    { location: [41.0082, 28.9784], size: 0.065 },
    // Dublin
    { location: [53.3498, -6.2603], size: 0.082 },
    // Vienna
    { location: [48.2082, 16.3738], size: 0.071 },
    // Milan
    { location: [45.4642, 9.19], size: 0.088 },
    // Toronto
    { location: [43.65107, -79.347015], size: 0.099 },
    // Boston
    { location: [42.3601, -71.0589], size: 0.054 },
    // Abu Dhabi
    { location: [24.4539, 54.3773], size: 0.093 },
    // Budapest
    { location: [47.4979, 19.0402], size: 0.062 },
    // São Paulo
    { location: [23.5505, -46.6333], size: 0.078 },
    // Riyadh
    { location: [24.7136, 46.6753], size: 0.069 },
    // Stockholm
    { location: [59.3293, 18.0686], size: 0.082 },
    // Munich
    { location: [48.1351, 11.582], size: 0.077 },
    // Melbourne
    { location: [37.8136, 144.9631], size: 0.093 },
    // Lisbon
    { location: [38.7223, -9.1393], size: 0.056 },
    // Zürich
    { location: [47.3769, 8.5417], size: 0.091 },
    // Seattle
    { location: [47.6062, -122.3321], size: 0.066 },
    // Sydney
    { location: [33.8688, 151.2093], size: 0.089 },
    // Doha
    { location: [25.276987, 51.520008], size: 0.081 },
    // Brussels
    { location: [50.8503, 4.3517], size: 0.074 },
    // San Jose
    { location: [37.3382, -121.8863], size: 0.084 },
    // Bangkok
    { location: [13.7563, 100.5018], size: 0.064 },
    // Warsaw
    { location: [52.2297, 21.0122], size: 0.077 },
    // Copenhagen
    { location: [55.6761, 12.5683], size: 0.09 },
    // Taipei
    { location: [25.033, 121.5654], size: 0.069 },
    // Austin
    { location: [30.2672, -97.7431], size: 0.082 },
    // Oslo
    { location: [59.9139, 10.7522], size: 0.075 },
    // Osaka
    { location: [34.6937, 135.5023], size: 0.094 },
    // Hong Kong
    { location: [22.3193, 114.1694], size: 0.056 },
    // Athens
    { location: [37.9838, 23.7275], size: 0.063 },
    // Frankfurt
    { location: [50.1109, 8.6821], size: 0.088 },
    // Vancouver
    { location: [49.2827, -123.1207], size: 0.072 },
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePointerInteraction = (value: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    pointerInteracting.current = value;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    canvasRef.current!.style.cursor = value ? 'grabbing' : 'grab';
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateMovement = (clientX: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      api.start({ r: delta / 200 });
    }
  };

  const onRender = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: Record<string, any>) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps, @typescript-eslint/no-unnecessary-condition
      if (!pointerInteracting.current) phi += 0.001;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      state.phi = phi + r.get();
      state.width = width * 2;
      state.height = width * 2;
    },
    [pointerInteracting, phi, r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    return () => globe.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]',
        className,
      )}
    >
      <canvas
        className={cn(
          'h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]',
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
