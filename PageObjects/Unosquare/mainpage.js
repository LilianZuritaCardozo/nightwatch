function getData() {
  return require('../../dataExternal/unosquareForm'); // Using the correct path is important
  };


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
        selector: "li a[href='https://www.unosquare.com/About']"
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

      blogHeader: {
        selector: "//*[@id='wrapper']/header/div[2]/h1",
        locateStrategy: 'xpath'
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

      blogRecentPostsElement: {
        selector: "label.tab-text[for='tab1']"
      },

      blogPopularPostsElement: {
        selector: "label.tab-text[for='tab2']"
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

    leadershipTeamSection: {
      selector: "div[class='leads']"
  },
    },

    commands: [{
        contactUnosquare: function() {
          this.pause(1000);
          const form = getData(); // this is the important part
          return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .setValue('@companyTextField', form.company)
            .setValue('@phoneTextField', form.phone)
            .setValue('@messageTextArea', form.message)
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
        
        blogHeaderExistsValidation: function() {
          this.pause(1000);
          return this.waitForElementVisible('@blogButton', 1000)
            .click('@blogButton')
            .assert.textEquals('@blogHeader', 'DIGITAL TRANSFORMATION BLOG')
        },  

        blogQATopicSearch: function() {
        
            const form = getData();
            return this.setValue('@blogSearchInput', form.searchQAtopic)
            .click('@blogSearchButton')   
            .assert.textContains('@blogResults', form.searchQAtopic )    
          },  

           
          blogDevelopmentTopicSearch: function() {

            const form = getData();
            return this.setValue('@blogSearchInput', form.searchDevelopmentTopic)
            .click('@blogSearchButton')   
            .assert.textContains('@blogResults', form.searchDevelopmentTopic )  
          },  

          blogJAVATopicSearch: function() {
        
            const form = getData();
            return this.setValue('@blogSearchInput', form.searchJAVAtopic)
            .click('@blogSearchButton')   
            .assert.textContains('@blogResults', form.searchJAVAtopic )    
          },  

          blogTestingTopicSearch: function() {
        
            const form = getData();
            return this.setValue('@blogSearchInput', form.searchTestingTopic)
            .click('@blogSearchButton')   
            .assert.textContains('@blogResults', form.searchTestingTopic )  
              
          }, 

          MarioDiVeceLeaderPresent: function() {
            return this.assert.textContains('@leadershipTeamSection', 'MARIO DI VECE', '"Mario Di Vece" name is present' )      
          }, 

          GiancarloDiVeceLeaderPresent: function() {
            return this.assert.textContains('@leadershipTeamSection', 'GIANCARLO DI VECE', '"Giancarlo Di Vece" name is present' )      
          },

          EduardoAriasLeaderPresent: function() {
            return this.assert.textContains('@leadershipTeamSection', 'EDUARDO ARIAS', '"Eduardo Arias" name is present' )      
          },

          IgnacioMirandaLeaderPresent: function() {
            return this.assert.textContains('@leadershipTeamSection', 'IGNACIO MIRANDA', '"Ignacio Miranda" name is present' )      
          },

          DiegoHuertaLeaderPresent: function() {
            return this.assert.textContains('@leadershipTeamSection', 'DIEGO HUERTA', '"Diego Huerta" name is present' )      
          },
      }],
};