
// tanvi dhupkar
// student number - 10508427

import { Injectable } from '@angular/core';
import { Customer } from '../Model/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formData: Customer;

  construct() { }


}
