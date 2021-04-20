const maat = ["hertta", "risti", "ruutu", "pata"]
const numerot = [1,2,3,4,5,6,7,8,9,10,11,12,13]


const nappi = document.getElementById("nappi")

nappi.addEventListener("click", () => {

    var randomluku = Math.floor(Math.random() * 4)
    var randomMaa = maat[randomluku]
    
    var randomluku2 = Math.floor(Math.random() * 13)
    var randomNumero = numerot[randomluku2]
    console.log(randomMaa, randomNumero)
    if (randomMaa == "hertta") {
        document.getElementById("kuva").src="kuvat/hertta/hertta_" + randomNumero + ".png"
    } else if (randomMaa == "risti") {
        document.getElementById("kuva").src="kuvat/risti/risti_" + randomNumero + ".png"
    } else if (randomMaa == "pata") {
        document.getElementById("kuva").src="kuvat/pata/pata_" + randomNumero + ".png"
    } else if (randomMaa == "ruutu"){
        document.getElementById("kuva").src="kuvat/ruutu/ruutu_" + randomNumero + ".png"
    }
})