import { expect, Page } from "@playwright/test";
import DeskPage from "../pages/DeskPage";
import LandingPage from "../pages/LandingPage";

export default class LoginPage{

    private readonly enterEmailInputBox ="#login_email";
    private readonly enterPwdInputBox= "#login_password";
    private readonly submitBtn ="//button[@type='submit' and normalize-space(text())='Login']";
    constructor(private page: Page){
           
    }

    /**
     * Login into application with credential
     * @param userEmail 
     * @param userPassword 
     */
    async loginApplication(userEmail:string, userPassword:string){
        const landingPage =  new LandingPage(this.page);
        await landingPage.NavigateToLoginPage();
        await this.page.locator(this.enterEmailInputBox).fill(userEmail);
        await this.page.locator(this.enterPwdInputBox).fill(userPassword);
        await this.page.locator(this.submitBtn).click()
        .catch((error)=>{
            console.log(`error on the login button, please check the error:${error}`);
            throw error;
        });
        const deskPage  = new DeskPage(this.page);
        return deskPage;
    }

}