if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("card-info").style.flexDirection = "column";
    document.getElementById("card-info").style.height = "450px";
    document.getElementById("photo").style.width = "auto";
}