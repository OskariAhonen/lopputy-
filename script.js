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
    // arvotaan maa //
    var randomluku = Math.floor(Math.random() * 4)
    var randomMaa = maat[randomluku]
    
    // arvotaan kortin numero //
    var randomluku2 = Math.floor(Math.random() * 13)
    var randomNumero = numerot[randomluku2]

    // laitetaan kortit esille //
    if (randomMaa == "hertta") {
        document.getElementById("kuva" + i).src="kuvat/hertta/hertta_" + randomNumero + ".png"
    } else if (randomMaa == "risti") {
        document.getElementById("kuva" + i).src="kuvat/risti/risti_" + randomNumero + ".png"
    } else if (randomMaa == "pata") {
        document.getElementById("kuva" + i).src="kuvat/pata/pata_" + randomNumero + ".png"
    } else if (randomMaa == "ruutu"){
        document.getElementById("kuva" + i).src="kuvat/ruutu/ruutu_" + randomNumero + ".png"
    }

    // Kortti laitetaan kortit taulukkoon //
    
    function kortti(maa, arvo) {
        this.maa = maa;
        this.arvo = arvo
    }
   var uusiKortti = new kortti(randomMaa, randomNumero)
    
    kortit.push(uusiKortti)
    console.log(kortit[i - 1])


}
   console.log(kortit[2].arvo)
})