module.exports = {
    'unosquare command test' : function(browser) {
      var unosquare = browser.page.mainpage();
      
      unosquare
      .navigate()
      .blogHeaderExistsValidation()
      .assert.urlEquals('https://blog.unosquare.com/')
      .assert.visible('@blogRecentPostsElement')
      .assert.visible('@blogPopularPostsElement')
      .blogQATopicSearch()  
      .blogDevelopmentTopicSearch()
      .blogJAVATopicSearch()
      .blogTestingTopicSearch()
      .click('@aboutMenu')
      .MarioDiVeceLeaderPresent()
      .GiancarloDiVeceLeaderPresent()
      .EduardoAriasLeaderPresent()
      .IgnacioMirandaLeaderPresent()
      .DiegoHuertaLeaderPresent()
      browser.end();
   }
  };