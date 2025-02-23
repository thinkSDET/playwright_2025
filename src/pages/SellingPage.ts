import { expect, Page } from "@playwright/test";
import { CustomerPage } from "./CustomerPage";


export default class SellingPage{

    private readonly sellingPageUrl = "https://test.techlift.in/desk#modules/Selling";
    private readonly sellingPageTitle = "Selling";

    private readonly customer = "[description='Customer Database.']";

    constructor(private page : Page){

    }

    async verifyUserLandOnSellinPage(){
        await expect(this.page).toHaveURL(this.sellingPageUrl);
        await expect(this.page).toHaveTitle(this.sellingPageTitle);
    }

    async navigateToCustomer(){
        await this.page.locator(this.customer).click();
        const customerPage = new CustomerPage(this.page);
        return customerPage;
    }
}