
module.exports = {
    url: 'https://www.unosquare.com',
    elements: {
      contactusMenu: {
        selector: "li a[href = '/ContactUs']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },
      aboutMenu: {
        selector: "li a[href = '/About']"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },

      blogButton: {
        selector: "li a[href='https://blog.unosquare.com']"
      },

      blogLogo: {
        selector: "nav a[class='navbar-brand']"
      },

      blogSearchInput: {
        selector: "input[id='search-bar']"
      },


      blogSearchButton: {
        selector: "button[class='search-submit link-blue']"
      },

      blogResults: {
        selector: "div[class='col-lg-9']"
      },


      aboutStoreButton: {
        selector: "/html/body/footer/div[1]/div/div[4]/div[2]/a",
        locateStrategy: 'xpath'
      },
      

      contactField: {
        selector: "div input[id='name-2a32df81-981f-4329-b943-9f2e76efe5f0']"
      },

      emailField: {
        selector: "div input[id='email-2a32df81-981f-4329-b943-9f2e76efe5f0']"
      },

      submitButton: {
        selector: "div input[class='hs-button primary large']"
      },

      thankyouMessage: {
        selector: "div div[class='hero-title title-black']"
      },

      companyTextField: {
        selector: "input.hs-input[name = 'company']"
      },
      phoneTextField: {
        selector: "input.hs-input[name = 'phone']"
      },
      messageTextArea: {
        selector: "textarea.hs-input[name = 'message']"
      },
      submitBtn: {
        selector: "input[value = 'Submit']"
      },
      nameWarningMsg: {
        selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
        locateStrategy: 'xpath'
    },
    },

    commands: [{
        contactUnosquare: function() {
          this.pause(1000);
          return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .setValue('@companyTextField', 'QA CoE course')
            .setValue('@phoneTextField', '3300000000')
            .setValue('@messageTextArea', 'This is a Random Text used in a Course')
            .click('@submitBtn')
            .waitForElementVisible('@nameWarningMsg')
        },

        blogPhoneArticleSearch: function() {
          this.pause(1000);
          return this.waitForElementVisible('@blogButton', 1000)
            .click('@blogButton')
            .setValue('@blogSearchInput', 'phone')
            .click('@blogSearchButton')
            .assert.containsText('@blogResults', 'phone')
        },


      },
    ]
};

  