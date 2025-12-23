"use client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useRef, useState } from "react";
import { basicMarkerIcon, selectedMarkerIcon } from "./MarkerIcons";
import { Icon } from "@iconify/react";
import globeIcon from "@iconify-icons/lucide/globe";
import { cities, City } from "../itinerary/plan";
import EventCardWheel from "./EventCardWheel";

export default function Map() {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const mapRef = useRef<L.Map>(null);
  const defaultCenter: [number, number] = [40.4168, -3.7038];
  const defaultZoom = 6;

  return (
    <div className="flex flex-row gap-6 w-full h-full">
      <div className="relative w-3/5 h-[80vh] overflow-hidden shadow-lg border-[3px]">
        <MapContainer
          center={defaultCenter}
          zoom={6}
          minZoom={3}
          scrollWheelZoom={true}
          className="h-full w-full"
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            minZoom={1}
            maxZoom={100}
          />

          {cities.map((city) => (
            <Marker
              key={city.name}
              position={city.coords}
              icon={
                selectedCity.name == city.name
                  ? selectedMarkerIcon
                  : basicMarkerIcon
              }
              eventHandlers={{
                click: () => {
                  setSelectedCity(city);
                  mapRef.current?.flyTo(city.coords, 13, {
                    duration: 0.5,
                  });
                },
              }}
            ></Marker>
          ))}
        </MapContainer>

        <button
          className="absolute top-4 right-4 z-1000 bg-white p-2 border-2 border-gray-400 text-2xl rounded shadow hover:bg-gray-100"
          onClick={() => {
            mapRef.current?.flyTo(defaultCenter, defaultZoom, {
              duration: 1.5,
            });
          }}
        >
          <Icon icon={globeIcon} width={20} height={20} />
        </button>
      </div>
      <div className="flex flex-col gap-2 h-full w-2/5">
        <h1 className="font-cinzel font-semibold text-3xl">
          {selectedCity.name}
        </h1>
        <div className="h-[30vh] self-start w-full">
          <img
            src={`/pictures/cities/${selectedCity.name}.jpg`}
            className="w-full h-full object-cover shadow-sm rounded-sm"
            alt={selectedCity.name}
          />
        </div>
        <p className="mt-8 text-base font-medium">{selectedCity.description}</p>
        <EventCardWheel events={selectedCity.events} />
      </div>
    </div>
  );
}
