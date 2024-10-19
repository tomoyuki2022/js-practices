#!/usr/bin/env node

import minimist from "minimist";

const thisYear = new Date().getFullYear();
const thisMonth = new Date().getMonth();
const option = minimist(process.argv.slice(2));
const year = option.y || thisYear;
const month = option.m || thisMonth + 1;

const startDate = new Date(year, month - 1, 1);
const endDate = new Date(year, month, 0);

const startWeekday = startDate.getDay();

console.log(`${month}月 ${year}`.padStart(13));
console.log("日 月 火 水 木 金 土");
process.stdout.write(" ".repeat(startWeekday * 2.5));

for (let day = startDate.getDate(); day <= endDate.getDate(); day++) {
  const date = new Date(year, month - 1, day);

  process.stdout.write(
    date.getDay() === 0
      ? date.getDate().toString().padStart(2)
      : date.getDate().toString().padStart(3),
  );

  if (date.getDay() === 6) {
    console.log();
  }
}

console.log("\n");
