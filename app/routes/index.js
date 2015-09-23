import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blogpost');
  },

  actions: {
    destroyBlogpost(blogpost) {
      blogpost.destroyRecord();
      this.transitionTo('index');
    }
  }
});
