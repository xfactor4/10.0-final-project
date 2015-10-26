import $ from 'jquery';
import Backbone from 'backbone';

let recipes;

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', 'V9t5d9Zdnw0iz6WwSy3jpLurWPm5Mcl1WAjWRnWm');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'SUASfh0sLbx6QVKzZgEVR6jNN1drkdV6svL8dtvA');
    }
  }
})

const Recipe = Backbone.Model.extend({
  idAttribute: "objectId",
  defaults() {
    return {
      ingredients: []
    };
  }
});

const RecipesCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/Recipe",
  model: Recipe,
  parse(response) {
    return response.results;
  }
});

export default {
  getRecipeCollection(){
    return (recipes = recipes || new RecipesCollection())
  },

  getNewRecipe() {
    return new Recipe();
  }
};
