import { Page,expect } from "@playwright/test";
import SellingPage from "./SellingPage";
export default class DeskPage{

    private readonly deshPageTitle = "Home";
    private readonly deskPageUrl = "https://test.techlift.in/desk";

    private readonly settingsIcon = "(//*[normalize-space(text())='Settings'])[1]";
    private readonly sellingModuleLink = "[href='#modules/Selling']";
    constructor(private page: Page){

    }

    async verifyUserLandOnDeskPage(){
        await expect(this.page).toHaveTitle(this.deshPageTitle);
        await expect(this.page).toHaveURL(this.deskPageUrl);
    }

    async navigateToSellingModuleLink(){
        await this.page.locator(this.sellingModuleLink).click();
        const sellingPage = new SellingPage(this.page);
        return sellingPage;
    }

}