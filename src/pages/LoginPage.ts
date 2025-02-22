import { expect, Page } from "@playwright/test";
import DeskPage from "../pages/DeskPage";

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