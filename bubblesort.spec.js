describe('Bubble Sort', function(){
  let swapCounter;
    beforeEach(()=>{
      swapCounter = 0
    }
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

});
