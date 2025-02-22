import { Page,expect } from "@playwright/test";
export default class DeskPage{

    private readonly deshPageTitle = "Home";
    private readonly deskPageUrl = "https://test.techlift.in/desk";

    private readonly settingsIcon = "(//*[normalize-space(text())='Settings'])[1]";
    constructor(private page: Page){

    }

    async verifyUserLandOnDeskPage(){
        await expect(this.page).toHaveTitle(this.deshPageTitle);
        await expect(this.page).toHaveURL(this.deskPageUrl);
    }

}