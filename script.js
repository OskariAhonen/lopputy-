const maat = ["hertta", "risti", "ruutu", "pata"]
const numerot = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const nappi = document.getElementById("nappi")

const kuva1 = document.getElementById("kuva1")
const kuva2 = document.getElementById("kuva2")
const kuva3 = document.getElementById("kuva3")
const kuva4 = document.getElementById("kuva4")
const kuva5 = document.getElementById("kuva5")

var kortit = []
var poistoPakka = []

nappi.addEventListener("click", () => {
        
    if(poistoPakka.length > 25) {
        poistoPakka.length = 0
        }

        
    
    // poistaa kortit taulukon osat //
    for (k = 0; i = kortit.length; k++) {
        kortit.pop(k)
    }

    // arpoo ja laittaa kortit esille //
    for (l = 1; l < 6; l++) {
        kortitEsille(l)
    }
})
    function kortitEsille(paikka) {

    // arvotaan maa //
    var randomluku = Math.floor(Math.random() * 4)
    var randomMaa = maat[randomluku]
    
    // arvotaan kortin numero //
    var randomluku2 = Math.floor(Math.random() * 13)
    randomNumero = numerot[randomluku2]
    var uusiKortti = new kortti(randomMaa, randomNumero)   
    kortit.push(uusiKortti)
    poistoPakka.push(uusiKortti)

        for (b = 0; b < poistoPakka.length - 1; b++){
            if (poistoPakka[b].arvo == randomNumero && poistoPakka[b].maa == randomMaa) {

                kortit.pop(b - 1)
                poistoPakka.pop(b - 1)
                kortitEsille(paikka)
            }
            
        }


    // laitetaan kortit esille //
    if (kortit[paikka - 1].maa == "hertta") {
        document.getElementById("kuva" + paikka).src="kuvat/hertta/hertta_" + kortit[ - 1].arvo + ".png"
    } else if (kortit[paikka - 1].maa == "risti") {
        document.getElementById("kuva" + paikka).src="kuvat/risti/risti_" + kortit[paikka - 1].arvo + ".png"
    } else if (kortit[paikka - 1].maa == "pata") {
        document.getElementById("kuva" + paikka).src="kuvat/pata/pata_" + kortit[paikka - 1].arvo + ".png"
    } else if (kortit[paikka - 1].maa == "ruutu"){
        document.getElementById("kuva" + paikka).src="kuvat/ruutu/ruutu_" + kortit[paikka - 1].arvo + ".png"
    }
}

    kuva1.addEventListener("click", () => {
        if( document.getElementById("kuva1").style.borderColor = "white")
            document.getElementById("kuva1").style.borderColor = "yellow"
        else if (document.getElementById("kuva1").style.borderColor = "yellow") {
            document.getElementById("kuva1").style.borderColor = "white"   
        }
    })
   
    // Luodaan kortti olio ja se laitetaan taulukkoon //
    
    function kortti(maa, arvo) {
        this.maa = maa;
        this.arvo = arvo
    }
   



 
