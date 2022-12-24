import leaflet from "leaflet";
export class Map {
  map: leaflet.Map;
  constructor(divId: string) {
    this.map = leaflet.map(divId).setView([0, 0], 0);
    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(this.map);
  }
}
