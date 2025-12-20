"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/lib/components/Map"), { ssr: false });

export default function MapPage() {
  return (
    <main className="h-full flex flex-col p-4">
      <h1 className="text-3xl font-bold mb-4"></h1>

      <Map />
    </main>
  );
}
