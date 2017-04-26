(function (starterController) {
    var chatController = require("./chatController.js");
    var chatGroupController = require("./chatgroupController.js");
    var pythonExecutorController = require("./pythonExecutorController.js");

    starterController.init=function(app)
    {
        pythonExecutorController.init(app);
        chatController.init(app);
        chatGroupController.init(app);
       
    }
}
)(module.exports);