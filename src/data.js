import mountFuji from "./res/images/Mount Fuji.png";
import operaHouse from "./res/images/Sydney Opera House.png";
import geiran from "./res/images/Geirangerfjord.png";

export const data = [
  {
    id: 1,
    location: "Japan",
    place: "Mount Fuji",
    fromDate: "Jan 12, 2021",
    toDate: "Jan 24, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    image: mountFuji,
    mapLink: "https://goo.gl/maps/bUpfKuVtPQckpLTC9",
  },
  {
    id: 2,
    location: "Australia",
    place: "Sydney Opera House",
    fromDate: "May 27, 2021",
    toDate: "June 8, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    image: operaHouse,
    mapLink: "https://goo.gl/maps/kbnBkomRpk1oTPe79",
  },
  {
    id: 3,
    location: "Norway",
    place: "Geirangerfjord",
    fromDate: "Oct 1, 2021",
    toDate: "Nov 18, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    image: geiran,
    mapLink: "https://goo.gl/maps/Ho68sgkk2oqg8D32A",
  },
];
