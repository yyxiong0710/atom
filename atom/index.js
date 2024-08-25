var nucles = document.querySelector(".nucles");
var one = document.querySelector(".one")
var two = document.querySelector(".two")

function abs(num){
    if(num<0){
        num *= -1;
    }
    return num;
}

for(var i=0;i<5;i++){
    var one = document.createElement("div")
    one.classList.add("one");
    for(var j=0;j<(7-2*abs(i-2));j++){
        var proton = document.createElement("div");
        proton.classList.add("proton");
        one.appendChild(proton)
    }
    nucles.appendChild(one);
}
for(var i=0;i<3;i++){
    var two = document.createElement("div")
    two.classList.add("two");
    for(var j=0;j<3;j++){
        var neutron = document.createElement("div")
        neutron.classList.add("neutron")
        two.appendChild(neutron)
    }
    two.style.setProperty("top",`${65+20*i}px`)
    nucles.appendChild(two);
}