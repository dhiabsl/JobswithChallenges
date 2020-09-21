//emloyee categories are displayed here
let cateContainer = document.querySelector(".categorys")
//console.log(jobsContainer)
let categorys = '<div class="category">\
    <h1>Unknown</h1>\
    <p>Members : <span>null</span></p>\
    <p>Online : <span>null</span></p>\
</div>';

for(let k=0;k<=5;k++){
    cateContainer.innerHTML +=categorys;
    //console.log("k : "+j)
}