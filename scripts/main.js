var descriptiveBox = document.getElementById("descriptiveBox");
var descriptiveText = document.getElementById("descriptiveText");
var debtReport = document.getElementById("debtReport");
var vacantReport = document.getElementById("vacantReport");
var collectionReport = document.getElementById("collectionReport");
var billingReport = document.getElementById("billingReport");
var crossIcon = document.getElementById("crossIcon");

var achievementList = document.getElementById('achievementList');

var homeSide = document.getElementById("homeSide")
var aboutMeSide = document.getElementById("aboutMeSide")
var resumeSide = document.getElementById("resumeSide")
var contactSide = document.getElementById("contactSide")


clickHandler = (jobName) => {

    if(jobName==="debtReport"){
        descriptiveText.innerHTML = "This is the description of Debt Report."
    } else if (jobName==="vacantReport"){
        descriptiveText.innerHTML = "This is the description of Vacant Report."
    } else if (jobName==="collectionReport"){
        descriptiveText.innerHTML = "This is the description of Collection Report."
    } else if (jobName==="billingReport"){
        descriptiveText.innerHTML = "This is the description of Billing Report."
    }

    descriptiveBox.style.display = "flex";
    descriptiveBox.style.flexDirection = "column";
    achievementList.style.display = "none";
}



colorSideBar = () => {

    let pageHeight = document.body.clientHeight;
    let currentHeight = document.documentElement.scrollTop;
    let normalColor = "rgba(228, 235, 232, 0.897)";
    let currentColor = "rgb(67, 94, 95)";

    if (currentHeight <= pageHeight * 0.125) {
        homeSide.style.backgroundColor = currentColor;
        aboutMeSide.style.backgroundColor = normalColor;
    } else if (currentHeight > pageHeight * 0.125 && currentHeight <= pageHeight * 0.375){
        homeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.backgroundColor = currentColor;
        resumeSide.style.backgroundColor = normalColor;
    } else if (currentHeight > pageHeight * 0.375 && currentHeight <= pageHeight * 0.625){
        aboutMeSide.style.backgroundColor = normalColor;
        resumeSide.style.backgroundColor = currentColor;
        contactSide.style.backgroundColor = normalColor;
    } else {
        resumeSide.style.backgroundColor = normalColor;
        contactSide.style.backgroundColor = currentColor;
    }
}



debtReport.addEventListener('click',clickHandler.bind(this,"debtReport"));
vacantReport.addEventListener('click',clickHandler.bind(this,"vacantReport"));
collectionReport.addEventListener('click',clickHandler.bind(this,"collectionReport"));
billingReport.addEventListener('click',clickHandler.bind(this,"billingReport"));
crossIcon.addEventListener('click',()=>{descriptiveBox.style.display = "none";
achievementList.style.display = "block";})


// console.log(document.documentElement.scrollTop)

// document.addEventListener('scroll',()=>{console.log(document.documentElement.scrollTop);})

document.addEventListener('scroll',colorSideBar);

