'use strict';

alert("Hello!")
let name1 = prompt("What's your name?","null");
if ( name1 == "null"){
    alert("I'm serious,don't broke my heart😢");
}
else{
    let giMe50 = confirm(`${name1},今天是疯狂星期四🎉,V我50🙏`);
    if(giMe50 == true){
        alert(`Thx ${name1},you are so kind😚!`)
    }
    else{
        alert(`Nothing you can do to fix our relationship,${name1}😢`);
    }
}
