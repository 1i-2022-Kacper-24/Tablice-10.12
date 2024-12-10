let nums=[]

let reps = parseInt(prompt("Podaj ile liczb wprowadzamy do tablicy"))

while(reps>0){
    nums.push(parseInt(prompt("Podaj dodawaną liczbę")))
    reps=reps-1
}


document.write(nums)