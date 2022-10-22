/*
//Menu dropwdown
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems, {
        isScrollable: false,
        hover: true,
        coverTrigger: false,
        constrainWidth: true,
    });
  });

//Menu para celular
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {
        draggable: true
    });
  });
*/

  //Tabs
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.tabs');
  let instances = M.Tabs.init(elems, {
    swipeable:false
  })
})