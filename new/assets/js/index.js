// const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text");


// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");
    
//     if(body.classList.contains("dark")){
//         modeText.innerText = "Dark mode";
//     }else{
//         modeText.innerText = "Light mode";
        
//     }
// });

/* Scripts personalizados */
/* Exemplo de scripts para interação */
const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const toggle = body.querySelector('.toggle');
const searchBtn = body.querySelector('.search-box');
const modeSwitch = body.querySelector('.toggle-switch');
const modeText = body.querySelector('.mode-text');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', () => {
  sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeText.innerText = 'Dark mode';
  } else {
    modeText.innerText = 'Light mode';
  }
});
