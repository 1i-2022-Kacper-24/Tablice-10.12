let nums=[]

let reps = parseInt(prompt("Podaj ile liczb wprowadzamy do tablicy"))

let added

while(reps>0){
    do {
        added = parseInt(prompt("Podaj dodawaną liczbę"))
    } while(isNaN(added))
    nums.push(added)
    reps=reps-1
}

document.write(nums)