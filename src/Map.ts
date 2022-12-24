import leaflet from "leaflet";
// import { Company } from "./Company";
// import { User } from "./User";

// Instructions for any class on how it can be an arguement to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private map: leaflet.Map;
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
  addMarker(mappable: Mappable) {
    const marker = leaflet
      .marker([mappable.location.lat, mappable.location.lng])
      .addTo(this.map);
    marker.bindPopup(mappable.markerContent());
  }
  // addMarker(markerType: User | Company) {
  //   leaflet
  //     .marker([markerType.location.lat, markerType.location.lng])
  //     .addTo(this.map);
  // }
  // addUserMarker(user: User) {
  //   leaflet.marker([user.location.lat, user.location.lng]).addTo(this.map);
  // }
  // addCompanyMarker(company: Company) {
  //   leaflet
  //     .marker([company.location.lat, company.location.lng])
  //     .addTo(this.map);
  // }
}
