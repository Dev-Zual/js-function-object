const mobile = {
  brand: "xiami",
  price: 1700,
  storage: "128GB",
  camera: "64MP",
  ram: "4GB",
};
console.log(mobile.price);
const brandName = mobile["brand"];
mobile.brand = "xiaomi";
console.log(mobile);
const properties = Object.keys(mobile);
const propertiesValues = Object.values(mobile);
console.log(properties);
console.log(propertiesValues);
