import Ember from 'ember';

export default Ember.Controller.extend({


   emailAddress: '',

   composedMessage: '',

   isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),

   isLongEnough: Ember.computed.gte('model.message.length', 5),

   formIsValid: Ember.computed.and('isValid', 'isLongEnough'),

   isDisabled: Ember.computed.not('formIsValid'),

   actions: {
     sendMessage(newMessage) {
       newMessage.save().then(() => this.transitionToRoute('admin.contacts'));

     },
     willTransition() {
       this.controller.get('model').rollbackAttributes();
     }
   }

});
