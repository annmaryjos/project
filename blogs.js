$(document).ready(function () {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    title=localStorage.getItem("title");
  
    $.get(url, function (data) {
       data.forEach((element) => {

          if(element.title===title)
          {
              $(".content").append(element.body);
          }
         });
    });

});