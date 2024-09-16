#!/usr/bin/env node

import minimist from "minimist";

const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth();
const option = minimist(process.argv.slice(2));
const year = option["y"] != null ? option["y"] : thisYear;
const month = option["m"] != null ? option["m"] : thisMonth + 1;

const startDate = new Date(year, month - 1, 1);
const endDate = new Date(year, month, 0);

const startWeek = startDate.getDay();
const weeks = ["日", "月", "火", "水", "木", "金", "土"];

console.log(`${month}月 ${year}`.padStart(13));
console.log(weeks.join(" "));
process.stdout.write(" ".repeat(startWeek * 3));

const dates = [];
for (let date = startDate.getDate(); date <= endDate.getDate(); date++) {
  dates.push(new Date(year, month - 1, date));
}

for (let day of dates) {
  process.stdout.write(
    day.getDate().toString().padStart(2).padEnd(3) +
      (day.getDay() === 6 ? "\n" : ""),
  );
}

console.log("\n");
