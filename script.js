//SEARCHING NAME====>
// var input = document.querySelector('input');
// var data = [
//     {name:"harsh", src:"https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     {name:"harshita", src:"https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     {name:"harshika", src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     {name:"himashu", src:"https://images.unsplash.com/photo-1515138692129-197a2c608cfd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     {name:"himanshi", src:"https://media.istockphoto.com/id/1150096021/photo/smiling-mature-manager-sitting-at-creative-office.webp?b=1&s=170667a&w=0&k=20&c=V_9T2jNxE3mYrUY9y58BsoAqRkjmmm9Fy1Sil31Jhf4="}
// ]


// var pers = "";
// data.forEach(function(elem){
//      pers += ` <div class="person">
//                     <div class="img-container">
//                         <img src="${elem.src}" alt="">
//                     </div>
//                     <h2>${elem.name}</h2>
//                 </div>`
// })
// document.querySelector('.people').innerHTML = pers;

// input.addEventListener('input', function(){
//     var matching = data.filter(function(e){
//         return e.name.startsWith(input.value);
//     });
//     var pers = "";
//     matching.forEach(function(elem){
//         pers += ` <div class="person">
//                         <div class="img-container">
//                             <img src="${elem.src}" alt="">
//                         </div>
//                         <h2>${elem.name}</h2>
//                     </div>`
//     })
//     document.querySelector('.people').innerHTML = pers;
// });



//SCROLL BAR PROGRESS=====>

var progressbar = document.querySelector('.progressbar');

document.addEventListener('scroll', function(){
    var webpageHeight = document.body.scrollHeight;
    var disFromTop = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var percentageScrolled = ((disFromTop)/(webpageHeight - windowHeight))*100;
    progressbar.style.width = percentageScrolled + '%';
    console.log(webpageHeight);
    console.log(disFromTop);
    console.log(windowHeight);
    console.log(this);

});

// console.log(a);
// let a = 12;