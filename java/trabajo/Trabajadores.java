import java.util.Scanner;

public class Trabajadores{
  public static void main(String arg[]){

   Scanner in = new Scanner(System.in);
   String nombre = "";
   int clave = 0, anos = 0;
  
   System.out.println("¿Cual es tu nombre? ");
   nombre = in.nextLine();

   System.out.println("Ingrese su clave ");
   clave = in.nextInt();

   System.out.println("¿Cuantos anios a trabajado? ");
   anos = in.nextInt();


   if(clave == 1){
    System.out.println("Bienvenido " + nombre + " has trabajado en nuestra empresa desde " + anos + " Cargo: Atencion al cliente ");
  }else if(clave == 2){
    System.out.println("Bienvenido " + nombre + " has trabajado en nuestra empresa desde " + anos + " cargo: Logista ");
  }else if(clave == 3){
     System.out.println("Bienvenido " + nombre + " has trabajado en nuestra empresa desde " + anos + " Cargo Gerente ");
   }
   if(anos == 1 && clave == 1){
    System.out.println(" Por Su tiempo de servicio le corresponde 6 dias de Vacaciones ");
  }else if(anos == 1 && clave == 2){
    System.out.println(" Por Su tiempo de servicio le corresponde 7 dias de Vacaciones ");
  }else if(anos == 1 && clave == 3){
    System.out.println(" Por Su tiempo de servicio le corresponde 10 dias de Vacaciones ");
  }else if(anos >=2 && anos <=6 && clave == 1){
    System.out.println(" Por Su tiempo de servicio le corresponde 14 dias de Vacaciones ");
  }else if(anos >=2 && anos <=6 && clave == 2){
    System.out.println(" Por Su tiempo de servicio le corresponde 15 dias de Vacaciones ");
  }else if(anos >=2 && anos <=6 && clave == 3){
    System.out.println(" Por Su tiempo de servicio le corresponde 20 dias de Vacaciones ");
  }else if(anos >=7 && clave == 1){
    System.out.println(" Por Su tiempo de servicio le corresponde 20 dias de Vacaciones ");
  }else if(anos >=7 && clave == 2){
    System.out.println(" Por Su tiempo de servicio le corresponde 22 dias de Vacaciones ");
  }else if(anos >=7 && clave == 3){
   System.out.println(" Por Su tiempo de servicio le corresponde 30 dias de Vacaciones ");
  }
 }
}