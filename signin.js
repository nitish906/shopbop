var userdata = JSON.parse(localStorage.getItem("userSaved"))

console.log(userdata)

document.querySelector("#form").addEventListener("submit",storeIt )
function storeIt(){
    event.preventDefault()

    var email = document.querySelector("#email").value
    var password = document.querySelector("#password").value
if(email=="" || password==""){
    alert("Please email and password")
    return
}
  for(var i = 0; i < userdata.length; i++){
      if(email == userdata[i].emai && password == userdata[i].password){
          window.location.href= "#"
          return
      }
  }
  alert("Invalid email or password")
}
