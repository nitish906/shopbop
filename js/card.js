document.querySelector("#form").addEventListener("Verify" , myRule)

    function myRule(){
        event.preventDefault()

        var cname= document.getElementById("No").value;
        var cvv = document.getElementById("CVV").value;
        var date = document.getElementById("Date").value
        var name = document.getElementById("Name").value
        
        
        // var user = {
        //     cardnumber :  No ,
        //     cvv : CVV,
        //     name : Name,
        // };

        // var josn = JSON.stringify(user);
        // localStorage.setItem(user, josn)
        // console.log("user added")
        // // alert("Sign In Successful")
        // window.location.href ="index1.html"
       
    }