import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import DeskPage from "../pages/DeskPage";

test("Login_With_Valid_Credentials", async({page})=>{
   const loginPage =  new LoginPage(page);
   const deskPage = await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
   await deskPage.verifyUserLandOnDeskPage();
});