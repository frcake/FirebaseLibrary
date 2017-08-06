import Ember from 'ember';

export default Ember.Controller.extend({


 emailAddress: '',

 composedMessage: '',

 isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

 isLongEnough: Ember.computed.gte('composedMessage.length',5),

 formIsValid: Ember.computed.and('isValid','isLongEnough'),

 isDisabled: Ember.computed.not('formIsValid'),

 actions: {
   sendMessage() {
     alert(`Email: ${this.get('emailAddress')} , Message: ${this.get('composedMessage')} `);
     this.set('responseContactForm',`Your Message has been Sent!`);
     this.set('emailAddress','');
     this.set('composedMessage','');
   }
 }

});
