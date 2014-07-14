var request = require('request');
var cheerio = require('cheerio');
var spreadsheet= require('edit-google-spreadsheet');
var ticker  = "LVS";
var yUrl    = "http://finance.yahoo.com/q/ks?s=" + ticker;
var financeDetails = new Array();
var keyStr         = new Array();
 
 
// Upload our data to G-Sheet
function sheetReady(err, spreadsheet) {
    if (err) throw err;
    spreadsheet.add({ 1: { 1: "Attribute" } });
    spreadsheet.add({ 1: { 2: "Value" } });
   
    spreadsheet.add({ 
      2: {
        1: keyStr
      }
    });
    spreadsheet.add({ 
      2: {
        2: financeDetails
      }
    });
 
    spreadsheet.send(function(err) {
      if(err) throw err;
      console.log("Updated " + financeDetails.length + " Items with data");
    });
  }
 
//
// The main call to fetch the data, parse it and work on it.  
//
request(yUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
 
    // the keys - We get them from a certain class attribute
    var td = $('.yfnc_tablehead1');
    $(td).each(function(j, val) {
      keyStr[j] = $(val).text();
    });
 
    // the values
    // TODO: normalize them 
    var tData = $('.yfnc_tabledata1');
    $(tData).each(function(j, val) {
      financeDetails[j] = $(val).text();
    });
 
    // Let's do something with the data we have
    for (var i=0; i < financeDetails.length; i++) {
      console.log (i + ") " + keyStr[i] + " " + financeDetails[i]);
    }
 
    // upload our data to Google sheet
    // yFinanceDataPerComapy
    Spreadsheet.create({
      debug: true,
      username: 'stalbeal10@gmail.com',
      password: '1037602238*',
      debug: true,
      spreadsheetName: 'lol',
      worksheetName: 'lol',
      callback: sheetReady
    });
  }
 
}); // -- end of request --