test("the amount is a number", () =>{
    expect()
})

test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')
    
    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One Dollar should be 106.5833 Yen", function(){

    const { fromDollarToYen } = require('./app.js')

    const Dollar = fromDollarToYen(10)

    const expected = 10 * 106.58; 
    
    expect(fromDollarToYen(10)).toBe(1065.8);
})

test("One Yen should be 0.0062 Pound", function(){

    const { fromYenToPound } = require('./app.js')

    const Yen = fromYenToPound(50)

    const expected = 50 * 0.0062; 
    
    expect(fromYenToPound(50)).toBe(0.31);
})