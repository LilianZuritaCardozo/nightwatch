//const { test } = require("nightwatch");

//module.exports = {
    //'Demo test Nightwatch asserts' : function(browser) {
      
      
      //const x = document.getElementById("main");
     // const y = x.getElementsByTagName("p");
     //document= ('https://nightwatchjs.org/')

     //var items = getElementsByClassName('nav-item');
     //infoBtn = driver.FindElements(By.CssSelector("li[class='nav-item']"));
     //infoBtn[4].Click();//const DeveloperGuideButton = locateWith(By.className('nav-item')).toRightOf(By.css("li a[href='/']"))
      
      //browser
     //.windowMaximize()
     // .url('https://v09.nightwatchjs.org/')//The url was changed in order to find the 'Getting Started' button.
      //.waitForElementVisible("li a[href = '/gettingstarted']")
     // .click("li a[href = '/gettingstarted']")
     //.url('https://nightwatchjs.org/')//Returning to the web page of the task in order to automate the rest of the steps.
     //.Click(infoBtn[4])
     //.click("div(ul li[href=https://nightwatchjs.org/guide/overview/what-is-nightwatch.html]")


     // .click({"class=nav-item", index:2})
      //.click("li a[href = 'https://nightwatchjs.org/guide/overview/what-is-nightwatch.html']")
      //.click("button[class=DocSearch DocSearch-Button]")
      //.assert.visible("li a[href = '/About']", 'class', 'nav-link')
      //.assert.not.title('Unosquare')
      //.assert.urlContains('https')     
      //.assert.urlEquals('https://www.unosquare.com/') 
     //.end()
   // }
//};



const { test } = require("nightwatch");

module.exports = {
    'Demo test Nightwatch asserts' : function(browser) {
      browser
     .windowMaximize()
     .url('https://v09.nightwatchjs.org/')//The url was changed in order to find the 'Getting Started' button.
     .assert.textContains("div ul[class='nav navbar-nav navbar-right']" , 'Getting Started')//(1)
     .click("li a[href = '/gettingstarted']")
     .url('https://nightwatchjs.org/')//Returning to the web page of the task in order to automate the rest of the steps.
     .waitForElementVisible('body')
     .useXpath()
     .click("//*[@id='navigation']/ul/li[2]/a")
     .useCss() 
     .assert.urlEquals('https://nightwatchjs.org/guide/overview/what-is-nightwatch.html') //(2)
     .click("li div[id = 'docsearch']")
     .waitForElementVisible('input[id=docsearch-input]')
     .assert.attributeEquals('input' , 'autocomplete' , 'off') //(3)
     .setValue('input[id=docsearch-input]', 'Asserts')
     .click("div span[class='DocSearch-Hit-path']")
     .verify.textContains('body', 'API Commands', '"API Commands" header is present') //(4)
     .useXpath()
     .click("//*[@id='navbartop']/ul/li[5]/a")
     .useCss()
     //.moveTo("class='footer-text'")
     .assert.textEquals("div p[class= 'address']", 'Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors.' , 'Nightwatch creation text is present') //(5)
     .end()
    }
};
