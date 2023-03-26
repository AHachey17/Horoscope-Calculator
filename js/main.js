//When user submit, take their month and date

  //wait for them to cick submitt
      //add event listener botton
  //store the date
      //create variable day 
      // create variable month
const btn = document.querySelector("button")
const dayInput = document.querySelector ('#day')
const monthInput = document.querySelector ('#month')
const message = document.querySelector("h2")



//results check what horoscope is range is
  // conditional


/*Horoscopes
Aries (March 3/21 – 4/ 19)
Taurus (4/20 – 5/20)
Gemini (5/21 – 6/20)
Cancer (6/21 – 7/22)
Leo (7/23 – 8/22)
Virgo (8/23 – 9/22)
Libra (9/23 – 10/22)
Scorpio (10/23 – 11/21)
Sagittarius (11/22 – 12/21)
Capricorn (12/22 – 1/19)
Aquarius (1/20 – 2/18)
Pisces (2/19 – 3/20)*/
function horoscope(){
  const month = Number(monthInput.value)
  const day = Number(dayInput.value)
  if(month === 01 && day >= 20 || month === 02 && day <= 18){
    message.innerText="You are a Aquarius"
  }else if(month === 02 && day >= 19 || month === 03 && day <= 20){
    message.innerText="You are a Pisces" 
  
  }else if(month === 03 && day >= 21 || month === 04 && day <= 19){
    message.innerText="You are a Aries"
  }else if(month === 04 && day >= 20 || month === 05 && day <= 20){
    message.innerText="You are a Taurus" 
  }else if(month === 05 && day >= 21 || month === 06 && day <= 20){
    message.innerText="You are a Gemini"
  }else if(month === 06 && day >= 21 || month === 07 && day <= 22){
    message.innerText="You are a Cancer"
  }else if(month === 07 && day >= 23 || month === 08 && day <= 22){
    message.innerText="You are a Leo"   
  }else if(month === 08 && day >= 23 || month === 09 && day <= 22){
    message.innerText="You are a Virgo"
  }else if(month === 09 && day >= 23 || month === 10 && day <= 22){
    message.innerText="You are a Libra"
  }else if(month === 10 && day >= 23 || month === 11 && day <= 21){
    message.innerText="You are a Scorpio"
  }else if(month === 11 && day >= 22 || month === 12 && day <= 21){
    message.innerText="You are a Sagitaruis"
  }else if(month === 12 && day >= 22 || month === 1 && day <= 19){
    message.innerText="You are a Capricorn"
  }else{
    message.innerText="Re-enter a Birthday"
  }



}


//tell user horoscope by printing
btn.addEventListener('click', horoscope)