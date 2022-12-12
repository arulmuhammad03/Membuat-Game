var bn = document.getElementsByClassName("bn");
var pilihanuser = "";

Array.from(bn).forEach(function(element){
    element.addEventListener("click", function(){
        pilihanuser = this.getAttribute("data-item");
        pilihanComFinal = pilihanCom();
        tes = adu();
        var layar = document.getElementById("layar");
        layar.innerHTML = tes;
    })
})

function pilihanCom(){
    var datacom = ["gunting", "batu", "kertas"];
    var pilihanComAcak = Math.floor(Math.random()* datacom.length);
    var pilihanComFinal = datacom[pilihanComAcak];
    return pilihanComFinal;
};

function adu(){
    var status = '';
    if(pilihanuser === 'batu'&& pilihanComFinal === 'batu'){
        status = 'seri';
    }
    if(pilihanuser === 'batu'&& pilihanComFinal === 'gunting'){
        status = 'menang user';
    }
    if(pilihanuser === 'batu'&& pilihanComFinal === 'kertas'){
        status = 'Com menang';
    }
    if(pilihanuser === 'gunting'&& pilihanComFinal === 'batu'){
        status = 'Com menang';
    }
    if(pilihanuser === 'gunting'&& pilihanComFinal === 'kertas'){
        status = 'user menang';
    }
    if(pilihanuser === 'gunting'&& pilihanComFinal === 'gunting'){
        status = 'seri';
    }
    if(pilihanuser === 'kertas'&& pilihanComFinal === 'batu'){
        status = 'user menang';
    }
    if(pilihanuser === 'kertas'&& pilihanComFinal === 'gunting'){
        status = 'Com menang';
    }
    if(pilihanuser === 'kertas'&& pilihanComFinal === 'kertas'){
        status = 'seri';
    }

    return status;

}