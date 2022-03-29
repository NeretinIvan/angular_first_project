import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input()
  cardName = "Card name";
  @Input()
  number = "0000000000000000"
  @Input()
  amount = "0000,00";
  @Input()
  expirationDate = "00/00"
  @Input()
  paymentSystem = "visa"

  isVisa:boolean = false;
  isMasterCard:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
    this.isVisa = this.paymentSystem === "visa";
    this.isMasterCard = this.paymentSystem === "mastercard" || this.paymentSystem === "masterCard";
  }
}
