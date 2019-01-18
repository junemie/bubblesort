describe("Bubble Sort", function() {
  let swapCounter;
  let temp;
  let arr = [1, 10, 8, 5, 7, 6, 3, 4, 2];
  let arr2 = [190, 5, 6, 22, 3, 178, 200, 20];
  beforeEach(() => {
    swapCounter = 0;
  });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("expected output to be sorted", function() {
    expect(arr).toEqual(arr.sort());
    expect(arr2).toEqual(arr2.sort());
  });
  it("do not use array.prototype.sort method", function() {
    spyOn(Array.prototype, "sort").and.callThrough();
    expect(Array.prototype.sort.calls.count()).toBe(0);
  });
  if("uses the temp global variable", function(){

  })
});
