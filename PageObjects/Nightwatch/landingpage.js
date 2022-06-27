const { link } = require("fs");

module.exports = {
    url: 'https://nightwatchjs.org/',
    elements: {
      apiRefernceButton: {
        selector: "//*[@id='navigation']/ul/li[3]",
        locateStrategy: 'xpath'
      },
      apiReferenceEditButton: {
        selector: "//*[@id='nightwatch-apis']/a",
        locateStrategy: 'xpath'
      },
      aboutMenu: {
        selector: "li a[href = '/About']"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },
      viewOnGithubButton: {
        selector: "//*[@id='index-container-inner']/div[2]/div/div/div/a[2]",
        locateStrategy: 'xpath'
      },

      searchButton: {
        selector: "li div[id = 'docsearch']",
        
      
      },

      inputSearch: {
        selector: "div input[id='docsearch-input']"
      },

      firstSearchResult: {
        selector: "li.DocSearch-Hit[id='docsearch-item-0']"
      },

      pageHeader: {
        selector: "div div[class='page-header']"
      },

    },

    commands: [{
      pageObjectModelSearch: function() {
        this.pause(1000);
        return this.waitForElementVisible('@apiRefernceButton')
        .click('@apiRefernceButton')
        .click('@searchButton')
        .setValue('@inputSearch', 'Page Object Model')
        .click('@firstSearchResult')
        .assert.containsText('@pageHeader', 'Page Object Model' )
      },
  }]
};