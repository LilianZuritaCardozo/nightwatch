module.exports = {
    'unosquare command test' : function(browser) {
      var unosquare = browser.page.mainpage();
      
      unosquare
      .navigate()
      .blogPhoneArticleSearch()
      
      browser.end();
    }
  };