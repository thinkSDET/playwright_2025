import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test.describe.serial("Customer Tests", () => {
test("verify_user_lands_on_customers_page",async ({page})=>{
    const loginPage =  new LoginPage(page);
    const deskPage = await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
    const sellingPage =  await deskPage.navigateToSellingModuleLink();
    const customerPage = await sellingPage.navigateToCustomer();
    await customerPage.verifyUserLandOnCustomerPage();
});

test("verify_user_save_the_new_customer",async ({page})=>{
    const loginPage =  new LoginPage(page);
    const deskPage = await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
    const sellingPage =  await deskPage.navigateToSellingModuleLink();
    const customerPage = await sellingPage.navigateToCustomer();
    await customerPage.fillNewCustomerDetails();
    await customerPage.verifyNewCustomerAddedSuccessfully();
});

test("verify_user_delete_the_customer",async ({page})=>{
    const loginPage =  new LoginPage(page);
    const deskPage = await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
    const sellingPage =  await deskPage.navigateToSellingModuleLink();
    const customerPage = await sellingPage.navigateToCustomer();
    await customerPage.fillNewCustomerDetails();
    await customerPage.verifyCustomerDeletedSuccessfully();
});
});