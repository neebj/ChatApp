(function (chatgroupController) {
    
    var dataaccess= require('../Data/dataaccess');
    chatgroupController.init = function (app) {
       
        app.post("/api/groups/:groupName", function (req, res) {
            // var groupId=req.params.groupId;
            // res.set("Content-Type","application/json");
            // res.send({"foo":"bar"});
             var groupName =req.params.groupName;
            dataaccess.addGroup(groupName,function(err)
            {
                if(err)
                {
                    res.status(400).send('Failed to insert group');
                }
                else
                {
                     res.set("Content-Type","application/json");
                    res.status(200).send(groupName + ' has been inserted');
                }
            });
        });

        app.get("/api/groups/:groupName",function(req,res)
        {
            var groupName =req.params.groupName;
            dataaccess.addGroup(groupName,function(err)
            {
                if(err)
                {
                     res.status(400).send('Failed to insert group');
                }
                else
                {
                     res.set("Content-Type","text/html");
                     dataaccess.getAllGroups(function(err,results)
                     {
                     
                             res.render("chatGroup",{Title:"Groups",error:err,groups:results});
                         
                     });
                      
                   // res.status(200).send(groupName + ' has been inserted');
                }
            });
        });
    }
}
)(module.exports);