//page alert
//window.onload=alert('Karibu shishi food tukuhudumie, unaweza kuja hotelini kwetu au kutuma oder ya chakula na ikakufikia ulipo. \n kauli mbiu yetu  kula kujigaragaza, kunywa kujimiminia');

 //insert values in cosole, alert, and paragraph result from biriani buttons

  

 let transportCost1= Number('');
 let transportCost2= Number('');
 let transportCost3= Number('');
 let transportCost4= Number('');
 let transportCost5= Number('');
 let transportCost6= Number('');
 let transportCost7= Number('');
 let transportCost8= Number('');
let result= Number('');
let jumlaKuu= Number('');
let total1= Number('');
let total2= Number('');
let total3= Number('');
let total4= Number('');
let total5= Number('');
let total6= Number('');
let total7= Number('');
let total8= Number('');


function biriani2() {
  total1=idadiSahani1*600;
  transportCost1=idadiSahani1* 130;
  if (idadiSahani1==0) {
    result= idadiSahani1;
  }
  document.querySelector('.ona-chaguzi1')
  .innerHTML=`1) Car name:  <button class="car-name">TOYOTA LAND CRUISER.</button>  Number of cars Requested: <button class="car-number">[${idadiSahani1}].</button>  Car Price: <button  class="car-price">[$${total1}].</button> Transport Cost: <button class="trans-cost">[$${transportCost1}].</button>`;
 //alert(`Idadi ya sahani za Biriani: ${idadiSahani1}`);
}
  let idadiSahani1=0;
  function biriani() {
    console.log(`Idadi ya sahani za Biriani: ${idadiSahani1}`);
  };
   
      

   //insert values in cosole, alert, and paragraph result from chips kuku buttons
  function chipsKuku2() {
    total2=idadiSahani2*400
    transportCost2=idadiSahani2* 120;
    if (idadiSahani2==0) {
      result= idadiSahani2;
    }
    document.querySelector('.ona-chaguzi2')
    .innerHTML=`2) Car name: <button class="car-name" >TOYOTA estima.</button> Number of cars Requested: <button class="car-number">[${idadiSahani2}].</button>  Car Price: <button class="car-price">[$${total2}].</button> Transport Cost: <button class="trans-cost">[$${transportCost2}].</button>`;
    //alert(`Idadi ya sahani za Chips Kuku: ${idadiSahani2}`);
  }
  let idadiSahani2=0;
  function chipsKuku() {
    console.log(`Idadi ya sahani za Chips Kuku: ${idadiSahani2}`);
  };
  function jumlaKuu2() {
    /*if (total1==idadiSahani1*600 + idadiSahani1*130  || total2 ==idadiSahani2*400 + idadiSahani2*120 || total3==idadiSahani3*500 - idadiSahani3*90|| total4==idadiSahani4*640 + idadiSahani4*115 || total5==idadiSahani5*600 + idadiSahani5*117 || total6==idadiSahani6*400 + idadiSahani6*85 || total7==idadiSahani7*500  + idadiSahani7*120|| total8==idadiSahani8*600 + idadiSahani8*130 || 
      total1==idadiSahani1*600 + idadiSahani1*130 + total2==idadiSahani2*400 + idadiSahani2*120 + total3==idadiSahani3*500 + idadiSahani3*90+ total4==idadiSahani4*640 + idadiSahani4*115 + total5==idadiSahani5*600 + idadiSahani5*117+ total6==idadiSahani6*400 + idadiSahani6*85 + total7==idadiSahani7*500 + idadiSahani7*120 + total8==idadiSahani8*600 + idadiSahani8*130 ){
      jumlaKuu=total1
      jumlaKuu=total2
      jumlaKuu=total3
      jumlaKuu=total4
      jumlaKuu=total5
      jumlaKuu=total6
      jumlaKuu=total7
      jumlaKuu=total8
    } */
    document.querySelector(`.ona-chaguzi9`)
    .innerHTML=`_______________________TOTAL COST REQUIRED TO BE PAID BELOW: $${Number(total1+ total2+ total3 + total4 + total5 + total6 + total7 + total8|| total1 || total2 || total3 || total4 || total5 || total6 || total7 || total8) + Number(transportCost1 + transportCost2 + transportCost3 + transportCost4 + transportCost5 + transportCost6 + transportCost7 + transportCost8 || transportCost1 || transportCost2 || transportCost3 || transportCost4 || transportCost5 || transportCost6 || transportCost7 || transportCost8 )}`;
  }
   
   
     
  //insert values in cosole, alert, and paragraph result from chips mishikaki buttons
  function chipsMishikaki2() {
    total3=idadiSahani3*500; 
    transportCost3=idadiSahani3* 90;
    if (idadiSahani3==0) {
      result= idadiSahani3;
    }
    document.querySelector('.ona-chaguzi3')
    .innerHTML=`3) Car name: <button class="car-name">NISSAN 2012.</button> Number of cars Requested:<button class="car-number">[${idadiSahani3}].</button>  Car Price: <button class="car-price">[$${total3}].</button> Transport Cost: <button class="trans-cost">[$${transportCost3}].</button> `;
    //alert(`Idadi ya sahani za Chips Mishikaki: ${idadiSahani3}`);
  }
  let idadiSahani3=0;
  function chipsMishikaki() {
    console.log(`Idadi ya sahani za Chips Miishikaki: ${idadiSahani3}`);
  };


   //insert values in cosole, alert, and paragraph result from kuku ndizi rosti buttons
  function kukuNdizi2() {
    total4=idadiSahani4*640;
    transportCost4=idadiSahani4* 115;
    if (idadiSahani4==0) {
      result= idadiSahani4;
    }
    document.querySelector('.ona-chaguzi4')
    .innerHTML=`4) Car name: <button class="car-name">NISSAN X Trial.</button> Number of cars Requested: <button class="car-number">[${idadiSahani4}].</button>   Car Price: <button class="car-price">[$${total4}].</button> Transport Cost: <button class="trans-cost">[$${transportCost4}].</button> `;
  }
  let idadiSahani4=0;
  function kukuNdizi() {
    console.log(`Idadi ya sahani za Kuku Ndizi Rosti: ${idadiSahani4}`);
  };
   

   //insert values in cosole, alert, and paragraph result from pilau rosti buttons
   
  function pilauRosti2() {
    total5=idadiSahani5*600;
    transportCost5=idadiSahani5* 117;
    if (idadiSahani5==0) {
      result= idadiSahani5;
    }
    document.querySelector('.ona-chaguzi5')
    .innerHTML=`5) Car name:<button class="car-name"> NISSAN Dayz.</button> Number of cars Requested: <button class="car-number">[${idadiSahani5}].</button>  Car Price: <button class="car-price">[$${total5}].</button>  Transport Cost:  <button class="trans-cost">[$${transportCost5}].</button>`;
    //alert(`Idadi ya sahani za Pilau Rosti: ${idadiSahani5}`);
  }
  let idadiSahani5=0;
  function pilauRosti() {
    console.log(`Idadi ya sahani za Pilau Rosti: ${idadiSahani5}`);
  };


//insert values in cosole, alert, and paragraph result from ugali nyama buttons
function ugaliNyama2() {
  total6=idadiSahani6*400;
  transportCost6=idadiSahani6* 85;
  if (idadiSahani6==0) {
    result= idadiSahani6;
  }
  document.querySelector('.ona-chaguzi6')
    .innerHTML=`6) Car name: <button class="car-name">NISSAN Tiida.</button> Number of cars Requested: <button class="car-number">[${idadiSahani6}].</button>  Car Price: <button class="car-price">[$${total6}].</button>  Transport Cost: <button class="trans-cost">[$${transportCost6}].</button> `;
  //alert(`Idadi ya sahani za Ugali Nyama: ${idadiSahani6}`);
}
  let idadiSahani6=0;
  function ugaliNyama() {
    console.log(`Idadi ya sahani za Ugali Nyama: ${idadiSahani6}`);
  };
    

   //insert values in cosole, alert, and paragraph result from wali nyama buttons
  function waliNyama2() {
    total7=idadiSahani7*500;
    transportCost7=idadiSahani7* 120;
    if (idadiSahani7==0) {
      result= idadiSahani7;
    }
    document.querySelector('.ona-chaguzi7')
    .innerHTML=`7) Car name: <button class="car-name">SUZUKI Alto.</button> Number of cars Requested: <button class="car-number">[${idadiSahani7}].</button>  Car Price: <button class="car-price">[$${total7}].</button>  Transport Cost: <button class="trans-cost">[$${transportCost7}].</button> `;
    //alert(`Idadi ya sahani za Wali Nyama: ${idadiSahani7}`);
  }
  let idadiSahani7=0;
  function waliNyama() {
    console.log(`Idadi ya Sahani za Wali Nyama: ${idadiSahani7}`);
  };
    

  //insert values in cosole, alert, and paragraph result from wali samaki buttons
  function waliSamaki2() {
    total8=idadiSahani8*600;
    transportCost8=idadiSahani8* 130;
    if (idadiSahani8==0) {
      result= idadiSahani8;
    }
    document.querySelector('.ona-chaguzi8')
    .innerHTML=`8) Car name: <button class="car-name">TOYOTA Vista Sedan.</button>   Number of cars Requested: <button class="car-number">[${idadiSahani8}].</button>  Car Price: <button class="car-price">[$${total8}].</button>  Transport Cost: <button class="trans-cost">[$${transportCost8}].</button> `;
    //alert(`Idadi ya sahani za Wali Samaki: ${idadiSahani8}`);
  }
  let idadiSahani8=0;
  function waliSamaki() {
    console.log(`Idadi ya sahani za Wali Samaki: ${idadiSahani8}`);
  };
 
 

  function auth() {
    let email=document.getElementById('email').value;
    let password =document.getElementById('password').value;

    if (email== 'minyali@gmail.com' && password== '0747249565') {
       
      window.location.assign('car-oder.html');
     alert('congratulation! Login successfully');
    }
    else{
      alert ('invalid information');
      return; 
    }
  }




function menu() {
  document.querySelector('.menu').innerHTML=`<div class="topnav">
  <a class="active" href="index2.html">Nyumbani</a>
  <a href="account-create.html">Tengeneza akaundi</a>
  <a href="login.html">Ingia kwenye Akaundi</a>
  <a href=”https://sp.beforward.jp/?utm_source=adwords&utm_medium=cpc&utm_term=SN2019012807824&utm_content=general&utm_campaign=tanzania_africa_sn_nonbrand&gclid=CjwKCAjwpayjBhAnEiwA-7ena3E7qncmasM5Lvj0Inmvjrks9-nLC67M74453AZCKW3BV7gFuMzOkxoC3JUQAvD_BwE”
  >Tufollow Instagram</a>
  <a href="about-us.html">Kuhusu sisi</a>
</div>`  
}



  

  let list = document.querySelector(`.slider .list`);
  let items = document.querySelectorAll(`.slider .list .item`);
  let dots = document.querySelectorAll(`.slider .dots li`);
  let prev = document.getElementById(`prev`);
  let next = document.getElementById(`next`);
  
  let active = 0;
  let lengthItems = items.length - 1;
  
  next.onclick =function(){
      if (active + 1 > lengthItems) {
          active = 0;
      }  else{
          active = active + 1
      }
      reloadSlider();
  }
  
  prev.onclick = function(){
      if (active - 1 < 0) {
          active = lengthItems;
      } else{
          active = active - 1;
      }
      reloadSlider();
  }
  let refreshSlider = setInterval(()=> {next.click()}, 5000);
  
  function reloadSlider() {
      let checkLeft = items[active].offsetLeft;
      list.style.left = -checkLeft + 'px';
  
      let lastActiveDot = document.querySelector(`.slider .dots li.active`);
      lastActiveDot.classList.remove(`active`);
      dots[active].classList.add(`active`);
      clearInterval(refreshSlider);
      let refreshSlider = setInterval(()=> {next.click()}, 3000);
  }
  
  dots.forEach((li, key) => {
      li.addEventListener(`click`, function(){
          active = key;
          reloadSlider();
      })
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  














