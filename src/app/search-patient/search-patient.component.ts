import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  constructor(private api:ApiService,private route:Router) {}
  patientCode = ""
  searchData:any = []
  searchPatient = () => {
    let data:any = {
      "patientCode":this.patientCode
    }
    console.log(data);
    this.api.searchPatient(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.length == 0){
          alert("Not found")
        } else {
          this.searchData = response
        }
      }
    )
  }

  deleteBtn = (id:any) => {
    let data:any = {
      "id":id
    }
    this.api.deletePatient(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status=="success"){
          alert("deleted successfully")
          this.route.navigate(['/search'])
        }
      }
    )
  }
}
