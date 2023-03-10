import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `
    <h3>Company Name: ${this.companyName}</h3>
    <p>${this.catchPhrase}</p>
    `;
  }
}
