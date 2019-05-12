const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.elmundotoday.com/');
  await page.screenshot({path: 'elmundotoday.png'});

  const noticias = await page.evaluate(() => {
    const titles = Array.from(document.querySelectorAll('.entry-title > a'))
    return titles.map(link => ({ title: link.innerText, link: link.href }))
  })

  console.log('Noticias:', noticias.map(noticia => `- ${noticia.title}`).join('\n'))

  fs.writeFileSync('data.json', JSON.stringify(noticias, null, 2), 'utf8')

  await browser.close()
})()
