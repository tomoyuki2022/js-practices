#!/usr/bin/env node

import minimist from "minimist";

const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth();
const option = minimist(process.argv.slice(2));
const year = option.y || thisYear;
const month = option.m || thisMonth + 1;

const startDate = new Date(year, month - 1, 1);
const endDate = new Date(year, month, 0);

const startWeekday = startDate.getDay();

console.log(`${month}月 ${year}`.padStart(13));
console.log("日", "月", "火", "水", "木", "金", "土");
process.stdout.write(" ".repeat(startWeekday * 3));

const dates = [];
for (let day = startDate.getDate(); day <= endDate.getDate(); day++) {
  dates.push(new Date(year, month - 1, day));
}

for (let date of dates) {
  process.stdout.write(
    date.getDate().toString().padStart(2).padEnd(3) +
      (date.getDay() === 6 ? "\n" : ""),
  );
}

console.log("\n");
