document.getElementsByTagName("body")[0].onresize = () => {

    svgResolution0 = 1920/1088;
    svgResolution1 = 1920/3261;
    svgResolution2 = 1920/1380;
    screenWidth = window.innerWidth;
    if(screenWidth < 1920) {
        document.getElementById("svg-container0").setAttribute("height", (screenWidth/svgResolution0).toString()+"px");
        document.getElementById("svg-container").setAttribute("height", (screenWidth/svgResolution1).toString()+"px");
        document.getElementById("svg-container2").setAttribute("height", (screenWidth/svgResolution2).toString()+"px");
    }

}

