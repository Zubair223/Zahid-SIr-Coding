alert("connected successfully");

var navlink_Top_Left ={   
    'Monday, January 1, 2045':'Date.today',
 'Advertise':'contact.html',
 'Contact':'contact.html',
 'Login':'login.html'
}

var navlink_Top_Right ={   
    'fab fa-twitter':'Date.today',
 'fab fa-facebook-f':'contact.html',
 'fab fa-linkedin-in':'contact.html',
 'fab fa-instagram':'login.html',
 'fab fa-google-plus-g':'login.html',
 'fab fa-youtube':'login.html'
}

var navlink_mid ={   
    'Home':'index.html',    
 'Category':'category.html',
 'Single News':'single.html',
 'Dropdown':'dropdown',
 'Contact':'contact.html'
}
var navlink_mid_class =[
    "nav-item nav-link active",
    "nav-item nav-link",
    "nav-item nav-link",
    "nav-link dropdown-toggle",
    "nav-item nav-link"
]

var drop_inner ={   
   'Menu item1': '#',    
'Menu item2': '#',
'Menu item3': '#'
}


//debugger;
 let navbar = document.createElement('nav');
 navbar.className = ('navbar navbar-expand-sm bg-dark p-0');
 let ultag = document.createElement('ul');
 document.getElementById('abc').appendChild(navbar);
 ultag.className = ('navbar-nav mr-n2');
 //navbar.appendChild(ultag);
navbar.appendChild(ultag);
for(let i = 0; i < Object.keys(navlink_Top_Left).length ; i++) 
{
    
    let litag = document.createElement('li');
    //litag.innerHTML = updateDate();
 ultag.appendChild(litag);
 let a_tag =document.createElement('a'); 
 a_tag.className = 'nav-link text-body small';
 a_tag.setAttribute('href', Object.values(navlink_Top_Left)[i]);
 
 
 let linkText = document.createTextNode(Object.keys(navlink_Top_Left)[i]);
 a_tag.appendChild(linkText);
 litag.appendChild(a_tag);
}




let navbar2 = document.createElement('nav');
 navbar2.className = ('navbar navbar-expand-sm bg-dark p-0');
let ult = document.createElement('ul');
document.getElementById('bcd').appendChild(navbar2);
ult.className = ('navbar-nav ml-auto mr-n2');
 //navbar.appendChild(ultag);
navbar2.appendChild(ult);

for(let i = 0; i < Object.keys(navlink_Top_Right).length ; i++) 
{
    
    let litag = document.createElement('li');
    //litag.innerHTML = updateDate();
 ult.appendChild(litag);
 let a_tag =document.createElement('a'); 
 a_tag.className = 'nav-link text-body';
 litag.className = 'nav-item';
 a_tag.setAttribute('href', Object.values(navlink_Top_Right)[i]);
 let smalltag = document.createElement('small');
 
 let linkText =  smalltag.className = Object.keys(navlink_Top_Right)[i];
 a_tag.appendChild(smalltag);
// a_tag.appendChild(linkText);
 litag.appendChild(a_tag);
 
}

let news = document.getElementById('news_Name');

let a_tag =document.createElement('a'); 
 a_tag.className = 'navbar-brand p-0 d-none d-lg-block';
 a_tag.setAttribute('href', '#');
 let h1 = document.createElement('h2');
 h1.className = 'm-0 display-22 text-uppercase text-primary';
 h1.innerHTML = 'Programer ';
 
 let span = document.createElement('span');
 span.className = 'text-secondary font-weight-normal';
 span.innerHTML = 'Codes';
 h1.appendChild(span);
 a_tag.appendChild(h1);
 news.appendChild(a_tag);




  let html_codex = document.getElementById('codex');
  let a_tag3 = document.createElement('a'); 
  a_tag3.className = 'img-fluid';
  a_tag3.setAttribute('href', 'https://htmlcodex.com');
  let img_tag =document.createElement('img'); 
  img_tag.src = 'img/ads-728x90.png';
  a_tag3.append(img_tag);
  html_codex.append(a_tag3);



debugger;
  var navbar_mid = document.getElementById('nav_bar');
  navbar_mid.className = 'navbar-nav mr-auto py-0';
  var dropdown_div = document.createElement("div");
  dropdown_div.className = "nav-item dropdown";
 var dropdown_innerdiv = document.createElement("div");
  dropdown_innerdiv.className = "dropdown-menu rounded-0 m-0";
  for(let i=0; i<Object.keys(navlink_mid).length; i++)
  {
      var a_nav = document.createElement('a');
      a_nav.className = navlink_mid_class[i];
      
      a_nav.setAttribute('href', Object.values(navlink_mid)[i]);
      let linkText = document.createTextNode(Object.keys(navlink_mid)[i]);
      a_nav.appendChild(linkText);
      
      
      
        if(a_nav.className ==  'nav-link dropdown-toggle')
       {
           //navbar_mid.appendChild(dropdown_div);
           a_nav.setAttribute('data-toggle', 'dropdown');
           dropdown_div.appendChild(a_nav);
          

            for(let i=0; i<Object.keys(drop_inner).length; i++)
            {
             let a_nav1 = document.createElement('a');
           
             a_nav1.className = 'dropdown-item';

             a_nav1.setAttribute('href', Object.values(drop_inner)[i]);
            let linkText2 = document.createTextNode(Object.keys(drop_inner)[i]);
             a_nav1.appendChild(linkText2);
       
             dropdown_innerdiv.appendChild(a_nav1);
       
            }

            dropdown_div.appendChild(dropdown_innerdiv);

         navbar_mid.appendChild(dropdown_div);
             continue; //
    }
        navbar_mid.appendChild(a_nav);
  
  }



let search_div = document.getElementById('search');
let input_text = document.createElement('input');

input_text.className = 'form-control border-0';
input_text.setAttribute("type", "text");
input_text.setAttribute('placeholder','Search here ...');
let innerdiv = document.createElement('div');
innerdiv.className = 'input-group-append';
let btn = document.createElement('button');
btn.className = 'input-group-text bg-primary text-dark border-0 px-3';
let i_tag = document.createElement('i');
i_tag.className = 'fa fa-search';

btn.appendChild(i_tag);
innerdiv.appendChild(btn);
search_div.appendChild(input_text);
search_div.appendChild(innerdiv);





debugger;
let img_src = ['img/news-800x500-1.jpg','img/news-800x500-2.jpg','img/news-800x500-3.jpg'];
var div_id = ['first', 'second', 'third'];

for(let i = 0; i < div_id.length; i++)
{
  let divimg1 = document.getElementById(div_id[i]);
  let img5 = document.createElement('img');
  img5.className = 'img-fluid h-100';
  img5.src = img_src[i];
  img5.style.objectFit = 'cover';
  divimg1.appendChild(img5);




  
  let divinner1 = document.createElement('div');
  divinner1.className = 'overlay';



  let divinner2 = document.createElement('div');
  divinner2.className = 'mb-2';


 let a_tag_inner21 = document.createElement('a');
 a_tag_inner21.className = 'badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2';
 a_tag_inner21.setAttribute('href','#');

 let linkText1 = document.createTextNode("Business");
 a_tag_inner21.appendChild(linkText1);
let a_tag_inner22 = document.createElement('a');
a_tag_inner22.className = 'text-white';
a_tag_inner22.setAttribute('href','#');
//a_tag.setAttribute('tex
let linkText2 = document.createTextNode("Jan 01, 2045");
a_tag_inner22.appendChild(linkText2);
 let a_tag_inner1 = document.createElement('a');
 a_tag_inner1.className = 'h2 m-0 text-white text-uppercase font-weight-bold';
 a_tag_inner1.setAttribute('href','#');

 let linkText3 = document.createTextNode("Lorem ipsum dolor sit amet elit. Proin vitae porta diam...");
 a_tag_inner1.appendChild(linkText3);
  divinner1.appendChild(a_tag_inner1);
  divinner2.appendChild(a_tag_inner21);
    divinner2.appendChild(a_tag_inner22);
  divinner1.appendChild(divinner2);
 divimg1.appendChild(divinner1);
}




debugger;

let img_src2 = ['img/news-700x435-1.jpg','img/news-700x435-2.jpg','img/news-700x435-3.jpg','img/news-700x435-4.jpg'];

var div_id_4 = ['ft', 'sd', 'td','fh'];

// for(let i=0; i<img_src2.length; i++) 
// {
// //   let img = document.createElement('img');
// //   img.src = img_src2[i];
// //   img.setAttribute('style', 'objectFit: cover;');
// //   div_4img.appendChild(img);

// //  let inner_div1 = document.createElement('div');
// //  inner_div1.className = 'mb-2';
// //  let a_tag = document.createElement('a');

// }
for(let i = 0; i < div_id_4.length; i++)
{
  let div_4imgid = document.getElementById(div_id_4[i]);
  //let divimg1 = document.getElementById(div_id[i]);
  let img5 = document.createElement('img');
  img5.className = 'img-fluid w-100 h-100';
  img5.src = img_src2[i];
  img5.style.objectFit = 'cover';
  div_4imgid.appendChild(img5);




  
  let divinner1 = document.createElement('div');
  divinner1.className = 'overlay';



  let divinner2 = document.createElement('div');
  divinner2.className = 'mb-2';


 let a_tag_inner21 = document.createElement('a');
 a_tag_inner21.className = 'badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2';
 a_tag_inner21.setAttribute('href','#');

 let linkText1 = document.createTextNode("Business");
 a_tag_inner21.appendChild(linkText1);
let a_tag_inner22 = document.createElement('a');
a_tag_inner22.className = 'text-white';
a_tag_inner22.setAttribute('href','#');
//a_tag.setAttribute('tex
let linkText2 = document.createTextNode("Jan 01, 2045");
a_tag_inner22.appendChild(linkText2);
 let a_tag_inner1 = document.createElement('a');
 a_tag_inner1.className = 'h2 m-0 text-white text-uppercase font-weight-bold';
 a_tag_inner1.setAttribute('href','#');

 let linkText3 = document.createTextNode("Lorem ipsum dolor sit amet elit. Proin vitae porta diam...");
 a_tag_inner1.appendChild(linkText3);
  divinner1.appendChild(a_tag_inner1);
  divinner2.appendChild(a_tag_inner21);
    divinner2.appendChild(a_tag_inner22);
  divinner1.appendChild(divinner2);
 div_4imgid.appendChild(divinner1);
}



debugger;

let div_news = document.getElementById('breaking_news');

let div_newsText = document.createElement('div');
div_newsText.className = 'bg-primary text-dark text-center font-weight-medium py-2';
div_newsText.style.width = '170px';
div_newsText.innerHTML = 'Breaking News';

div_news.append(div_newsText);


let div_corusel = document.createElement('div');
div_corusel.className = 'owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3';
// div_corusel.setAttribute('width', ' calc(100% - 170px');
 div_corusel.style.width = ' calc(100% - 170px)';

div_corusel.style.paddingRight = '90px';
//div_corusel.setAttribute('paddingRight', '90px');

for(let i = 0; i < 2; i++) 
{
 let  div_inner_news1 = document.createElement('div');
 div_inner_news1.className = 'text-truncate';
 let a_tag_news = document.createElement('a');
 a_tag_news.className = 'text-white text-uppercase font-weight-semi-bold';
 a_tag_news.setAttribute('href', '#')
 //a_tag_news
 let link = document.createTextNode("Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales");
  a_tag_news.append(link);
  div_inner_news1.append(a_tag_news);
  div_corusel.append(div_inner_news1);
}
//div_inner_news2 = document.createElement('div');

div_news.append(div_corusel);
