const a = [765,98,78,0,70,65];
for(let i = 0; i < a.length;i++){
    for(let j = 0; j < a.length;j++){
        if(a[j]>a[j+1]){
            [a[j],a[j+1]] = [a[j+1],a[j]]
        }
    }
}console.log(a)
