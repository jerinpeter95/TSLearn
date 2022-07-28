import { test, expect, Browser, BrowserContext, Page, chromium } from "@playwright/test";

test.describe('Google home page', () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async()=> {

        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await browser.newPage();
        await page.goto('https://letcode.in/alert');
    });

    test('handle alert', async()=> {

        const ele = await page.$('#prompt');
        page.on('dialog', dialog => {
            console.log('Message :' + dialog.message());
            console.log('Default value :' + dialog.defaultValue());
            console.log('Type :' + dialog.type());
            dialog.accept('Hello there Jerin');
        });
        await ele?.click();
    });

    test.afterAll(async()=> {
        page.close();
        context.close();
        browser.close();
    });

});