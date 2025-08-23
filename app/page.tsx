//page.tsx
"use client";

import Orb from "@/components/Orb/Orb";   // ✅ correct import
import ExifUploader from "@/components/ExifUploader";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hue={90}              // default hue
          hoverIntensity={0.9}   // default hover intensity
          rotateOnHover={true}
          forceHoverState={false}
        />
      </div>

      {/* Foreground Content */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          📸 Image Metadata Inspector
        </h1>
        <ExifUploader />
      </main>
    </div>
  );
}
