// mocha tests to run against this file
const assert = require("chai").assert;
const { sortedData } = require("../quickSort.js");

describe("quickSort", () => {
  it("should sort the data by price", () => {
    const data = [
      { price: 100 },
      { price: 50 },
      { price: 200 },
      { price: 10 },
      { price: 5 },
    ];
    const sorted = sortedData(data, "price");
    assert.deepEqual(sorted, [
      { price: 5 },
      { price: 10 },
      { price: 50 },
      { price: 100 },
      { price: 200 },
    ]);
  });
  it("should sort the data by year", () => {
    const data = [
      { year: 2020 },
      { year: 2019 },
      { year: 2018 },
      { year: 2017 },
      { year: 2016 },
    ];
    const sorted = sortedData(data, "year");
    assert.deepEqual(sorted, [
      { year: 2016 },
      { year: 2017 },
      { year: 2018 },
      { year: 2019 },
      { year: 2020 },
    ]);
  });
  it("should sort the data by square feet", () => {
    const data = [
      { squareFeet: 1000 },
      { squareFeet: 500 },
      { squareFeet: 2000 },
      { squareFeet: 100 },
      { squareFeet: 50 },
    ];
    const sorted = sortedData(data, "squareFeet");
    assert.deepEqual(sorted, [
      { squareFeet: 50 },
      { squareFeet: 100 },
      { squareFeet: 500 },
      { squareFeet: 1000 },
      { squareFeet: 2000 },
    ]);
  });
  it("should sort the data by bedrooms", () => {
    const data = [
      { bedrooms: 5 },
      { bedrooms: 3 },
      { bedrooms: 2 },
      { bedrooms: 1 },
      { bedrooms: 4 },
    ];
    const sorted = sortedData(data, "bedrooms");
    assert.deepEqual(sorted, [
      { bedrooms: 1 },
      { bedrooms: 2 },
      { bedrooms: 3 },
      { bedrooms: 4 },
      { bedrooms: 5 },
    ]);
  });
  it("should sort the data by bathrooms", () => {
    const data = [
      { bathrooms: 5 },
      { bathrooms: 3 },
      { bathrooms: 2 },
      { bathrooms: 1 },
      { bathrooms: 4 },
    ];
    const sorted = sortedData(data, "bathrooms");
    assert.deepEqual(sorted, [
      { bathrooms: 1 },
      { bathrooms: 2 },
      { bathrooms: 3 },
      { bathrooms: 4 },
      { bathrooms: 5 },
    ]);
  });
});
