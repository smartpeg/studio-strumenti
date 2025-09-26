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
        await targetPage.goto('https://clienteprova2.guru-hrm.it/pages/login.aspx?ReturnUrl=%2fpages%2fhome.aspx');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('#btnLoginHrCore')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 301.625,
                y: 22.25,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#username')
        ])
            .setTimeout(timeout)
            .fill(Username);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#password')
        ])
            .setTimeout(timeout)
            .fill(Password);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#username'),
            targetPage.locator(`::-p-text(${Username})`)
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36.5,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#password'),
            targetPage.locator(`::-p-text(${Password})`)
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76.5,
                y: 8,
              },
            });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('#btnLogin')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 27.890625,
                y: 27,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(1) div.lblVoceMenu')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74.890625,
                y: 8.03125,
              },
            });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('#kt_aside_tab_147 > div > div:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 200.046875,
                y: 16,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        // REPLACED: Wait for body with click on span.selection
        await puppeteer.Locator.race([
            targetPage.locator('span.selection')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 50, // Default offset if not specified
                y: 10,
              },
            });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Valutato - Area non it)'),
            targetPage.locator('#select2-ctl00_cphGuruMaster_ddlAttori-result-s4lc-1_122'),
            targetPage.locator('::-p-xpath(//*[@id=\\"select2-ctl00_cphGuruMaster_ddlAttori-result-s4lc-1_122\\"])'),
            targetPage.locator(':scope >>> #select2-ctl00_cphGuruMaster_ddlAttori-result-s4lc-1_122')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 106.296875,
                y: 17.8125,
              },
            });
        await Promise.all(promises);
    }
    // ... rest of the code remains the same
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) td:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1.296875,
                y: 40.390625,
              },
            });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_gwRisorse_ctl02_btnApri')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 7.015625,
                y: 18.890625,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_btn463'),
            targetPage.locator('::-p-text(SEZIONE TEST 2025 - SEZIONE 2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53.484375,
                y: 9.53125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_295_1_4522')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.28125,
                y: 12.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_295_1_4522')
        ])
            .setTimeout(timeout)
            .fill('150');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_296_1_4523')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.28125,
                y: 22.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_296_1_4523')
        ])
            .setTimeout(timeout)
            .fill('151');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_297_1_4524'),
            targetPage.locator('::-p-text(167)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.28125,
                y: 14.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_297_1_4524'),
            targetPage.locator('::-p-text(167)')
        ])
            .setTimeout(timeout)
            .fill('150');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_298_1_4525')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 11.28125,
                y: 26.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_298_1_4525')
        ])
            .setTimeout(timeout)
            .fill('149');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_299_1_4526'),
            targetPage.locator('::-p-text(170)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19.28125,
                y: 23.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_299_1_4526'),
            targetPage.locator('::-p-text(170)')
        ])
            .setTimeout(timeout)
            .fill('149');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_300_1_4527')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.28125,
                y: 18.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_300_1_4527')
        ])
            .setTimeout(timeout)
            .fill('150');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_301_1_4528')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.28125,
                y: 26.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_301_1_4528')
        ])
            .setTimeout(timeout)
            .fill('152');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_302_1_4529'),
            targetPage.locator('::-p-text(166)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.28125,
                y: 9.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_302_1_4529'),
            targetPage.locator('::-p-text(166)')
        ])
            .setTimeout(timeout)
            .fill('168');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_303_1_4530')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.28125,
                y: 3.03125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_ddl_23_303_1_4530')
        ])
            .setTimeout(timeout)
            .fill('170');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ctl00_cphGuruMaster_btnSalva'),
            targetPage.locator('::-p-text(Salva sezione)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 40.484375,
                y: 20.53125,
              },
            });
    }

    await browser.close();
})().catch(err => {
    console.error(err);
    process.exit(1);
});