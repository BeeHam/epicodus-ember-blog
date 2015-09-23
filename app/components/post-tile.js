import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogpost: false,
  actions: {
    update(blogpost, params) {
      this.sendAction('update', blogpost, params);
    },
    delete(blogpost) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyBlogpost', blogpost);
      }
    }
  }
});
