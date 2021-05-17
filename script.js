const maat = ["hertta", "risti", "ruutu", "pata"]
const numerot = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const nappi = document.getElementById("nappi")
const lukitusNappi = document.getElementById("lukitusNappi")
const kuva1 = document.getElementById("kuva1")
const kuva2 = document.getElementById("kuva2")
const kuva3 = document.getElementById("kuva3")
const kuva4 = document.getElementById("kuva4")
const kuva5 = document.getElementById("kuva5")

var lukitus1 = false
var lukitus2 = false
var lukitus3 = false
var lukitus4 = false
var lukitus5 = false

var vaihtoM = false
var x1
var x2
var x3
var x4
var x5

var kortit = []
var poistoPakka = []

nappi.addEventListener("click", () => {
    vaihtoM = true 
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

kuva1.addEventListener("click", () => {
    x1 = document.getElementById("kuva1").style.borderColor
    
      if(x1 == "white") {
           document.getElementById("kuva1").style.borderColor = "yellow"
           lukitus1 = true
           console.log(lukitus1)
    } else if (x1 = "yellow"){
        document.getElementById("kuva1").style.borderColor = "white" 
        lukitus1 = false
    }
   })
   kuva2.addEventListener("click", () => {
   x2 = document.getElementById("kuva2").style.borderColor
    
      if(x2 == "white") {
           document.getElementById("kuva2").style.borderColor = "yellow"
           lukitus2 = true
       }
      else if (x2 = "yellow"){
        document.getElementById("kuva2").style.borderColor = "white" 
        lukitus2 = false  
    }
   })
   kuva3.addEventListener("click", () => {
     x3 = document.getElementById("kuva3").style.borderColor
    
      if(x3 == "white") {
           document.getElementById("kuva3").style.borderColor = "yellow"
           lukitus3 = true
       }
      else if (x3 = "yellow"){
        document.getElementById("kuva3").style.borderColor = "white" 
        lukitus3 = false  
    }
   })
   kuva4.addEventListener("click", () => {
     x4 = document.getElementById("kuva4").style.borderColor
    
      if(x4 == "white") {
           document.getElementById("kuva4").style.borderColor = "yellow"
           lukitus4 = true
       }
      else if (x4 = "yellow"){
        document.getElementById("kuva4").style.borderColor = "white" 
        lukitus4 = false  
    }
   })
   kuva5.addEventListener("click", () => {
     x5 = document.getElementById("kuva5").style.borderColor
    
      if(x5 == "white") {
           document.getElementById("kuva5").style.borderColor = "yellow"
           lukitus5 = true
       }
      else if (x5 = "yellow"){
        document.getElementById("kuva5").style.borderColor = "white" 
        lukitus5 = false  
    }
   })
   
   lukitusNappi.addEventListener("click", () => {
       vaihtoM = false
    if (lukitus1 == true) {
        kortit.pop[0]
        kortitEsille(1)
        
    }
    if (lukitus2 == true) {
        kortit.pop[1]
        kortitEsille(2)
    }
    if (lukitus3 == true) {
        kortit.pop[2]
        kortitEsille(3)
    }
    if (lukitus4 == true) {
        kortit.pop[3]
        kortitEsille(4)
    }
    if (lukitus5 == true) {
        kortit.pop[4]
        kortitEsille[5]
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

        for (b = 0; b = poistoPakka.length - 1; b++){
            if (poistoPakka[b].arvo == randomNumero && poistoPakka[b].maa == randomMaa) {

                kortit.pop(b - 1)
                poistoPakka.pop(poistoPakka.length - 1)
                kortitEsille(paikka)
            }
            
        }


    // laitetaan kortit esille //
    if (uusiKortti.maa == "hertta") {
        document.getElementById("kuva" + paikka).src="kuvat/hertta/hertta_" + uusiKortti.arvo + ".png"
    } else if (uusiKortti.maa == "risti") {
        document.getElementById("kuva" + paikka).src="kuvat/risti/risti_" + uusiKortti.arvo + ".png"
    } else if (uusiKortti.maa == "pata") {
        document.getElementById("kuva" + paikka).src="kuvat/pata/pata_" + uusiKortti.arvo + ".png"
    } else if (uusiKortti.maa == "ruutu"){
        document.getElementById("kuva" + paikka).src="kuvat/ruutu/ruutu_" + uusiKortti.arvo + ".png"
    }
}


    // Luodaan kortti olio ja se laitetaan taulukkoon //
    
    function kortti(maa, arvo) {
        this.maa = maa;
        this.arvo = arvo
    }
   









    


 
