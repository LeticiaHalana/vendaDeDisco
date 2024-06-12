const products = [
  {
    title: "Magnetite",
    category: 8,
    price: 89.0,
    img: "./src/assets/img/1.jpg",
    band: "Scalene",
    year: 2017,
    id: 0,
  },
  {
    title: "Acabou o Chorare",
    category: 2,
    price: 66.0,
    img: "./src/assets/img/2.jpg",
    band: "Novos Baianos",
    year: 1972,
    id: 1,
  },
  {
    title: "Nirvana Discografia",
    category: 8,
    price: 50.0,
    img: "./src/assets/img/3.jpg",
    band: "Nirvava",
    year: 1990,
    id: 2,
  },
  {
    title: "Both Sides",
    category: 1,
    price: 22.0,
    img: "./src/assets/img/4.jpg",
    band: "Phil Collins",
    year: 1993,
    id: 3,
  },
];

export const categories = [
  "Todos",
  "Pop",
  "MPB",
  "Forró",
  "Samba",
  "Baião",
  "Rap",
  "Hip-Hop",
  "Rock",
  "Reggae",
  "Country",
  "Gospel",
];

//Chama um versão atualizada do array
export function getArray() {
  return products;
}

//Chama um versão atualizada do array
export function setArray(newArray) {
  products = newArray;
}