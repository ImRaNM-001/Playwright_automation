import { Locator, Page } from "@playwright/test";

export class BlazemeterHomePage{

    readonly inputBox : Locator = this.page.locator(`.input_test_url`);

    constructor(private page: Page) {

    }


    

}