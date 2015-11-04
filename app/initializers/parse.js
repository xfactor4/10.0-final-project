import $ from 'jquery';

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', 'V9t5d9Zdnw0iz6WwSy3jpLurWPm5Mcl1WAjWRnWm');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'SUASfh0sLbx6QVKzZgEVR6jNN1drkdV6svL8dtvA');
      if(localStorage.getItem('parse-session-token')) {
        xhr.setRequestHeader('X-Parse-Session-Token', localStorage.getItem('parse-session-token'));
      }
    }
  }
});
