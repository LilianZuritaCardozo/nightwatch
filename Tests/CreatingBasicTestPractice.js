module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.visible("li a[href = '/About']", 'class', 'nav-link')
      .assert.not.title('Unosquare')
      .assert.urlContains('https')     
      .assert.urlEquals('https://www.unosquare.com/') 
      .end();
    }
};