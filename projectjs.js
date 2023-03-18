console.log('jQuery AJAX Demos');

$(document).ready(function () {
    $("#search").one("click",function () {
       // $("#search").click(function(){
        
        let uid = $("#userId").val();
        
        console.log(uid);
        $.get(`https://jsonplaceholder.typicode.com/posts/${uid}`, function (data) {
            $("#userid").text(data.userId)
            $("#id").text(data.id);
            $("#title").text(data.title);
            $("#body").text(data.body);

            

            console.log(data);
            document.write("<h1> Your Searched Item Is Here : </h1><p>")
            document.write("<b>Title:</b>"+data.title +"<p>");
            document.write("<b>Content:</b>"+data.body);

            // console.log(abc.status);
            // console.log(status);
        })
            .fail(function (error) {
                $("#username").text('data not found!');
                console.log(error);
            });
    });
})


 // For all blogs

//  $(documnet).ready(function(){
//     $('#allblogs').click(function (){
//         alert("clicked");
//         const xhttp = new XMLHttpRequest();
//         xhttp.onload = function() {
//           document.getElementById("allblogs").innerHTML = this.responseText;
//         };
//         xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/',false);
//         xhttp.send();

//     })

//  })
       
        $(document).ready(function(){
        $('#all').click(function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementsByName('allblogs').innerHTML = this.responseText;
    };
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhttp.send();
  })
})


