const property = [
  {
    id: "1",
    title: "Property 1",
    description: "Descrption 1",
    city : "City 1",
    rating: 6,
    rentAmount: 2.5
  },
  {
    id: "2",
    title: "Property 2",
    description: "Descrption 2",
    city : "City 2",
    rating: 5,
    rentAmount: 2.5
  },
  {
    id: "3",
    title: "Property 3",
    description: "Descrption 3",
    city : "City 3",
    rating: 8,
    rentAmount: 3.5
  },
  {
    id: "4",
    title: "Property 4",
    description: "Descrption 4",
    city : "City 4",
    rating: 7,
    rentAmount: 3.5
  },
  {
    id: "9",
    title: "Property 9",
    description: "Descrption 9",
    city : "City 9",
    rating: 7,
    rentAmount: 3.5
  },
  {
    id: "5",
    title: "Property 5",
    description: "Descrption 5",
    city : "City 5",
    rating: 7,
    rentAmount: 3.5
  },
  {
    id: "6",
    title: "Property 6",
    description: "Descrption 6",
    city : "City 6",
    rating: 7,
    rentAmount: 4.5
  },
  {
    id: "7",
    title: "Property 7",
    description: "Descrption 7",
    city : "City 7",
    rating: 4,
    rentAmount: 3.5
  },
  {
    id: "8",
    title: "Property 8",
    description: "Descrption 8",
    city : "City 8",
    rating: 7,
    rentAmount: 3.5
  }
];

export function getProperties() {
  return property;
}

export function getProperty(id) {
  return property.find(m => m.id === id);
}