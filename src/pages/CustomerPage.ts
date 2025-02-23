import {expect, Page} from '@playwright/test'

export class CustomerPage{

    private readonly customerPageUrl ="https://test.techlift.in/desk#List/Customer/List";
    private readonly customerPageTitle="Customer";

    constructor(private page : Page){

    }
    async verifyUserLandOnCustomerPage(){
        await expect(this.page).toHaveTitle(this.customerPageTitle);
        await expect(this.page).toHaveURL(this.customerPageUrl);
    }
}