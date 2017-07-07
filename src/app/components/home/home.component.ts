import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nom:String ="";
  prenom:String ="";
  age:String ="";
  Text:String="test";
  shapeColor: String ="carre red";
  message: String = "border: 1px solid darck";
  classCarre: string="green";
  classCarre2: string="red";


  constructor() { 
   this.changeCouleur();
  }

  ngOnInit() {
  }


changeCouleur() {
 this.classCarre = this.classCarre === 'green' ? 'red' : 'green';
 this.classCarre2 =this.classCarre2 === 'green' ? 'red' : 'green';
 console.log(this.classCarre2);
}

  register(values){
    console.log("méthode register", values);
    this.nom = values.nom.toLowerCase().trim();
    this.prenom = values.prenom.toLowerCase().trim();
    this.age = values.date;
    if((this.nom == "boulerouah")&&(this.prenom =="aoumeur")){
      this.Text="Vous etes bien la bonne personne";
      this.shapeColor="green";
      console.log("carre green");
    }
    else{
       this.shapeColor="red";
       console.log("carre red");
       this.Text="Vous n'etes pas la bonne personne";
    }
  }

}
