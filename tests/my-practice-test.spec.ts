import { test, expect, Page, Locator } from '@playwright/test';
import { BlazemeterHomePage } from '../pages/blazemeter-home-page';

// let page : Page;

// test.beforeEach(async ({page}) => {
//     await page.goto('https://demo.playwright.dev/todomvc');
//   });

// test11



test.describe('pair of tests', () => {

    test('practice test', async ({ page }) => {
        //     await page.locator('jj').fill('my test')      // sample commented 24-Aug-2022

        // const frame = page.frame({ url: /.*domain.*/ });
        // let jj = page.frameLocator(`sdcds`).locator(`sdcds`).elementHandles();

        // for(let i of await jj)
        //     if(!i.isChecked)
        //         await i.check();    

        await page.goto(' http://www.londonfreelance.org/courses/frames/');

        // const elem: Locator = page.frameLocator(`//frame[@name='navbar']`).locator(`//a[normalize-space()='Sample content']`)
        // await elem.click();
        // console.log(await elem.textContent())
        const elem1 = page.frameLocator(`//frame[@name='navbar']`).locator(`body > p`);

        console.log(await elem1.first().textContent());
        console.log(await elem1.last().textContent());

        // for (let i of await elem1)
        //     console.log(await i.textContent());

        expect(`first message. `).toContain(`first message.
        `);                     // fails coz of new line

    });



    test('2nd-one', async ({ page }) => {
        await page.goto(`https://www.blazemeter.com/`);

        let blazemeterHomePage: BlazemeterHomePage = new BlazemeterHomePage(page);

        await blazemeterHomePage.inputBox.fill('annie');

        const kya = (blazemeterHomePage.inputBox as unknown as String).toString();
        const num = kya + 123;
        console.log(`value hain ${num.length}`);
        //    await page.pause();

    })


    test('array comparisons using expect', async () => {

     const declnText = (locatorArr: string[]): string[] =>
            locatorArr.map(elem => elem);

        console.log(declnText(['boy', 'girl', 'superman', 'allen']));

        const firstArr: string[] = ['boy', 'girl', 'superman', 'allen'],
            secondArr: string[] = ['allen', 'superman', 'boy', 'girl'];

        // console.log(typeof firstArr);                 // object
        console.log(firstArr);                          // prints       [ 'boy', 'girl', 'superman', 'allen' ]
        firstArr.forEach(elem => console.log(elem));    // prints  boy, girl, superman, allen

        // length check
        expect(firstArr.length).toEqual(secondArr.length);              // take this one
        expect(firstArr.length).toBe(secondArr.length);

        // element contents check
        for (const element of firstArr)
            expect(secondArr).toContain(element);

        firstArr.forEach(element => expect(secondArr).toContain(element));              // FINALLY TAKEN THIS ONE

        // expect(secondArr).toEqual(expect.arrayContaining(firstArr));                     // strict equality check, take an alternate for this one
        // expect(secondArr).toContain(expect.arrayContaining(firstArr));                   // don't take this one

        const isPresent1 = firstArr.every(element => secondArr.includes(element));                  
        console.log(`isPresent1 value is ${isPresent1}\n`);
        expect(isPresent1).toBe(true);
        expect(isPresent1).toBeTruthy();                        












        /* wrong logic
        const isPresent2 = secondArr.filter(element => firstArr.includes(element));
        console.log(`isPresent2 value is ${isPresent2}\n`);
        // expect(isPresent2).toBe(true);
       

        const isPresent3 = 
        console.log(`isPresent3 value is ${isPresent3}\n`);
        expect(isPresent3).toBe(true);                  */


        /** raw notes - delete after declaration text:
         * 
         * 
        const declnText = async (locatorArr: Locator[]): string[] =>
                    locatorArr.map(elem => await elem.textContent() );

        TAKEN/USING BELOW ONE:
        ---------
        getNestedElementsCheck = async(locators: Promise<Locator[]>): Promise<string[]> =>
            Promise.all((await locators).map(elem => elem.textContent()));

     const serviceReqSubmittedData = async (locator: (Locator | Locator[]): string[] =>                 // don't use
            locator.count() > 1 ? locator.map(elem => await elem.textContent() ) : locator.textContent() ;
                     
        
        // length check
        expect(declnText.length).toEqual(jsonPathArray.length);
        expect(declnText.length).to.have.lengthOf(jsonPathArray.length);			// mocha
        await expect(myArray.length).toBe(anotherArray.length);
        
        
        
        // element contents check
        -----
        for (const element of myArray) {
          expect(anotherArray).toContain(element);
        } 
        
        // Or using arrayContaining
        expect(anotherArray).toEqual(expect.arrayContaining(myArray));
        
        // Or using arrayContainingEqual (if order matters)
        expect(anotherArray).toEqual(expect.arrayContainingEqual(myArray));
        
        
        const myArray = [1, 2, 3, 4, 5];
        const anotherArray = [6, 7, 8];
        
        const allPresent = myArray.every(element => anotherArray.includes(element));
        
        expect(allPresent).toBe(true);
        
        
        let Array2 = [ "1", "2", "3", "4", "5" ]; 
        let Array1 = ["1","2","3"];
        
        let result = Array2.filter(val => Array1.includes(val));
        
        expect(result).toBe(true);
        
        
        let result = declnText.forEach(elem => jsonPathArray.includes(elem) );		// jsonPathArray === jsonFile.AU.ATE (filename.region.role)
        
        expect(result).toBe(true);
        
         * 
         *                                               */





    })


})








