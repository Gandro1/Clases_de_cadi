public class Promedio{
  public static void main(String arg[]){
   
   int matematicas = 5;
   int biologia = 5;
   int quimica = 5;
   int promedio = 0;

   promedio = (matematicas + biologia + quimica) /3;
  
   if(promedio >= 6){
    System.out.println("El alumno Aprobo " + promedio);
  }else {
    System.out.println("El alumno Reprobo " + promedio); 
  }
 }
}