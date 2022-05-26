function getCurrentDate() {
  return Date.now() + globalThis.testDate;
}

module.exports = getCurrentDate;

console.log(__filename);
