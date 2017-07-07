import {Component} from '@angular/core';

@Component ({
    selector:'main-root',
    templateUrl:'./main.html',
    styleUrls: ['./main.scss']
})

export class MainComponent{

title:string='Mon Page HTML';
couleur='green';

constructor(){
    }
}
