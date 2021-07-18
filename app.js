let player1 = document.getElementsByClassName('player1')[0];
let imageNo1 = Math.floor(Math.random()*3+1);
let imageSource1 = 'images/img' + imageNo1+ '.svg';

let player2 = document.getElementsByClassName('player2')[0];
let imageNo2 = Math.floor(Math.random()*3+1);
let imageSource2 = 'images/img' + imageNo2+ '.svg';


player1.setAttribute('src', imageSource1);
player2.setAttribute('src', imageSource2);


//1=paper | 2 = scissors | 3 = stone
if(imageNo1 === 1 && imageNo2 === 2){
    document.getElementById('heading').innerHTML = '🎊 Player 2 Wins 🎊' ;
}

else if(imageNo1 === 1 && imageNo2 === 3){
    document.getElementById('heading').innerHTML = '🎊 Player 1 Wins 🎊' ; 
}

else if(imageNo1 === 2 && imageNo2 === 1){
    document.getElementById('heading').innerHTML = '🎊 Player 1 Wins 🎊' ; 
}

else if(imageNo1 === 2 && imageNo2 === 3){
    document.getElementById('heading').innerHTML = '🎊 Player 2 Wins 🎊' ;
}

else if(imageNo1 === 3 && imageNo2 === 1){
    document.getElementById('heading').innerHTML = '🎊 Player 2 Wins 🎊' ;
}

else if(imageNo1 === 3 && imageNo2 === 2){
    document.getElementById('heading').innerHTML = '🎊 Player 1 Wins 🎊' ;
}

else {
    document.getElementById('heading').innerHTML = '❌ Draw ❌' ;
}

document.getElementsByTagName('button')[0].addEventListener('click', function(){
    location.reload();
})


