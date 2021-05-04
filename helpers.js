function $g(selector){
    //判斷使否為id selector
    if (selector.includes('#') && !selector.includes(' ')){
        //回傳Element
        return document.querySelector(selector);
    }
    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function genUI(liArray){
    let ul = document.createElement("li");

    liArray.forEach((item,index)=>{
        let li =document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    });
    return ul;
}

function getRandom(min,max){
    return Math.floor(Math.random() * max + min);
}

function $c(element,text){
    let el =document.createElement(element);

    if(text !== null && text !== undefined && text.length > 0){
        el.innerText = text;
    }
    return el;
}


export{$g,genUI,getRandom,$c};