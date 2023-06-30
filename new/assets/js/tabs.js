function chooseTable(evt, sectionName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      console.log(tabcontent[i])
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  let 
  tabContents = document.querySelectorAll('.tabcontent'),
  hideTabContent = e => {
    tabContents.forEach(tab => {
      e.target.classList.add('hidden')
      if(tab.id = tabId){
        
      }
    })
  },
  menus = document.querySelectorAll(".nav-link")
  
  
  menus.forEach(menu => {
    menu.addEventListener('click', () => {
      hideTabContent(e)
    })
  })
