import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogpostForm: false,
  actions: {
    updateBlogpostForm() {
      this.set('updateBlogpostForm', true);
    },
    update(blogpost) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateBlogpostForm', false);
      this.sendAction('update', blogpost, params);
    }
  }
});
