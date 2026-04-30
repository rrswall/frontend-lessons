let workers = [
    { name: "Roia", department: "development" },
    { name: "Fatima", department: "hr" },
    { name: "Rashad", department: "development" },
    { name: "Amina", department: "design" },
    { name: "dovlet", department: "development" }
  ];

let development = [];

let i = 0;

while (i < workers.length) {
  if (workers[i].department == "development") {
    development.push(workers[i]);
  }
  i++;
}

console.log(development);