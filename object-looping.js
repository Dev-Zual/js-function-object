const mobile = {
  brand: "xiami",
  price: 1700,
  storage: "128GB",
  camera: "64MP",
  ram: "4GB",
};

const properties = Object.keys(mobile);
for (let i = 0; i < properties.length; i++) {
  const propertyName = properties[i];
  const property = mobile[propertyName];
  //   console.log(propertyName, property);
}

for (const propertyName in mobile) {
  const values = mobile[propertyName];
  console.log(propertyName, values);
}
