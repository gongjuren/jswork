function goldbach(cx){
    let goldbach = document.getElementById('goldbach')
    let odd = parseInt(document.getElementById('odd').value)
    if(isNaN(odd)){
        alert('请输入数字')
        return false
    }
    goldbach.value = cx(odd)
}
function goldbach(cx){
    var sum=0;
    for(var i=1;i<=cx;i++){
        if(cx % i ==0){
            sum++;
        }
    }
    if(sum==2){
        return true;
    }else{
        return false;
    }
}
function goldbach(cx){
    for(var i=2;i<cx-2;i++){
        var j = cx -i;
        if(goldbach(i)&&goldbach(j)){
            console.log(a+"可以拆分为两个质数"+ i+"与"+j+"的和");
        }
    }
}