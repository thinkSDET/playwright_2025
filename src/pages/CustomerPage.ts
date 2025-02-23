import {expect, Page} from '@playwright/test'

export class CustomerPage{

    private readonly customerPageUrl ="https://test.techlift.in/desk#List/Customer/List";
    private readonly customerPageTitle="Customer";

    private readonly newBtn = "[data-label='New']";
    private readonly fullNameTxtBox ="[data-fieldname='customer_name'][data-doctype='Customer']";
    private readonly selectComapnyType = "[data-fieldtype='Select'][data-doctype='Customer']";
    private readonly newCustomerSaveBtn  = "//button[text()='Save']"
    private readonly searchFullNameTxtBox = "[placeholder='Full Name']";
    private readonly spanTxt = "//span[@class='list-count']//span";
    private readonly checkbox = "[type='checkbox'][class*='checkbox']";
    private readonly actionsDropDown ="(//button[@data-toggle='dropdown']//span[@data-label='Actions'])[1]";
    private readonly deleteBtn ="[data-label='Delete']";
    private readonly yesBtn ="(//button[text()='Yes'])[5]";
    private readonly noCustomerFoundMsg ="//p[text()='No Customer found']";

    constructor(private page : Page){

    }
    async verifyUserLandOnCustomerPage(){
        await expect(this.page).toHaveTitle(this.customerPageTitle);
        await expect(this.page).toHaveURL(this.customerPageUrl);
    }

    async fillNewCustomerDetails(){
        await this.page.locator(this.newBtn).click();
        await this.page.locator(this.fullNameTxtBox).fill("newCustomer");
        await this.page.locator(this.selectComapnyType).selectOption("Individual");
        await this.page.locator(this.newCustomerSaveBtn).click();
    }
    async searchForTheCustomer(){
        await this.page.locator(this.searchFullNameTxtBox).fill("newCustomer");
        await this.page.keyboard.press("Enter");
    }
    async verifyNewCustomerAddedSuccessfully(){
        await this.searchForTheCustomer();
        await expect(this.page.locator(this.spanTxt)).toHaveText("1 of 1");
    }
    async verifyCustomerDeletedSuccessfully(){
        await this.searchForTheCustomer();
        await this.page.locator(this.checkbox).check();
        await this.page.locator(this.actionsDropDown).click();
        await this.page.locator(this.deleteBtn).click();
        await this.page.locator(this.yesBtn).click();
        await expect(this.page.locator(this.noCustomerFoundMsg)).toBeVisible();
    }
}