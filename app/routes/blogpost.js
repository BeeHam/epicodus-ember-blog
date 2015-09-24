import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      blogpost: this.store.findRecord('blogpost', params.blogpost_id),
      comments: this.store.query('comment', {filter: {blogpost: params.blogpost_id}})
    });
  },

  actions: {
    save(blogpost, params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      blogpost.save();
      this.transitionTo('blogpost', params.blogpost_id);
    },

    destroyComment(comment) {
      comment.destroyRecord().then(function() {
        blogpost.save();
      });
      this.transitionTo('blogpost');
    }
  }
});
