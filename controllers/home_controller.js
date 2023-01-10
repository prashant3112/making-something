const Post = require('../models/post'); 

module.exports.home= function(req,res){
    //return res.end('<h1>Express is up for codeial!</h1>')
    /*return res.render('home',{
        title: "Home"
    });*/
    Post.find({}, function(err, posts){
        return res.render('home',{
            title: "Codeial | Home",
            posts: posts
        });
    });

    /*Post.find({}).populate('user').populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    }).exec(function(err, posts){
        return res.render('home',{
            title: "Codeial | Home",
            posts: posts
        });
    })*/

}