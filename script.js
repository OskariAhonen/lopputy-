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
    console.log(poistoPakka.length)
    
    if (poistoPakka.length > 4) {
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
    
      if(x1 == "white" && vaihtoM != false) {
           document.getElementById("kuva1").style.borderColor = "yellow"
           lukitus1 = true
           console.log(lukitus1)
    } else if (x1 = "yellow" && vaihtoM != false){
        document.getElementById("kuva1").style.borderColor = "white" 
        lukitus1 = false
    }
   })
   kuva2.addEventListener("click", () => {
   x2 = document.getElementById("kuva2").style.borderColor
    
      if(x2 == "white" && vaihtoM != false) {
           document.getElementById("kuva2").style.borderColor = "yellow"
           lukitus2 = true
       }
      else if (x2 = "yellow" && vaihtoM != false){
        document.getElementById("kuva2").style.borderColor = "white" 
        lukitus2 = false  
    }
   })
   kuva3.addEventListener("click", () => {
     x3 = document.getElementById("kuva3").style.borderColor
    
      if(x3 == "white" && vaihtoM != false) {
           document.getElementById("kuva3").style.borderColor = "yellow"
           lukitus3 = true
       }
      else if (x3 = "yellow" && vaihtoM != false){
        document.getElementById("kuva3").style.borderColor = "white" 
        lukitus3 = false  
    }
   })
   kuva4.addEventListener("click", () => {
     x4 = document.getElementById("kuva4").style.borderColor
    
      if(x4 == "white" && vaihtoM != false) {
           document.getElementById("kuva4").style.borderColor = "yellow"
           lukitus4 = true
       }
      else if (x4 = "yellow" && vaihtoM != false){
        document.getElementById("kuva4").style.borderColor = "white" 
        lukitus4 = false  
    }
   })
   kuva5.addEventListener("click", () => {
     x5 = document.getElementById("kuva5").style.borderColor
    
      if(x5 == "white" && vaihtoM != false) {
           document.getElementById("kuva5").style.borderColor = "yellow"
           lukitus5 = true
       }
      else if (x5 = "yellow" && vaihtoM != false){
        document.getElementById("kuva5").style.borderColor = "white" 
        lukitus5 = false  
    }
   })
   
   lukitusNappi.addEventListener("click", () => {
    
   

    if (lukitus1 == true && vaihtoM != false) {
        kortit.pop[0]
        kortitEsille(1)
        document.getElementById("kuva1").style.borderColor = "white" 
        lukitus1 = false
    }
    if (lukitus2 == true && vaihtoM != false) {
        kortit.pop[1]
        kortitEsille(2)
        document.getElementById("kuva2").style.borderColor = "white" 
        lukitus2 = false
    }
    if (lukitus3 == true && vaihtoM != false) {
        kortit.pop[2]
        kortitEsille(3)
        document.getElementById("kuva3").style.borderColor = "white"
        lukitus3 = false 

    }
    if (lukitus4 == true && vaihtoM != false) {
        kortit.pop[3]
        kortitEsille(4)
        document.getElementById("kuva4").style.borderColor = "white" 
        lukitus4 = false

    }
    if (lukitus5 == true && vaihtoM != false) {
        kortit.pop[4]
        kortitEsille(5)
        document.getElementById("kuva5").style.borderColor = "white" 
        lukitus5 = false
    }
vaihtoM = false

   })
   

    function kortitEsille(paikka) {

    // arvotaan maa //
    var randomluku = Math.floor(Math.random() * 4)
    var randomMaa = maat[randomluku]
    
    // arvotaan kortin numero //
    var randomluku2 = Math.floor(Math.random() * 13)
    randomNumero = numerot[randomluku2]
    var uusiKortti = new kortti(randomMaa, randomNumero)
    poistoPakka.push(uusiKortti) 
        kortit.push(uusiKortti)  
        for (b = 0; b < poistoPakka.length - 1; b++){
            if (poistoPakka[b].arvo == uusiKortti.arvo && poistoPakka[b].maa == uusiKortti.maa) {
                poistoPakka.pop(poistoPakka.length - 1)
                kortit.pop[kortit.length - 1]
                kortitEsille(paikka)
               
            }
            
        }
        for (b = 0; b < kortit.length - 1; b++){
            if (kortit[b].arvo == uusiKortti.arvo && kortit[b].maa == uusiKortti.maa) {
                kortit.pop[kortit.length - 1]
                poistoPakka.pop(poistoPakka.length - 1)
                kortitEsille(paikka)
               
            }
            
        } 
    
    // laitetaan kortit esille //
    if (kortit[kortit.length - 1].maa == "hertta") {
        document.getElementById("kuva" + paikka).src="kuvat/hertta/hertta_" + uusiKortti.arvo + ".png"
    } else if (kortit[kortit.length - 1].maa == "risti") {
        document.getElementById("kuva" + paikka).src="kuvat/risti/risti_" + uusiKortti.arvo + ".png"
    } else if (kortit[kortit.length - 1].maa == "pata") {
        document.getElementById("kuva" + paikka).src="kuvat/pata/pata_" + uusiKortti.arvo + ".png"
    } else if (kortit[kortit.length - 1].maa == "ruutu"){
        document.getElementById("kuva" + paikka).src="kuvat/ruutu/ruutu_" + uusiKortti.arvo + ".png"
    }
}


    // Luodaan kortti olio ja se laitetaan taulukkoon //
    
    function kortti(maa, arvo) {
        this.maa = maa;
        this.arvo = arvo
    }
   









    


 
