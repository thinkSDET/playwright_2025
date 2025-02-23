import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test("verify_user_lands_on_customers_page",async ({page})=>{
    const loginPage =  new LoginPage(page);
    const deskPage = await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
    const sellingPage =  await deskPage.navigateToSellingModuleLink();
    const customerPage = await sellingPage.navigateToCustomer();
    await customerPage.verifyUserLandOnCustomerPage();
});