function rps(n){
    let com = Math.ceil(Math.random()*3)
    
    if(n==1){
        alert('가위를 내셨습니당'+com);
    }else if(n==2){
        alert('바위를 내셨습니당'+com);
    }else if(n==3){
        alert('보를 내셨습니당'+com)
    }
}
