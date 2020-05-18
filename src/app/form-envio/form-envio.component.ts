import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-envio',
  templateUrl: './form-envio.component.html',
  styleUrls: ['./form-envio.component.sass']
})

export class FormEnvioComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  ngOnInit() { }

  submitForm() {
    alert(this.form.get('name').value);
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("avatar", this.form.get('avatar').value);

    this.http.post('https://zeit-endpoint.brmaeji.now.sh/api/auth', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
