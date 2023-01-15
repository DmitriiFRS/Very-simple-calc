let a = '';
let b = '';
let sign = '';
let c = '';
let sign2 = '';
const btnAll = document.querySelector('.calc__btns');
const display = document.querySelector('.display');
const numsArr = [0,1,2,3,4,5,6,7,8,9,];
const signArr = ['+', '-', '*', '/',];
const reset = document.querySelector('.btn-reset');
function resetf () {
   reset.addEventListener('click', () => {
      a = '';
      b = '';
      c = '';
      sign = '';
      sign2 = '';
      display.innerHTML = 0;
   }) 
}
resetf();
function calc () {
   btnAll.addEventListener('click',(event) => {
      if (b === '' && sign === '' && sign2 === '' && numsArr.includes(Number(event.target.textContent))) {
         display.innerHTML = a += event.target.textContent;
      }
      else if (b !== '' && sign2 !== '' && signArr.includes(event.target.textContent)) {
         display.innerHTML = sign += event.target.textContent;
         switch (sign2) {
            case '+': a = Number(a) + Number(b); break
            case '-': a = Number(a) - Number(b); break
            case '*': a = Number(a) * Number(b); break
            case '/': a = Number(a) / Number(b); break
         }
         sign2 = '';
         b = '';
         display.innerHTML = a;
      }
      else if (signArr.includes(event.target.textContent)) {
         if (a === '' && b === '') {
            display.innerHTML = a += event.target.textContent;
         }
         else if (a !== '' && sign === '') {
            display.innerHTML = sign += event.target.textContent;
         }
      }
      else if (a !== '' && numsArr.includes(Number(event.target.textContent))) {
         display.innerHTML = b += event.target.textContent;
      }
      else if (event.target.textContent === '.') {
         if (a !== '' && b === '') {
            a+='.';
            display.innerHTML = a;
         }
         else if (b !== '' && a !== '') {
            b+= '.';
            display.innerHTML = b;
         }
      }
      if (b !== '' && sign !== '' && signArr.includes(event.target.textContent)) {
         display.innerHTML = sign2 += event.target.textContent;
         switch (sign) {
            case '+': a = Number(a) + Number(b); break
            case '-': a = Number(a) - Number(b); break
            case '*': a = Number(a) * Number(b); break
            case '/': a = Number(a) / Number(b); break
         }
         sign = '';
         b = '';
         display.innerHTML = a;
      }
      else if (event.target.textContent === '=') {
         switch (sign) {
            case '+': c += Number(a) + Number(b); break
            case '-': c += Number(a) - Number(b); break
            case '*': c += Number(a) * Number(b); break
            case '/': c += Number(a) / Number(b); break
         }
         switch (sign2) {
            case '+': c += Number(a) + Number(b); break
            case '-': c += Number(a) - Number(b); break
            case '*': c += Number(a) * Number(b); break
            case '/': c += Number(a) / Number(b); break
         }
         
         display.innerHTML = c;
      }
      console.log(a,b,+c,sign,sign2)
   })
}
calc();
