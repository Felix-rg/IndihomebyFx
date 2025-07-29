const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
        height: 500,
        indicators: true,
        transition: 500,
        interval: 2500
        });

const sideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav)