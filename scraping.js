require('dotenv').config();
const puppeteer = require('puppeteer');
const axios = require('axios');

async function enviarParaWhatsapp(mensagem) {
  const instancia = process.env.ZAPI_INSTANCE;
  const token = process.env.ZAPI_TOKEN;
  const numero = process.env.ZAPI_NUMERO;

  try {
    const response = await axios.post(`https://api.z-api.io/instances/${instancia}/token/${token}/send-text`, {
      phone: numero,
      message: mensagem
    });

    console.log('✅ Mensagem enviada no WhatsApp!');
  } catch (error) {
    console.error('❌ Erro ao enviar mensagem no WhatsApp:', error.message);
  }
}

async function buscarAnuncios() {
  const url = 'https://www.olx.com.br/estado-sc?q=macbook';

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

await new Promise(resolve => setTimeout(resolve, 10000)); // ✅ funciona em qualquer versão


    await page.screenshot({ path: 'pagina_olx.png' });

    const anuncios = await page.evaluate(() => {
  const cards = document.querySelectorAll('a[data-lurker-detail-id]');
  const resultado = [];

  cards.forEach(card => {
    const titulo = card.querySelector('h2')?.innerText.trim() || '';
    const preco = card.querySelector('span')?.innerText.trim() || '';
    const link = card.href;

    if (titulo.toLowerCase().includes("macbook")) {
      resultado.push({ titulo, preco, link });
    }
  });

  return resultado;
});


    if (anuncios.length > 0) {
      const top = anuncios[0];
      const mensagem = `🚨 MacBook encontrado!\n💻 ${top.titulo}\n💰 ${top.preco}\n🔗 ${top.link}`;
      await enviarParaWhatsapp(mensagem);
    } else {
      console.log("⚠️ Nenhum anúncio encontrado.");
    }

    await browser.close();
  } catch (err) {
    console.error('❌ Erro ao buscar anúncios:', err.message);
    await browser.close();
  }
}

buscarAnuncios();
