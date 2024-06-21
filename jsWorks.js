 function validate() {
         let text;
            if( document.myForm.name.value == "" ) {
               text = "Name cannot be empty";
               document.getElementById("demo").innerHTML = text;
               document.myForm.name.focus() ;
               return false;
            }
            if( document.myForm.email.value == "" ) {
               text = "E-mail cannot be empty";
               document.getElementById("demo").innerHTML = text;
               document.myForm.email.focus() ;
               return false;
            }
       var emailID = document.myForm.email.value;
       atposn = emailID.indexOf("@");
       dotposn = emailID.lastIndexOf(".");
       if (atposn < 1 || ( dotposn - atposn < 2 )) {
       text = "Please enter valid email ID";
       document.getElementById("demo").innerHTML = text;
       document.myForm.email.focus() ;
       return false;
     }
            if( document.myForm.phone.value == "" || isNaN( document.myForm.phone.value ) ||
               document.myForm.phone.value.length != 10 ) {
               text = "Please enter a valid 10-digit phone number";
               document.getElementById("demo").innerHTML = text;
               document.myForm.phone.focus() ;
               return false;
            }
            if( document.myForm.subject.value == "0" ) {
               text = "Please provide your area of expertise";
               document.getElementById("demo").innerHTML = text;
               return false;
            }
            return( true );
         }



 let arr = {}
 let i = 0
 document.querySelector(`.but1`).addEventListener(`click`, () => {
     let div = document.createElement(`div`)
     let p = document.createElement(`p`)
     let input = document.querySelector(`.input_1`)
     let buttonFromP = document.createElement(`button`)
         buttonFromP.classList.add(`buttonP`)
         buttonFromP.textContent = `Удалить`

     if(input.value.trim() !== ``) {
          document.querySelector(`.to-do`).style.cssText = `border: 1px solid black; `
          div.classList.add(`exer`)
          p.textContent = document.querySelector(`.input_1`).value
          p.style.margin = `0px`
          p.style.display = `inline-block`

          document.querySelector(`.to-do`).append(div)
          div.appendChild(p)
          div.append(buttonFromP)

          input.value = ``
          arr[`Task ${i += 1}`]  = p.textContent
          localStorage.setItem(`tasks`, JSON.stringify(arr))
           } else {
               input.value = ``
               return
           }
          buttonFromP.addEventListener(`click`, () => {
             div.remove()
          })
       })