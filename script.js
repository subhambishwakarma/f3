let nameInput= document.getElementById("name");
let emailInput= document.getElementById("email");
let passInput= document.getElementById("password");
let cpassInput= document.getElementById("confirm-password");
let btn= document.getElementById("button");
let success= document.getElementById("success");
let error= document.getElementById("error");
let profile= document.getElementById("profile");
let signup= document.getElementById("signup");


console.log("test");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const fullName=nameInput.value;
    const email=emailInput.value;
    const pass=passInput.value;
    const cpass=cpassInput.value;
    console.log(fullName, email, pass, cpass);
    
    if(!fullName || !email || !pass ){
        error.innerText="All input fields are required!";
        error.style.color="red";
        return;
    }
    
    if(pass != cpass){
        alert("password not matched!");
        return;
    }

    let tokens = accessToken();
    console.log(tokens);

    let newUser ={
        fullName,
        email,
        pass,
        cpass,
        tokens,
    };

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    success.innerText="signUp successfully!";
    success.style.color="green";
    error.innerText="";

    setTimeout(() => {
        window.location.href="./profile.html";
    }, 1000);

})

function accessToken(){
    let token='';
    let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    for(let i=0; i<16; i++){
        token+= characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return token;
}

profile.addEventListener("click", (e)=>{
    
    if(!localStorage.getItem("currentUser")){
        alert("please signUp at first");
        window.Location.href="./index.html";
    }
    e.preventDefault();
    
});

signup.addEventListener("click", ()=>{
    if(localStorage.getItem("currentUser")){
        let name= JSON.parse(localStorage.getItem("currentUser")).fullName;
        alert(`Welcome Back ${name}, You alresdy logged in. Please clickon "OK" to see your profile`);
        window.Location.href="./pfofile.html";
    }
});



