(function (pythonExecutorController) {
    
    
    pythonExecutorController.init = function (app) {
      
        app.get("/api/pythonexecutor/:inputMessage", function (req, res) {
        var msgAfterNLP='';
        inputMessage =req.params.inputMessage;
        var PythonShell = require('python-shell');
        var pyshell = new PythonShell('./controllers/compute_input.py');
        pyshell.send(JSON.stringify(inputMessage));
        pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
        msgAfterNLP=message;
         
        });

        pyshell.end(function (err) {
            if (err){
                throw err;
            };
              res.render("index", { Title: msgAfterNLP });
        });


            
        });
    }
}
)(module.exports);