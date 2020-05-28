import { LightningElement } from "lwc";
import { subscribe, unsubscribe, onError } from "lightning/empApi";

export default class LastChangedAccount extends LightningElement {
  channelName = "/topic/LastChangedAccount";
  subscription = {};
  accountId;
  accountName;

  connectedCallback() {
    subscribe(this.channelName, -2, (response) => {
      console.log("New message received : ", JSON.stringify(response));
      if (
        response !== null &&
        response.data !== null &&
        response.data.sobject !== null
      ) {
        const sobject = response.data.sobject;
        this.accountId = sobject.Id;
        this.accountName = sobject.Name;
      }
    }).then((response) => {
      this.subscription = response;
    });

    onError((error) => {
      console.log("Received error from server: ", JSON.stringify(error));
    });
  }

  disconnectedCallback() {
    unsubscribe(this.subscription, (response) => {
      console.log("unsubscribe() response: ", JSON.stringify(response));
    });
  }
}
