const maat = ["hertta", "risti", "ruutu", "pata"]
const numerot = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const nappi = document.getElementById("nappi")

var kortit = []
nappi.addEventListener("click", () => {
    // poistaa kortit taulukon osat //
    for (k = 0; i = kortit.length; k++) {
        kortit.pop(k)
    }
    // arpoo ja laittaa kortit esille //
    for (i = 1; i < 6; i++) {
        kortitEsille()
    }
})
    function kortitEsille() {

    // arvotaan maa //
    var randomluku = Math.floor(Math.random() * 4)
    var randomMaa = maat[randomluku]
    
    // arvotaan kortin numero //
    var randomluku2 = Math.floor(Math.random() * 13)
    randomNumero = numerot[randomluku2]
    var uusiKortti = new kortti(randomMaa, randomNumero)   
    kortit.push(uusiKortti)
        for (b = 0; b < kortit.length - 1; b++){
            if (kortit[b].arvo == randomNumero && kortit[b].maa == randomMaa) {

                kortit.pop(b - 1)
                kortitEsille()
            }
        }

    

    // laitetaan kortit esille //
    if (kortit[i - 1].maa == "hertta") {
        document.getElementById("kuva" + i).src="kuvat/hertta/hertta_" + kortit[i - 1].arvo + ".png"
    } else if (kortit[i - 1].maa == "risti") {
        document.getElementById("kuva" + i).src="kuvat/risti/risti_" + kortit[i - 1].arvo + ".png"
    } else if (kortit[i - 1].maa == "pata") {
        document.getElementById("kuva" + i).src="kuvat/pata/pata_" + kortit[i - 1].arvo + ".png"
    } else if (kortit[i - 1].maa == "ruutu"){
        document.getElementById("kuva" + i).src="kuvat/ruutu/ruutu_" + kortit[i - 1].arvo + ".png"
    }
}
    // Luodaan kortti olio ja se laitetaan taulukkoon //
    
    function kortti(maa, arvo) {
        this.maa = maa;
        this.arvo = arvo
    }
   









    


 
