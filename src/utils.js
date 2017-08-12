const titles = [
  "John",
  "Mary",
  "Bob",
  "Alice",
  "Charlie",
  "Kate",
  "Lynn",
  "Bill"
];

export function getRandomTitle() {
  return titles[Math.floor(Math.random() * titles.length)];
}
