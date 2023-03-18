const url = 'https://jsonplaceholder.typicode.com/posts';
const settitle=(val)=>{
     localStorage.setItem("title",val);
     console.log(localStorage.getItem("title"));
     window.location.replace("blogs.html");
}
$(document).ready(function () {
    $.get(url, function (data) {
       data.forEach((element) => {
            $(".content").append(`<p onclick="settitle('${element.title}')">${element.title}</p><br>`);   
         });
     
    })

});

