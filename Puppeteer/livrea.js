import * as puppeteer from "puppeteer"
const Username = "Username"
const Password = "Password"

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1775,
            height: 998
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://smartpeg.livrea.eu/account/login');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 231.75,
                y: 32.375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(2) > input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 171.75,
                y: 61.234375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .fill(Username);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(2) > input')
        ])
            .setTimeout(timeout)
            .fill(Password);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('button'),
            targetPage.locator('::-p-text(Accesso)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 149.75,
                y: 32.671875,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(4) > a')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 128,
                y: 49,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(4) li:nth-of-type(3) span.menu-text'),
            targetPage.locator('::-p-text(Relationships)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87,
                y: 22,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
