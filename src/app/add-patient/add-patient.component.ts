import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  constructor(private api:ApiService) {}

  patientCode = ""
  name = ""
  gender = ""
  age = ""
  doctorName = ""
  appointmentDate = ""

  readValues = () => {
    let patient = {
      "patientCode":this.patientCode,
      "name":this.name,
      "gender":this.gender,
      "age":this.age,
      "doctorName":this.doctorName,
      "appointmentDate":this.appointmentDate
    }
    console.log(patient);
    this.api.addPatient(patient).subscribe(
      (response:any) => {
        if (response.status == "success") {
          alert("added successfully")
          this.patientCode = ""
          this.name = ""
          this.gender = ""
          this.age = ""
          this.doctorName = ""
          this.appointmentDate = ""
        } else {
          alert("something wrong")
        }
      }
    )
    
  }
}
