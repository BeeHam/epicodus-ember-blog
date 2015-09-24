import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(blogpost) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        blogpost: blogpost
      };
      this.sendAction('save', blogpost, params);
    }
  }
});
