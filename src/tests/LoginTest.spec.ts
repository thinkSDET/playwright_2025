import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import DeskPage from "../pages/DeskPage";

test("Login_With_Valid_Credentials", async({page})=>{
   const landingPage =  new LandingPage(page);
   const loginPage = await landingPage.NavigateToLoginPage();
   const deskPage = await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
   await deskPage.verifyUserLandOnDeskPage();
});