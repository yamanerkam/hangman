var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


const buttons = document.querySelector("#buttons")
const holds = document.querySelector("#hold")

const chosenWordd = document.querySelector(".nothing")

chosenWordd.style.visibility="hidden";   
const categNa = document.querySelector("#catagoryName")
let live10 = 10;
function buttonMaker(){
        for (let index = 0; index < alphabet.length; index++) {
                const element = document.createElement("button");
                element.classList.add("alphabet")
                element.textContent=alphabet[index];
                buttons.append(element)
        }
}
buttonMaker();

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
// 0 => football team - 1 => film - 2 => cities 
const category= getRandomInt(2);
const number2= getRandomInt(5);
const number3= getRandomInt(5);
categories = [
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];


 hints = [
        ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
        ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
    ];
function categoryChoose (){
        
        live10=10;
        lives.textContent=`You have ${live10} lives`;
        chosenWordd.textContent="";
        let A= getRandomInt(3);
        let B=-1;
        if(A==0){
                B=getRandomInt(7);
                categNa.textContent="The Chosen Category Is Premier League Football Teams"
        }else{
                B=getRandomInt(5);
                if(A==1){
                 categNa.textContent="The Chosen Category Is Films"
                }else if(A==2){
                categNa.textContent="The Chosen Category Is Cities"
                }
        }
        console.log(A);
        console.log(B);
        let chosenWord=categories[A][B]
        console.log(chosenWord);
        console.log(chosenWord.length)
        let xxx = chosenWord.length
        let hint =hints[A][B];
        


        chosenWordd.textContent=chosenWord;

        var child = holds.lastElementChild; 
        while (child) {
            holds.removeChild(child);
            child = holds.lastElementChild;
        }

       let doer= chosenWord
        for (let index = 0; index < xxx; index++) {
                const element1 = document.createElement("span");
                element1.classList.add("ges")
                element1.textContent="_"
                holds.append(element1)
                 if(doer[index].includes("-")){
                        element1.textContent="-"
                        }
                
                
        }
        console.log("out holds have " + holds.children.length)
        giveHint(hint)
        chosenWordd.textContent=chosenWord;
}
function giveHint(hint){
        hintie.onclick=function(){
        clue.textContent=hint;
        }
}
const letters = document.querySelectorAll(".alphabet")
const hintie = document.querySelector("#hint")
const reset = document.querySelector("#reset")
const clue = document.querySelector("#clue")
const lives = document.querySelector("#mylives")
lives.textContent="You have 10 lives";

reset.addEventListener("click",()=>{
        clue.textContent="Clue -";
        let x =categoryChoose();
        letters.forEach(element => {
                element.disabled=false
        element.style.color="white"
        });
        
        
        
})

let contol=0;
letters.forEach(element => {
        element.addEventListener("click",()=>{

                element. disabled = true
                if(chosenWordd.textContent.includes(element.textContent)){
                        element.style.color="black";
                        console.log("yes")
                        const lett= chosenWordd.textContent.length;
                        
                        for (let index = 0; index < lett; index++) {
                                let charr =chosenWordd.textContent.charAt(index)
                                if(chosenWordd.textContent.charAt(index)==element.textContent){
                                        holds.children[index].textContent=element.textContent
                                        contol+=1
                                        
                                }       
                        }

                        if (contol==lett){
                                clue.textContent="You won!"
                                letters.forEach(element => {
                                        element.disabled=true
                                        contol=0;
                                })
                        }
                }else{
                        element.style.color="red";
                        console.log("no")
                        live10-=1
                        lives.textContent=`You have ${live10} lives`;
                        if(live10==0){
                                clue.textContent="You lost"
                                letters.forEach(element => {
                                        element.disabled=true
                                });

                        }
                }
        })

        
});

categoryChoose();
  
    





