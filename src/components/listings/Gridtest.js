import data from '../../data/courses.json';

const numItem=data.length;

describe('Number test',()=>{
    test('Number of item=12',()=>{
        expect(numItem).toBe(12);
    });
    test('Number of item to be greater than or equal to 12',()=>{
        expect(numItem).toBeGreaterThanOrEqual(12);
    });
});


describe('Number test',()=>{

});



const dataTest =data[0].title;

describe('String test',()=>{
    test('There is a JS in this title',()=>{
        expect(dataTest).toMatch(/JS/);
    });
    test('The title contains React',()=>{
        expect(dataTest).toContain('React');
    });
});



// Arrays & object

const data2=['React Native','React']

describe('Array and object test',()=>{
    test('The List of courses contains React Native and React',()=>{
        expect(['React Native','React','MeteorJS']).toEqual(expect.arrayContaining(data2));
        
    });
    test('The First course to have the proterty title',()=>{
        expect(data[0]).toHaveProterty('title');
    });
    
    test('The First course to have the property title and value of 31,266',()=>{
        expect(data[0]).toHaveProperty('views','31,266');
    });
});



