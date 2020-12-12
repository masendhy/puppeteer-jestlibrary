describe('Google Homepage', () => {
    beforeAll(async()=>{
        jest.setTimeout(15000);
        await page.goto("https://google.com");
    });
    it("should load google homepage", async()=>{
        await page.waitForSelector('input[name="q"]');
        await jestPuppeteer.debug();
        let title = await page.title();
        console.log("TITLE IS : "+ title);
});
});