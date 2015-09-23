import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlogpost: false,
  actions: {
    showBlogpostForm() {
      this.set('addNewBlogpost', true);
    },

    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content')
      };
      this.set('addNewBlogpost', false),
      this.sendAction('save', params);
    }
  }
});
