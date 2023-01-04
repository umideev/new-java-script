var i=0,text;

text = "welcom to web site "

function typing() {
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}

typing()