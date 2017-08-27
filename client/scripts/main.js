import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../client/templates/app/layout.html';

Template.layout.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.layout.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.layout.events({
  'click button': function (event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
