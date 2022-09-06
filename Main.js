let input = prompt("Skiv in en sträng: ");
let everyOther; //bool som sparar true / false
let word = Array.from(input); //string till array
for(let i = 0; i< word.length; i ++){
    if(i%2 == 0){ //om varannan char är +
        if(word[i] == "+"){
            everyOther = true;
        } else {
            everyOther = false;
            break;
        }
    }
}
console.log(everyOther);