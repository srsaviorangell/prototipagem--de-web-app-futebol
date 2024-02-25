const puppeteer = require('puppeteer');
const url = 'https://www.sofascore.com/';

// aqui criamos uma função assincrona 
async function dadosDoSite(){
    const browser = await puppeteer.launch({headless:false});// aqui iniciamos o naveegador interno para nossa aplicação anvega

    const page = await browser.newPage(); // aqui e onde ele vai percorre
    await page.goto(url)
    await page.waitForSelector('.sc-gEvEer.fqViBw',{visible:true});//aqui determinanmos um ponto para ele parara ate o seletor aparecer 
    await page.evaluate(() => document.querySelector('.sc-gEvEer.fqViBw').click());// aqui fissemos o movimento natural do clik fissemos eles burla a segurança e parecer um humano dando o clik 
   
   await page.waitForSelector('.jxCNsN',{visible:true}); // iremos verificar se esta visievel a class dos jogos das ligas e dos jogos
     
   const elements = await page.$$('.jxCNsN'); // aqui vai captura os elementos das class

   const objComElement = {}; // criamos um objeto vasio para armazena os elementos que desejamos 
   for(const element of elements){
    const objComElements = await page.evaluate(el => el.innerText, element);
    objComElement[objComElements] = null;
   };
  
  
   console.log(objComElement)  
   
   
    await new Promise(resolve => {setTimeout(resolve, 60000);  });
    // Quando terminar, fecha o navegador
    await browser.close();
  }; 

dadosDoSite()

