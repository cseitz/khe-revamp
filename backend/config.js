let path = require("path");

exports.port = 3050;

exports.dist = path.join(__dirname, "../frontend/dist");
exports.frontend = path.join(__dirname, "..", "frontend/dist");
exports.staff = path.join(__dirname, "staff/dist");

exports.staff_oauth = {
  "github": {
    redirect: "https://github.com/login/oauth/access_token?client_id={{clientID}}&client_secret=${clientSecret}&code={{requestToken}}",

  },

}


// Test Credentials that aren't uploaded to github for security reasons
if (require("fs").existsSync(__dirname + "/config.test.js"))
  require(__dirname + "/config.test.js")(module.exports);
