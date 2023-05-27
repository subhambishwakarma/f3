let nameValue= document.getElementById("fullname");
let emailValue= document.getElementById("email");
let passValue= document.getElementById("password");
let profile= document.getElementById("profile");
let signup= document.getElementById("signup");
let logout= document.getElementById("logout");
let msg= document.getElementById("p");

let initialfname=nameValue.innerText.trim();
let initialEmail=emailValue.innerText.trim();
let initiaPass=passValue.innerText.trim();


const signedUpUser = JSON.parse(localStorage.getItem("currentUser"));

    nameValue.innerText += `${signedUpUser.fullName}`;
    emailValue.innerText += `${signedUpUser.email}`;
    passValue.innerText += `${signedUpUser.pass}`;

    logout.addEventListener("click", ()=>{
        localStorage.removeItem("currentUser");
        nameValue.innerText=initialfname;
        emailValue.innerText=initialEmail;
        passValue.innerText=initiaPass;
        alert("confirmed to logout");
        msg.innerText="Please signUp first, to create a new account!";
        msg.style.color="blue";
    });

    profile.addEventListener("click", (e)=>{
        const user= JSON.parse(localStorage.getItem("currentUser"));
        if(!user || !user.tokens){
            e.preventDefault();
            window.location.href="./index.html";
            alert(" Token is not found, please SignUp at first")
        }
        else if(user && user.tokens){
            e.preventDefault();
            alert(`Hey ${user.fullName}  You are already in profile page`);
            window.location.href="./profile.html"
        }
    });

    signup.addEventListener("click", (e)=>{
        const state= JSON.parse(localStorage.getItem("currentUser"));
        console.log(state);

        if(state && state.tokens){
            e.preventDefault();
            alert(` You already have Token ${state.tokens}, please logout first`);
            window.location.href="./profile.html";
           
        }
        else if(!state && state.tokens){
            e.preventDefault();
            window.location.href="./index.html"
        }

    });
