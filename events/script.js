
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar

var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset > sticky) {
header.classList.add("sticky");
} else {
header.classList.remove("sticky");
}
}



/*
let cours='Ceci est une affection d une variable';

//affichage 
console.log(' ');
console.log(cours);

//reaffection
cours='Apprendre JS par pratique';
console.log(cours);

console.log(' ');

const faireQlqChose=(tache)=>{
console.log('test d\'une fonction dont la valeur est: '+tache);

}
faireQlqChose('BlaBlaBla');


const btn = document.querySelector('#btn');
const img = document.getElementById('cc')


btn.addEventListener('click',(e)=>{
    console.log(e);
  img.classList.toggle('show');

    }
)
let maDiv= document.getElementById('changEvent');
let mesEnfants= maDiv.childNodes;
for(let i=0; i< mesEnfants.length; i++){
    document.getElementById('ret').innerHTML=mesEnfants[i].nodeName + '<br />'
}



const tt=document.getElementById('firstName');

tt.addEventListener('change',()=>{

    document.querySelector('#lastName').value=tt.value;
    if(tt.value=='steve'){
        document.querySelector('#lastName').style.display='none';

    }
})


*/




