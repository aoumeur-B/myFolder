
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FilmsService {
 
  
  private buffer: Array<any> = [];
  private apikey: String = "c537c65c";
  private http: Http;
  private results: any;

  constructor(http: Http) {
    this.http = http;
    console.log("création d'objet par le framework")

  }

  search(titre: string, annee: string): any {

    let req= this.getRequest(titre, annee)
    if(req){
      return req;
    }

    let results = {
      html:"",
      titre_resp:""
    };
    
    console.log("Titre demandé: ", titre)

    let that = this;
    let observable = this.http.get(`http://www.omdbapi.com/?t=${titre}&apikey=${this.apikey}&y=${annee}`);

// méthode à éxecuter lorsque le serveur répond 
    observable.subscribe((response) => {
        let jsonData = response.json();
        results.titre_resp = response.json().Title;
        for (let key in jsonData){
          results.html +=`<p> ${key}: ${jsonData[key]}</p>}`;  // utiliser: [innerHtml]="results" ; côté html
        }
        // sauvegarde de l'objet qui contient la réponse
        that.buffer.push(results);
      });
         return results;
}


// méthode qui vérifie dans le buffer l'existance ou pas d'une requette
getRequest(titre: string, annee: string): any {
  for(let req of this.buffer){
    if(req.titre === titre && req.annee === annee ){
      return req;
    }
  }
  return null;
}


getBuffer(): any {
  return this.buffer;
}


}
