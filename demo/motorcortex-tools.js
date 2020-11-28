(function(){
    const toolset = document.getElementById('motorcortex-tools');
    const logo = document.getElementById('motorcortex-logo');
    const menu = document.getElementById('menu');

    toolset.addEventListener('mouseenter', ()=>{
        menu.style.transform = "translateX(30%)";
        logo.style.transform = "scale(1)";
        toolset.style.background = "#323232";
        logo.style.background = "#323232";
        logo.style.top = "6px";
    });

    toolset.addEventListener('mouseleave', ()=>{
        menu.style.transform = "translateX(-100%)";
        logo.style.transform = "scale(0.8)";
        toolset.style.background = "#282828";
        logo.style.background = "#282828";
        logo.style.top = "-6px";
    });
})();