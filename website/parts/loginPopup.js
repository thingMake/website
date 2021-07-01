function login(){
    return new Promise((resolve, reject) => {
      var w = open("https://www.thingmaker.repl.co/website/login.html", "_blank","width=100")
      window.addEventListener("message", (event) => {
        if (event.source !== w) return;
        if (event.data.startsWith("logged:")){
          resolve(event.data.replace("logged:",''))
          w.close()
        }else if(event.data === "canceled"){
          reject(false)
          w.close()
        }
      }, false);
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