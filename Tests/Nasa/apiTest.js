module.exports = {
    before: function (browser) {
    },

    'API Testing - GET Positive': function (browser) {
     var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.verify.equal(response.body.copyright, 'Wang Jin')
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
    })
    },

    'API Testing - GET Positive Practice 1': function (browser) {
        var apiUrl = 'https://ssd-api.jpl.nasa.gov/cad.api?des=433&date-min=1900-01-01&date-max=2100-01-01&dist-max=0.2'
         browser.apiGet(apiUrl, function (response) {
             //var data = JSON.parse(response.body)
             console.log(response.body)
             browser.assert.equal(response.statusCode, '200')
             browser.assert.equal(response.body.count, '5')   
         })
     },
 
     'API Testing - GET Positive Practice 2': function (browser) {
         var apiUrl = 'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY'
         browser.apiGet(apiUrl, function (response) {
             //var data = JSON.parse(response.body)
             console.log(response.body)
             browser.assert.equal(response.statusCode, '200')
             browser.assert.equal(response.body.id, 'LANDSAT/LC08/C01/T1_SR/LC08_127059_20140204')
             browser.assert.equal(response.body.service_version, 'v5000')
         })
     }, 

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'My Name')
        })
    },



'API Testing - POST': function (browser) {
    var apiUrl = 'https://reqres.in/api/login'
    var postData = {'email':'eve.holt@reqres.in', 'password':'cityslicka'}
    browser.apiPost(apiUrl, postData, null, null, function (response) {

         browser.assert.equal(response.statusCode, '200')
         browser.assert.equal(response.body.token, 'QpwL5tke4Pnpja7X4')
    })
}
};