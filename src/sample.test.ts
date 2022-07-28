import { test, expect, Browser, BrowserContext, Page, chromium } from "@playwright/test";

test.describe('Google home page', () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test('google home page', async() => {

        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await browser.newPage();
        await page.goto('https://www.google.com');
        await expect(page).toHaveTitle('Google');
        await page.type('[name="q"]', 'I love doing automation');
        page.close();
        context.close();
        browser.close();

    });

});