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
  
  var html = '<iframe src="//pastebin.com/embed_iframe/' + id + '" style="border:none;width:100%" ></iframe>'
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};
