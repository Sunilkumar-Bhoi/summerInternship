function generate()
{
    let colors=["#ff0000","#0000ff","#3cb371","#ee82ee","#ffa500","#6a5acd","#956347","#95ae9f","#95309f","#ffff1f"];

    let i = parseInt(Math.random()*10);
    let color = colors[i];

    document.querySelector(".left").style.backgroundColor = color;

    document.querySelector("input").value = color;

    document.querySelector("input").style.color = color;
}

function copy(){
    document.querySelector("input").select();

    navigator.clipboard.writeText(input.value);
}