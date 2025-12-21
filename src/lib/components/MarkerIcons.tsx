import L from "leaflet";

export const basicMarkerIcon = L.divIcon({
  html: `
    <div class="group relative flex items-center justify-center bg-icon hover:bg-icon_hover text-white text-2xl w-10 h-10 rounded-full border-2 border-gray-500 shadow-lg -mt-4 -ml-1">
      🌇
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0
            border-l-9 border-r-9 border-t-16 border-l-transparent border-r-transparent border-t-gray-500">
      </div>
      <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-14 border-l-transparent border-r-transparent border-t-icon group-hover:border-t-icon_hover"></div>
    </div>
  `,
  className: "",
  iconSize: [30, 36], // height includes the tip
  iconAnchor: [15, 36], // anchor at bottom of tip
});

export const tentativeMarkerIcon = L.divIcon({
  html: `
    <div class="group relative flex items-center justify-center bg-icon hover:bg-icon_hover text-white text-2xl w-10 h-10 rounded-full border-2 border-gray-500 shadow-lg -mt-4 -ml-1">
      ❓
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0
            border-l-9 border-r-9 border-t-16 border-l-transparent border-r-transparent border-t-gray-500">
      </div>
      <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-14 border-l-transparent border-r-transparent border-t-icon group-hover:border-t-icon_hover"></div>
    </div>
  `,
  className: "",
  iconSize: [30, 36], // height includes the tip
  iconAnchor: [15, 36], // anchor at bottom of tip
});

export const selectedMarkerIcon = L.divIcon({
  html: `
    <div class="group relative flex items-center justify-center bg-icon_selected text-white text-2xl w-10 h-10 rounded-full border-2 border-gray-500 shadow-lg -mt-4 -ml-1">
      🌇
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0
            border-l-9 border-r-9 border-t-16 border-l-transparent border-r-transparent border-t-gray-500">
      </div>
      <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-14 border-l-transparent border-r-transparent border-t-icon_selected"></div>
    </div>
  `,
  className: "",
  iconSize: [30, 36], // height includes the tip
  iconAnchor: [15, 36], // anchor at bottom of tip
});

export const selectedTentativeMarkerIcon = L.divIcon({
  html: `
    <div class="group relative flex items-center justify-center bg-gray-200 text-white text-2xl w-10 h-10 rounded-full border-2 border-gray-500 shadow-lg -mt-4 -ml-1">
      ❓
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0
            border-l-9 border-r-9 border-t-16 border-l-transparent border-r-transparent border-t-gray-500">
      </div>
      <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-14 border-l-transparent border-r-transparent border-t-gray-200"></div>
    </div>
  `,
  className: "",
  iconSize: [30, 36], // height includes the tip
  iconAnchor: [15, 36], // anchor at bottom of tip
});
