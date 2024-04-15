
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function() {
        let tabname = this.getAttribute("onclick").split("'")[1];
        for (let j = 0; j < tablinks.length; j++) {
            tablinks[j].classList.remove("active-link");
        }
        for (let j = 0; j < tabcontents.length; j++) {
            tabcontents[j].classList.remove("active-tab");
        }
        this.classList.add("active-link");
        document.getElementById(tabname.toLowerCase()).classList.add("active-tab");
    });
}



function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzuVW18G798Z6YpVqQEAuyguvAcbKbGE21QUVoJB_wpxWbO8tbTdsxJvm1-Sf8CR752/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent succesfully"
        setTimeout (function(){
          msg.innerHTML= ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
