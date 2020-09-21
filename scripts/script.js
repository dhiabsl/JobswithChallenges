//jobs displayed from here

let jobsContainer = document.querySelector(".jobs")
//console.log(jobsContainer)
let content = `<div class="job">\
<h2>Unknown</h2>\
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusamus voluptatum saepe repudiandae consequuntur tempore. Ducimus, modi ipsam. Aliquid consequuntur ab eius officiis quod possimus pariatur consectetur dignissimos minus deserunt.</p>\
<a href="./the-job.html"><button>Join Challenge</button></a>\
</div>`

for(let i=0;i<=4;i++){
    jobsContainer.innerHTML +=content;
}

