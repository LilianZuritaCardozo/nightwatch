//module.exports = {
    //'Demo test unosquare' : function(browser) {
     // browser
      //.windowMaximize()
      //.url('https://www.unosquare.com')
      //.waitForElementVisible('body')
     // .assert.visible("li a[href = '/About']", 'class', 'nav-link')
     // .assert.not.title('Unosquare')
     // .assert.urlContains('https')     
     // .assert.urlEquals('https://www.unosquare.com/') 
     // .end();
    //}
//};


module.exports = {
  'Demo test unosquare' : function(browser) {
    browser
    .windowMaximize()
    .url('https://www.unosquare.com')
    .waitForElementVisible('body')
    .assert.attributeContains("li a[href = '/OurDna']", 'class', 'nav-link')
    .assert.attributeEquals("li a[href = '/ContactUs']", 'class', 'nav-link link-blue')
    .waitForElementVisible(("li a[href = '/ContactUs']"))
    .assert.containsText("li a[href = '/ContactUs']", "CONTACT US")
    .assert.cssProperty("li a[href = '/ContactUs']", 'text-align', 'center')
    .assert.not.cssProperty("li a[href = '/ContactUs']", 'text-transform', 'lowercase')
    .assert.visible("li a[href = '/About']", 'class', 'nav-link')
    .assert.visible("div a[href ='/ContactUs']", 'class','cc-btn cc-dismiss')   
    .assert.title('Digital Transformation Services | Agile Staffing Solutions | Unosquare')
    .assert.urlContains('https')     
    .assert.urlEquals('https://www.unosquare.com/') 
    .url('https://www.umss.edu.bo/')
    .assert.value("input[type=submit]","Búsqueda") 
  }
};