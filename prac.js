console.log('---------------------------------------------------');
let g=document.querySelector('ul');
let p=g.children[0];
console.log(p);

let h=document.querySelector('li:nth-child(2)');
let r=h.style.color="brown";
console.log(h);

let j=document.querySelector('ul.hello');
let s=j.lastElementChild.style.color="yellow";
let t=j.lastElementChild;
console.log(t);

let k=document.querySelector('#thisone');
k.style.color="red";