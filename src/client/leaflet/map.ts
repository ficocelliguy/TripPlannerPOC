import { THUNDERFOREST_URL } from "../config/config";
import L from "leaflet";

export function mountMap() {
  const map = L.map("map", {
    center: L.latLng(35.644294, 139.637861),
    zoom: 12,
  });

  const Thunderforest_OpenCycleMap = L.tileLayer(THUNDERFOREST_URL, {
    attribution:
      '&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 22,
  });

  Thunderforest_OpenCycleMap.addTo(map);

  return map;
}
