import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addPatient = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }

  fetchPatient = () => {
    return this.http.get("http://localhost:8080/view")
  }

  searchPatient = (data:any) => {
    return this.http.post("http://localhost:8080/search",data)
  }

  deletePatient = (data:any) => {
    return this.http.post("http://localhost:8080/delete",data)
  }
}
