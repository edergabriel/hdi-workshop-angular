import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss'],
  providers: [StarwarsService]
})
export class StarwarsComponent implements OnInit {

  name: string;
  height: string;
  form: FormGroup;

  characters: [];

  constructor(private starwars: StarwarsService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.name = 'Star Wars';

    this.form = new FormGroup({
      name: this.formBuilder.control('', [Validators.required]),
      lastName: this.formBuilder.control('', [Validators.minLength(5)])
    });
  }

  buscarDados() {
    this.starwars.getPeopleStarWars().subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.height = data.height;
      this.characters = data.results
    });
  }

  checkValidTouched(field: string): boolean {
    return !this.form.get(field).valid &&
        (this.form.get(field).touched || this.form.get(field).dirty);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
