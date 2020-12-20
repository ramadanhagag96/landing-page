/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//add section to page when clicking button
function addsecpage(){
            //select all sections
     secs=document.querySelectorAll("section");
     let lastsecid=secs.length+1;
            //select one section
     sec=document.querySelector("section");
            //copy the section 
     let sec1 = sec.cloneNode(true);
          //set id , data-nave , h2 
     sec1.id="section"+lastsecid;
            
     let txt= sec1.getAttribute("data-nav");
    
     txt="section "+lastsecid;

     sec1.setAttribute("data-nav",txt);
    
     sec1.querySelector("h2").textContent="section "+lastsecid;
         //know last section on page to appen new section to it 
     k=lastsecid-1;
     c="section" + k;
     v=document.getElementById(c);
     v.insertAdjacentElement("afterend", sec1);
}
        
        



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildnavbar(){ 
            // clear navbar
        document.getElementById("navbar__list").innerHTML="";
        nav1= document.getElementById("navbar__list");
            //select all section 
        secs=document.querySelectorAll("section");
       for(let i=0; i< secs.length;i++)
       {
       //create li , a 
           let  se=document.createElement("li");
           let link = document.createElement("a");
           //set data to a tag 
           link.setAttribute("href","#" + secs[i].id );
           link.id=secs[i].id+"link";
           let data1 = secs[i].getAttribute("data-nav");
           link.textContent=data1;
           link.classList.add("menu__link");
           se.appendChild(link);
           document.getElementById("navbar__list").appendChild(se);
       }
}
   

        
// Add class 'active' to section when near top of viewport

function is_in_view(elem) {
       //know element position
      const sec_rect = elem.getBoundingClientRect();

 
       if(  sec_rect.top >= 0 && sec_rect.top <= 150 ){
  
          
            return true;}
       else{
           
       return false;
       }
}
   
// add eventlistener when scrolling and add active class to section and link 

                //call function
function addsec()
   {
     addsecpage();
    buildnavbar();
    
    }
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/




 

// build the nav
    buildnavbar();       


 // Scroll to section on link click
const navbar = document.getElementById('navbar__list')
      //add event listener
navbar.addEventListener('click', function(ev){
     ev.preventDefault();
     x=ev.target.id;
    //extract section id 
    let r = x.substr(0, 8);
    document.getElementById(r).scrollIntoView({ behavior: "smooth" });
   
});

// Set sections as active
document.addEventListener('scroll', () => {
    
    secsn=document.querySelectorAll('section').forEach(ele => {
         if (is_in_view(ele)) {
             document.querySelector('.activelink')?.classList.remove('activelink');
             document.getElementById(ele.id+"link").classList.add('activelink');
             document.querySelector('.your-active-class')?.classList.remove('your-active-class');
             document.querySelector("#"+ele.id).classList.add('your-active-class');
         }
     }) 
       
            
              
        
                     
            
          
});





  


 




