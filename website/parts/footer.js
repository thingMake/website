var div = document.createElement("div")
div.innerHTML = `
<div>
  <b>Contact the website's maker</b>
  <ul>
    <li><a href="https://scratch.mit.edu/users/2-people">Scratch</a></li>
    <li><a href="https://replit.com/@thingMaker">Replit</a></li>
    <li><a href="https://github.com/thingMake">Github</a></li>
    <li><a href="https://www.thingmaker.repl.co/website/user.html?user=2-people">My website</a></li>
    <li><a disabled>Gmail</a></li>
  </ul>
</div>
<div>
  <b>Storage</b>
  <ul>
    <li><a href="https://server.thingmaker.repl.co">Server</a></li>
    <li><a href="https://cloudinary.com/">Cloudinary (for storing images and videos)</a></li>
  </ul>
</div>
`
div.classList.add("footer")
document.body.appendChild(div)

var style=document.createElement("style")
style.innerHTML = `
.footer {
  padding: 20px;
  display:flex;
  background: #ddd;
  justify-content:center;
  flex-direction:row;
}
body[theme=dark] .footer{
  background:#171717;
}
.footer > div{
  margin:0px 20px;
}
.footer > div > ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer > div > ul li{
  margin:10px 0px;
}
.footer > div{
  text-align:center;
}
`
document.head.appendChild(style)