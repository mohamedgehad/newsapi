var myNews;
getData('general');
function getData (category)
{
     myNews=[];
    var http = new XMLHttpRequest ();

    //http.open("GET","https://jsonplaceholder.typicode.com/POSTS");
    http.open("GET",`http://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=82ee40d136064fae8a5146abad7012d3`);

    http.send();

    http.addEventListener ("readystatechange",function(){

    if(http.readyState==4 && http.status==200)
    {
        myNews= JSON.parse(http.response).articles;

        desplayData();
    }
    })
}
 
var links = document.getElementsByClassName("nav-link");

for (var i=0 ; i<links.length ; i++)
{
    links[i].addEventListener("click",function(eventInfo){
         
        getData(eventInfo.target.text); 
    })
}




function desplayData(){

    var cartona =``;


    for ( i=0 ; i <myNews.length; i++)
    {
        cartona +=`<div class='col-md-3'>
        <div>

        <h5>${myNews[i].title}</h1>
        <p>${myNews[i].description}</p>
        <img class='w-100' src="${myNews[i].urlToImage}"> 
        <a class="btn btn-primary mt-3" href="${myNews[i].url}">sours</a>
        </div>
        </div>`
    }
    document.getElementById("rowResult").innerHTML=cartona

}

