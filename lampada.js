const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lampada = document.getElementById ('lampada');


function isLampBroken() {
    return lampada.src.indexOf ('LAMPADAQUEBRADA') > -1;
}

function lampOn (){
    if (!isLampBroken () ){
        lampada.src = 'LAMPADALIGADA.jpg';
    }
    
}

function lampOff(){
    if (!isLampBroken () ){
        lampada.src = 'LAMPADADESLIGADA.jpg';
    }
 
}

function lampBroken(){
    lampada.src = 'LAMPADAQUEBRADA.jpg';
}

turnOn.addEventListener( 'click' , lampOn);
turnOff.addEventListener( 'click' , lampOff);
lampada.addEventListener( 'mouseover' , lampOn);
lampada.addEventListener('mouseleave' , lampOff);
lampada.addEventListener('dblclick' , lampBroken);