import java.util.Scanner;

public class Suma2{
  oublic static void main(String arg[]){
  
   Scanner in = new Scanner(System.in);
   String nombre = "";
   int num1 = 0, num2 = 0, resultado = 0;

   System.out.println("¿Cual es tu nombre?");
   nombre = in.nextLine();

   System.out.println("Dame el primer valor para tu suma: ");
   num1 = in.nexInt();

   System.out.printl("Dame el segundo valor para tu suma: ");
   num2 = in.nexInt();

   resultado = num1 + num2;

   System.out.print( "Hola " + nombre + " El resultado de tu suma es: " + resultado);
 }
}