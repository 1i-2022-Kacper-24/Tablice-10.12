let nulls = []
let nums = []
let added
let length = 0

do {
    added = parseInt(prompt("Podaj liczę: "))

    while(isNaN(added)){
    added = parseInt(prompt("Podaj liczę: "))}

    if (added===0){
        nulls.push(added)
        length = length+1
    }

    else if (added % 2 == 0){
        nums.push(added)
    }
    
    else if (added % 2 == 1){
        nums.unshift(added)
    }


} while (confirm("Wpisać następną liczbę?") == true)
document.write("\n\nIlość zer wynosi: " + length)
document.write("\n\nZawartość tablicy: " + nums)
