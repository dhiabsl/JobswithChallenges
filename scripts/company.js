//company's are displayed here
let companysContainer = document.querySelector(".container")
//console.log(jobsContainer)
let companys = '<div class="company">\
<div class="image">\
    <p>#company image</p>\
</div>\
<div class="info">\
    <div class="leftside">\
        <p>name :</p>\
        <p>recruter :</p>\
        <p>profession :</p>\
    </div>\
    <div class="rightside">\
        <p>Owner : </p>\
        <p>Capital : </p>\
        <p>Heures : </p>\
    </div>\
</div>\
<button>Visit</button>\
</div>';

for(let j=0;j<=5;j++){
    companysContainer.innerHTML +=companys;
    //console.log("j : "+j)
}