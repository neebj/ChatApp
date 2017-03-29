(function (chatController) {
    
    
    chatController.init = function (app) {
        app.get("/ChatController", function (req, res) {
            res.render("chatGroup", { Title: "This is Chat controller" });
        });
    }
}
)(module.exports);