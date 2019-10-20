const property = [

  {
    id:"1",
    city:"Paris",
    title:"Entire house · 1 bed",
    address:"Small house in Paris Center 5p",
    price:"10,254/night",
    rating : 5,
    imageurl:"https://glairbnb.s3.us-east-2.amazonaws.com/Paris1.PNG"
  },
  {
    id:"2",
    city:"Paris",
    title:"Private room · 1 bed",
    address:"Cosy Room Paris Center in the Marais",
    price:"6,267/night",
    rating : 5,
    imageurl:"https://glairbnb.s3.us-east-2.amazonaws.com/Paris2.PNG"
  },
  {
    id:"3",
    city:"Paris",
    title:"Entire loft · 9 beds",
    address:"Little house in Paris, Loft, Canal",
    price:"38,169/night",
    rating : 5,
    imageurl:"https://glairbnb.s3.us-east-2.amazonaws.com/Paris3.PNG"
  },
  {
    id:"4",
    city:"Paris",
    title:"Entire apartment · 2 beds",
    address:"Cosy Apartment in Rue des Rosiers ",
    price:"10,611/night",
    rating : 5,
    imageurl:"https://glairbnb.s3.us-east-2.amazonaws.com/Paris4.PNG"
  },
  {
    id:"5",
    city:"Paris",
    title:"Entire apartment · 1 bed",
    address:"AMAZING HOUSE HIGH MARAIS",
    price:"15,382/night",
    rating : 5,
    imageurl:"https://glairbnb.s3.us-east-2.amazonaws.com/Paris5.PNG"
  }
];

export function getProperties() {
  return property;
}

export function getProperty(id) {
  return property.find(m => m.id === id);
}