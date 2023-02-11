
document.getElementById('btn-1').addEventListener('click', function(){
  
    let input =document.getElementById('email');
    let email = input.value;
     console.log(email);

    let pass =document.getElementById('pass');
    let finalPass = pass.value;
    // console.log(finalPass);

    if(email === 'zarif@gmail.com' && finalPass === 'secret'){
        window.location.href = "./bank.html";
    }
    else{
        alert("Haha Gotcha");
    }

})