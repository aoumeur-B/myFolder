import { Component, OnInit, EventEmitter } from '@angular/core';
import { FilmsService } from 'app/services/films.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})

export class SearchComponent implements OnInit {

  private title: String = "";
  private year: String = "";
  private fs: FilmsService;
  private imageUrl: String = "";
  private titre_resp: String = "";
  private year_resp: String = "";
  private realisateur_resp: String = "";
  private Genre_resp: String = "";
  private Duree_resp: String = "";
  private results: any;
  private json_response: any;
  private color:string;
  // private results:String = "";


  constructor(fs: FilmsService) {
    console.log("création d'une instance de searchComponent ..")
    this.fs = fs;
    this.color= 'cyan';
  

    let obs = new EventEmitter(); 
    let subscribe = obs.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('fin'));

      obs.emit('valeur1');  // affiche : valeur1 
      obs.emit('valeur2');  // affiche : valeur2 
      obs.complete();         // affiche : fin



    /*
        Observable.from( [2, 10, 5, 8, 9] ) 
        .map(x => x * 3) 
        .filter(x => x > 20) 
        .subscribe(x => console.log(x)); 
        */


    this.results = {
      html: "",
      titre_resp:""
    }





  }

  ngOnInit() {
  }

  search(form: any) {
    let results = this.fs.search(form.title, form.year);
    this.results = results;

    console.log("affichage de resultat");
    console.log(this.results);

    /* // méthode 1
    this.title = form.title.toLowerCase().trim();
    this.year = form.year.toLowerCase().trim();
    console.log(this.title);
    console.log(`titre: ${this.title}`);
    let promise = this.http.get(`http://www.omdbapi.com/?t=${this.title}&apikey=${this.apikey}&y=${this.year}`);
    promise.subscribe((response) => {
      let jsonResponse = JSON.parse(response.text());
      console.log(response.text()); // corps
      this.year_resp = jsonResponse.Year; // corps
      this.titre_resp = response.json().Title;
      this.realisateur_resp = response.json().Director;
      this.Genre_resp = jsonResponse.Genre;
      this.Duree_resp = jsonResponse.Runtime;
      this.imageUrl = jsonResponse.Poster;

     
      // autre solution méthode 2
      promise.subscripbe(response)=>{
        let jsonData = response.json();
        for (let key in jsonData){
          this.results +=`<p> ${key}: ${jsonData[key]</p>} `;  // utiliser: [innerHtml]="results" ; côté html
        } 
      }
      for (let key in jsonResponse)

      

    });

      */
  }

}
