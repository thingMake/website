function login(){
    return new Promise((resolve, reject) => {
      var w = innerWidth / 2
      var h = innerHeight / 2
      var x = w - (w/2)
      var y = h - (h/2)
      var w = open("https://www.thingmaker.repl.co/website/login.html", "_blank","resizable=no,width="+w+",height="+h+",top="+y+",left="+x)
      function onmsg(event){
        if (event.source !== w) return;
        if (event.data.startsWith("logged:")){
          w.close()
          window.removeEventListener("message", onmsg);
          resolve(event.data.replace("logged:",''))
        }else if(event.data === "canceled"){
          w.close()
          window.removeEventListener("message", onmsg);
          reject()
        }
      }
      window.addEventListener("message", onmsg);
    })
}

//use loggedIn(callback) to see if logged in
//if it detects you aren't logged in
//it will open a log in window

var username = ""
async function loggedIn(notLogged){
    var logged = false;
    await fetch("https://server.thingmaker.repl.co/getuser", {credentials:"include"}).then(r => r.text()).then(r => logged=r)
    if(logged){
      username = logged
      return logged
    }else{
      if(confirm("Your not logged in. Head over to www.thingmaker.repl.co/login.html to login.")){
        var logged
        await login().then(r => logged = r).catch(r => logged = r)
        if(logged){
          username = logged
          return logged
        }
      }
      notLogged && notLogged()
      return false
    }
}