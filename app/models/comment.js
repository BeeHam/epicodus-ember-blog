import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
  blogpost: DS.belongsTo('blogpost', { async: true })
});
