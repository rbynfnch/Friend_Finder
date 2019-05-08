//include 2 routes

// ===============================================================================
// DEPENDENCIES
var path = require("path");

// ROUTING

module.exports = function(app) {
  // HTML GET Requests

  //GET route to '/survey' will display the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //default route, leads to 'home.html'
  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
