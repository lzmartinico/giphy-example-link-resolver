var sync = require('synchronize');
var request = require('request');

// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  // Pastebin urls are in the format:
  // http://pastebin.com/<alphanumeric id>
  var matches = url.match(/([a-zA-Z0-9]+)$/);
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }

  var id = matches[1];
 
  var response;

  try {
    response = sync.await(request({
            url: 'http://pastebin.com/' + id,
            timeout: 15 * 1000
        }, sync.defer()));
    } catch (e) {
        res.status(500).send('Error');
        return;
    }
    
    var header = response.body;
    var first = header.search("<title>")
    var second = header.search("</title>")
    var title = "Check out this pastebin file";
    if (first < second) {
      title = header.substr(first+7,second-(first+7));
    }
  var html = '<iframe src="//pastebin.com/embed_iframe/' + id + '" style="border:none;width:100%" ></iframe>'
  res.json({
    body: html,
    subject: title
  });
};
