// document.getElementById('btn-1').addEventListener('click',function(){
//     let input = document.getElementById("depo");
// let inputValue = input.value;
//     // console.log(inputValue);

//     let depoTotal = document.getElementById("depo-total");
//     // console.log(depoTotal.innerText);
//     depoTotal.innerText = inputValue;

//     input.value = '';
// })


document.getElementById("btn-1").addEventListener("click", function () {
  let input = document.getElementById("depo");
  let newInputValue = input.value;
  // console.log(inputValue);

  let depoTotal = document.getElementById("depo-total");
  // console.log(depoTotal.innerText);
  let previuousDepoTotal = Number(depoTotal.innerText);
  depoTotal.innerText = Number(previuousDepoTotal)+Number(newInputValue);
//   
let balance = document.getElementById("balance");
let previousBalance = Number(balance.innerText);
balance.innerText = Number(previousBalance)+ Number(newInputValue);

  input.value = "";
});

document.getElementById('btn-2').addEventListener('click',function(){



    let input = document.getElementById("with");
    let inputValue = input.value;
    // console.log(inputValue);
    
    // 

    let withdraw = document.getElementById("withdraw");
    let withdrawAmount = Number(withdraw.innerText);
    // withdraw.innerText = withdrawAmount + Number(inputValue);

    // 
    
  //  

    let balance = document.getElementById("balance");
    let balanceAmount = Number(balance.innerText);

    if(inputValue > balanceAmount){
      alert("Tor Baap er Bank e eto TAKA nai");
      return ;
    }

    else{
      balance.innerText = balanceAmount - Number(inputValue);
      withdraw.innerText = withdrawAmount + Number(inputValue);
    }

// 

    // 

    input.value= '';

})
