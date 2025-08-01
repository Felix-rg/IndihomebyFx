const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
        height: 500,
        indicators: true,
        transition: 500,
        interval: 2500
        });

const sideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav)

const collapSible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapSible);

const dropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdown);

const dropdown1 = document.querySelectorAll('.dropdown-trigger1');
        M.Dropdown.init(dropdown1);

const scroll = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scroll, {
                scrollOffset: 80
        })

