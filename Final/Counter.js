function createCounter() {
  let count = 0;
  return function () {
    console.log("Student Name: Poch Senglay");
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
