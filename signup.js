document.querySelector("#form").addEventListener("submit",storeIt )

function storeIt(){
  event.preventDefault()
if(form.name.value == "" || form.email.value == "" || form.password.value == "" || form.repassword.value == ""){
  alert("Please enter all required fields")
  return
}
  if(form.password.value == form.repassword.value){
 
  console.log(name)
  var dataSave = JSON.parse(localStorage.getItem("userSaved")) || []
  var userDataArr = {
    name:form.name.value,
    emai:form.email.value,
    password:form.password.value,
  }
  for(var i = 0; i < dataSave.length; i++){
    if(dataSave[i].emai == form.email.value){
      alert("email already exists")
      return
    }
  }
dataSave.push(userDataArr)

localStorage.setItem("userSaved",JSON.stringify(dataSave))
window.location.href= "signin.html" //automatically goes to sign in page
alert("Account successfully created.")
}
   else{
    alert("Passwords do not matcht!!")
  }
  
}
