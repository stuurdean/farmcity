import { Component } from '@angular/core';

@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.component.html',
  styleUrls: ['paypal.component.scss'],
})
export class Paypal {
  paymentAmount: string = '01.95';
  currency: string = 'USD';
  currencyIcon: string = '$';
  constructor() {
    let _this = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this.paymentAmount
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture()
            .then(function (details) {
              // Show a success message to the buyer
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch(err => {
              console.log(err);
            })
        }
      }).render('#paypal-button-container');
    }, 500)
  }
}
