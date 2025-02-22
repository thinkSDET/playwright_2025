import { Page } from "@playwright/test";
import LoginPage from "./LoginPage";

export default class LandingPage{

    private readonly loginBtnLink = "[href='/login']";
    constructor(private page :Page){}

    async NavigateToLoginPage(){
        await this.page.goto('/');
        this.page.locator(this.loginBtnLink).click();
        return new LoginPage(this.page);
    }
}