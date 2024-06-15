let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function myexcuse() {
   let quien = who[Math.floor(Math.random() * 4)]
   let accion = action[Math.floor(Math.random() * 4)]
   let que = what[Math.floor(Math.random() * 3)]
   let cuando =when[Math.floor(Math.random() * 5)]

 let excusa = (quien +" "+ accion +" "+ que +" "+ cuando)
    return excusa;
}

console.log(myexcuse()) 