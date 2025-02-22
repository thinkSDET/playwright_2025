import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";

test("Login Test Verification", async({page})=>{
   const landingPage =  new LandingPage(page);
   const loginPage =  new LoginPage(page);
   await landingPage.NavigateToLoginPage();
   await loginPage.loginApplication("testology.qa.learning@gmail.com","Testology@123");
});