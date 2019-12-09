import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/model/toturial.model';
import { Store, select } from '@ngrx/store';
import { Appstate } from 'src/app/reducers/app.state';
import { AddTutorial } from 'src/app/actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials:Observable<Tutorial[]>;

  constructor(private store:Store<Appstate>) { 
   this.tutorials= this.store.pipe(select('tutorial'))
  }

  ngOnInit() {
  }
  AddTutorila(name,url){
    this.store.dispatch(new AddTutorial({name:name,url:url}));
    name.reset();
    url.reset();
  }
}
