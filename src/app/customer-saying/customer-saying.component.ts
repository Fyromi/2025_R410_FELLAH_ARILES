import { Component } from '@angular/core';
import { ProfilComComponent } from './profil-com/profil-com.component';

export type Customer = {
  profilPicture: string;
  name: string;
  role: string;
  review:string;
}

@Component({
  selector: 'app-customer-saying',
  standalone: true,
  imports: [ProfilComComponent],
  templateUrl: './customer-saying.component.html',
  styleUrl: './customer-saying.component.scss'
})
export class CustomerSayingComponent {

  customers: Array<Customer> = [
    {profilPicture:"Lego1", name:"Edward Newgate", role:"Founder Circle", review:"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"},
    {profilPicture:"Lego2", name:"Pirate King", role:"Gentille", review:"Allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely Our dedicated patient engagement app and web portal"},
    {profilPicture:"Lego3", name:"Aliral", role:"Méchant", review:"Engagement app and web portal allow you to access our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"}
  ];

  customer: Customer = this.customers[0];

  nextCustomer(index: number):Customer{
    
    return this.customers[index];
  
  }

}
