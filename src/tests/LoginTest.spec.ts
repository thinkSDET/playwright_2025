import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import DeskPage from "../pages/DeskPage";

test("Login_with_valid_credentials", async({page})=>{
   const loginPage =  new LoginPage(page);
   const deskPage = await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
   await deskPage.verifyUserLandOnDeskPage();
});

test("Login_with_invalid_credentials",async ({page})=>{
   const loginPage =  new LoginPage(page);
   await loginPage.validateLoginWithInvalidCred("testology.qa.learning@gmail.com","Testology@1234");
});