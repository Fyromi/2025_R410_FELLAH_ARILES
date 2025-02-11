import { Component } from '@angular/core';
import { CustomerSayingComponent } from './customer-saying/customer-saying.component';
import { ButtonsComponent } from './buttons/buttons.component';

export type Customer = {
  profilPicture: string;
  name: string;
  role: string;
  review:string;
}

@Component({
  selector: 'app-global-customer-saying',
  standalone: true,
  imports: [CustomerSayingComponent, ButtonsComponent],
  templateUrl: './global-customer-saying.component.html',
  styleUrl: './global-customer-saying.component.scss'
})
export class GlobalCustomerSayingComponent {
  
  customers: Array<Customer> = [
    {profilPicture:"Lego1", name:"Edward Newgate", role:"Founder Circle", review:"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"},
    {profilPicture:"Lego2", name:"Pirate King", role:"Gentille", review:"Allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely Our dedicated patient engagement app and web portal"},
    {profilPicture:"Lego3", name:"Aliral", role:"Méchant", review:"Engagement app and web portal allow you to access our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"}
  ];

  index: number = 1 ;

  changeCustomer(incrément: number):void{
    this.index += incrément;
    if(this.index == this.customers.length) this.index = 0;
    if(this.index == -1) this.index = this.customers.length-1;
  }
}
