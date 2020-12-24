import puppeteer from 'puppeteer'

async function bootstrap() {
    const fundName = process.argv[2].toUpperCase()
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto('https://codequiz.azurewebsites.net/');
    await page.waitForSelector('body');
    await page.click('input[value=Accept]')
    await page.waitForSelector('table');

    const data: any = await page.evaluate(() => {
        const t = document.querySelector("table") as any;

        return Array.from(t.rows)
            .slice(1)
            .reduce((res: any, row: any) => {
                res[row.cells[0].textContent.slice(0, -1)] = row.cells[1].textContent;
                return res
            }, {});
    })
    await browser.close();


    console.log(`${fundName}: ${data[fundName]}`)
}

try {
    bootstrap()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}
