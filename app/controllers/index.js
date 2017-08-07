// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then(()=> this.transitionToRoute('admin.invitations'));
    },
    willTransition(){
     this.get('model').rollbackAttributes();
    }
  }
});
