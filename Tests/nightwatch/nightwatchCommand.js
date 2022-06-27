module.exports = {
    'nightwatch command test' : function(browser) {
     var nightwatch = browser.page.landingpage();
  
      var button=('@apiRefernceButton').isEnabled;
  
      nightwatch
      .navigate()
      .pageObjectModelSearch()
  
      browser.end()
    }
  };