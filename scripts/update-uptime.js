const fs = require("fs");

const birthday = new Date(2007, 6, 12); // YYYY, MM-1, DD
const now = new Date();

let years = now.getFullYear() - birthday.getFullYear();
let months = now.getMonth() - birthday.getMonth();
let days = now.getDate() - birthday.getDate();

if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
}

if (months < 0) {
    years--;
    months += 12;
}

const uptime = `${years} years, ${months} months, ${days} days`;

let readme = fs.readFileSync("README.md", "utf8");

readme = readme.replace(
    /<!--UPTIME-->.*?<!--\/UPTIME-->/,
    `<!--UPTIME-->${uptime}<!--/UPTIME-->`
);

fs.writeFileSync("README.md", readme);

console.log("Updated:", uptime);