import { Component } from '@angular/core';
import { CustomerSayingComponent } from "../customer-saying/customer-saying.component";

@Component({
  selector: 'app-global-customer-saying',
  standalone: true,
  imports: [CustomerSayingComponent],
  templateUrl: './global-customer-saying.component.html',
  styleUrl: './global-customer-saying.component.scss'
})
export class GlobalCustomerSayingComponent {

}
