package com.Gandro.primerospasos

fun main(){

    val name = "Gandro"
    //int = -2,147,483 a 2,147,483,647
    val age:Int = 30
    var age2 = 22
    //println(age2)

    //long -9, 223, 372, 036,854
    val example:Long = 30

    //float
    val floatExample:Float =30.5f

    //Double
    val doubleExample:Double = 324.33345

    /**
    * Variables Alfanumerico
     */

    //Boolean
    val booleanExample:Boolean = true


    //char
    val charExample:Char = 'e'
    val charExample2:Char = '2'
    val charExample3:Char = '@'

    //String
    val stringExample:String = "Hablame"
    val stringExample1 = "Hablame"
    val stringExample2 = "4"
    val stringExample3 = "25"
    var stringConcatenar = "Hola me llamo $name"


    println(stringConcatenar)

    println(stringExample2.toInt() + stringExample3.toInt())


    //matematica
//    print("Sumar: ")
//    println(age + age2)
//
//    print("Restar: ")
//    println(age - age2)
//
//    print("multiplicar: ")
//    println(age * age2)
//
//    print("dividir: ")
//    println(age / age2)
//
//    print("Modulo: ")
//    println(age % age2)


}