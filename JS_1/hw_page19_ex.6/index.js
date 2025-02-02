let Name = prompt("Enter your full name:");
let Salary = Number(prompt("Enter your salary:"));

if (Salary * 1.1 <= 6000) {
  Salary *= 1.1;
} else {
  Salary *= 1.05;
}
console.log(`${Name}, your new salary is: ${Salary}`);