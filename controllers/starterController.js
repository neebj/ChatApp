(function (starterController) {
    var chatController = require("./chatController.js");
    var chatGroupController = require("./chatgroupController.js");

    starterController.init=function(app)
    {
        chatController.init(app);
        chatGroupController.init(app);
    }
}
)(module.exports);