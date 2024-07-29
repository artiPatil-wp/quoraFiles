// const express=require("express");
// const app=express();
// const port=8080;
// const path=require("path");

// app.use(express.urlencoded({extended:true}));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static( path.join(__dirname, "/public")));





// let posts=[{
//     id:"1a",
//     username:"Arti",
//     content:"I Love Coding"

// },
// {
//     id:"2b",
//     username:"Prashant",
//     content:"I Love Arti"

// },
// {
//     id:"3c",
//     username:"Vishal",
//     content:"I Love No one"

// }];

// app.listen(port,()=>{
//     console.log("port is listening")
// });

// app.get("/posts", (req,res)=>{
//     res.render("index.ejs", {posts});
// });

// app.get("/post/new", (req,res)=>{
//     res.render("new.ejs");
    
// });

// app.post("/posts", (req, res)=>{
//     let {username, content}=req.body;
//     posts.push({username, content});
//     res.redirect("/posts");
// });

// app.get("/posts/:id", (req, res)=>{
//     let {id}=req.params;
//     console.log(`the id is ${id}`);
//     let post = posts.find((p) => id === p.id);
//     console.log(post);
//     // res.render("viewpost.ejs", {post});
// });



const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));





let posts = [{
    id: "1a",
    username: "Arti",
    content: "I Love Coding"

},
{
    id: "2b",
    username: "keya",
    content: "Hello Everyone"

},
{
    id: "3c",
    username: "shr",
    content: "hiiii!!!"

}];



app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/post/new", (req, res) => {
    res.render("new.ejs");

});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    //res.render("viewpost.ejs", {post});
});


app.listen(port, () => {
    console.log("port is listening")
});