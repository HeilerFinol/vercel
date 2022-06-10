const puppeteer = require('puppeteer');
const express =require('express');

(async () => {
  const browser = await puppeteer.launch({
    args: [
        "--no-sandbox",
       
        '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
      ]
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/');
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', 'losasencio@hotmail.com');
  await page.type('input[name="password"]', '123456.');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
  
  // Add a wait for some selector on the home page to load to ensure the next step works correctly
  await page.screenshot({path: 'home.jpg'});
  await browser.close();
})();

