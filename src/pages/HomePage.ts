import { Page } from "@playwright/test";
export default class HomePage{

    private readonly settingsIcon = "(//*[normalize-space(text())='Settings'])[1]";
    constructor(private page: Page){

    }

   
}