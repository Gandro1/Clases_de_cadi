var num1:number = Math.round(Math.random() * 20)
var num2:number = Math.round(Math.random() * 20)
var num3:number = Math.round(Math.random() * 20)

var total:number =Math.round((num1+num2+num3)/3)
console.log(num1 , num2, num3)
console.warn(total)
if (total >= 10){
alert("felicidades has aprobado")
if(total >=19)
alert("Exelente sigue asi!!")
}else{
    if(total < 10){
        alert("has reprobado")
        if(total <7){
            alert("esfuerzate mas")
        }
    }
}
