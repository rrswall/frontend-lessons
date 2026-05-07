const names = ["roya", "amin", "gunel", "arzu", "ayse", "sevgi", "akif", "qendab"]
const result = names.filter((item, index) => {
    return item[0] == "a";
  });
  
  console.log(result);