
const app = require("../app.js"); 

test('should equal 5 when passed 2 and 3',() => {
    expect(app.add(2,3)).toEqual(5);
    //we make our assertions here. 
})

it('should contain Stuart', () => {
    expect(app.myArray).toContain('Stuart');
});
// can use it instead of test, both work the same

test('Should equal Dan, Stuart, Ben',() => {
    expect(app.myArray).toEqual(['Dan', 'Stuart', 'Ben']);
});

test('randFunc returns null',() => {
    expect(app.randFunc()).toBeNull();
});

test('if coffee is grinding it will stop the grind',() => {
   
    expect(app.pressGrindBeans).toBeTruthy();
});

test('if coffee is grinding it will stop the grind',() => {
   
    expect(app.pressGrindBeans).not.toBeFalsy();
});

test('should give new array with only items of six characters or more', () => {
    expect(app.sixOrMore).toBeTruthy();
});

test ('should convert string to number', () => {
    expect(app.text).toContain('15');
});

test ('should give us planet order from sun', () => {
    expect(app.planets).toContain('Venus');
});

test('should equal 4 as those are present',() => {
    expect(app.count).toEqual(4);
});

test('should square each number and then concat the array into one string', () => {
    expect(app.newNums).toContain('93649100');
});

test('should give century', () => {
    expect(app.century).toContain('17');
});

test('should give the integar value', () => {
    expect(app.parseArray()).toContain(9);
});