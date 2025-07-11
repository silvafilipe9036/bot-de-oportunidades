# 🤖 Bot de Oportunidades

Um bot automatizado para encontrar e monitorar anúncios de MacBooks (e outros produtos) no OLX e Facebook Marketplace em tempo real, com foco na região de Balneário Camboriú e Itajaí (SC).

## 🚀 Funcionalidades

- 🔍 Busca automatizada por palavras-chave (ex: "Macbook Pro", "Macbook Air", "notebook Apple")
- 🧠 Filtro por cidade, data e faixa de preço
- 💬 Integração com WhatsApp para receber alertas (via bot)
- 📥 Suporte a logs e prints automáticos dos anúncios detectados
- 📦 Pronto para rodar em servidores ou localmente

## ⚙️ Tecnologias Utilizadas

- Node.js
- Puppeteer
- Dotenv
- JavaScript ES6+

## 📁 Estrutura do Projeto

```

📁 bot-de-oportunidades
├── index.js               # Ponto de entrada
├── scraping.js            # Lógica de scraping OLX
├── .env                   # Variáveis de ambiente
├── package.json           # Dependências e scripts
├── pagina\_olx.png         # Screenshot de exemplo
└── .gitignore

````

## 🛠️ Instalação

```bash
git clone https://github.com/seu-usuario/bot-de-oportunidades.git
cd bot-de-oportunidades
npm install
````

Crie um arquivo `.env` com variáveis como:

```env
WHATSAPP_NUMBER=+554799999999
SEARCH_KEYWORDS=macbook,macbook pro,macbook air
REGION=balneario camboriu,itajai
```

## ▶️ Como Usar

```bash
node index.js
```

O bot irá iniciar a busca automaticamente e mostrar os anúncios encontrados no console (ou enviar por WhatsApp, se configurado).

## 💡 Próximas Funcionalidades

* Integração com Telegram
* Painel web para gerenciamento das buscas
* Busca paralela por múltiplas cidades

## 👤 Autor

**Filipe Silva**
📍 Balneário Camboriú - SC
📱 WhatsApp: [+55 47 99227-3420](https://wa.me/5547992273420)

---

## 🛡️ Licença

Este projeto é de uso livre e experimental. Nenhuma associação com OLX, Facebook ou Apple.

````

---

### ✅ Próximo passo:

1. Crie o arquivo:
```bash
code README.md
````

2. Cole o conteúdo acima.

3. Salve, adicione e faça o commit:

```bash
git add README.md
git commit -m "Adicionar README.md profissional"
git push origin main
```

