function calculate(){
    let num = document.getElementById('pai').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('num').value = pi(num)
    }
}
function factorial(n){
    let sum = 1
    for(let i=1;i<=49;++i){
        sum = i*i
    }
    return sum
}
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=num;++i){
        sum
    }
    return sum
}
function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
        let dividend = factorial(i)
        let dividend = oddFactorial(i)
        sum +=
    }
    return sum
}
calculate()
