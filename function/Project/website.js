let head = document.getElementsByTagName('header')[0];
let img = document.createElement('img');
img.src="https://gumlet.assettype.com/greaterkashmir/2021-05/c34229b4-703a-4b01-a0c0-7d418d5d3a8e/PrimaryLogo.png?format=webp&w=300&dpr=1.0";
head.appendChild(img);
img.style.paddingTop = "5px";
head.style.textAlign = 'center';
head.style.backgroundColor = '#ebebeb';
//head.style.color = 'white';
 head.style.height = '55px';
head.style.marginTop= '-6px'; // Add margin to prevent overlapping
//head.style.fontSize = '45px';
let p = document.createElement('h1');
p.innerHTML = 'Programmer Times';
img.addEventListener('mouseover', function() {
   img.style.backgroundColor = '#6c757d'; // Change background color on hover
   //img.style.marginLeft = '-40px';
   head.style.marginTop = '-20px';
   p.setAttribute('style','display: block;');
   img.setAttribute('style','display: none;');
   head.appendChild(p);
   //p.style.fontSize = '55px';
   //head.style.textAlign = 'center';
   //this.style.cursor = 'pointer';
});

//  Attach event listener for mouseout
img.addEventListener('mouseout', function() {
   head.style.marginTop = '-7px';
   img.style.backgroundColor = ''; // Reset background color on mouseout
   img.setAttribute('style','display: inline;');
   p.setAttribute('style','display: none;');
   
});


let body =document.getElementById('main');
body.appendChild(head);



let div1 = document.createElement('div');
let nav1 = document.getElementsByTagName('nav')[0];
// div1.innerHTML = 'eofjeo';
// nav1.append(div1);

//body.appendChild(nav1);

 let arr = ["Home", "Latest News", "Today's Paper", "Kashmir", "Bussiness", "World"];

//   let ultag = document.createElement("ul");
//   let litag = document.createElement("li");
//   litag.innerHTML = "This is the li tag";
//   ultag.appendChild(litag);
//   div1.appendChild(ultag);
//  nav1.appendChild(div1);
//  body.appendChild(nav1);

div1.style.width = "100%";
div1.style.float = 'left';

let ultag = document.createElement("ul");

for(let i = 0; i <arr.length; i++) 
{
    var litag = document.createElement("li");
    litag.innerHTML = arr[i];
    
    litag.style.color = 'white';
    litag.style.fontSize = '18px';
   // litag.style.backgroundColor = 'green';
    // litag.style.border = '1px solid';
     litag.style.borderRadius = '8px';



   // litag.textContent.style.color = 'white';
    // litag.style.position = 'relative';
    // litag.style.left = '100px';

    
    // Attach event listener for mouseover
    litag.addEventListener('mouseover', function() {
       this.style.backgroundColor = '#6c757d'; // Change background color on hover
       this.style.cursor = 'pointer';
    });
    
   //  Attach event listener for mouseout
    litag.addEventListener('mouseout', function() {
       this.style.backgroundColor = ''; // Reset background color on mouseout
    });
  
    //div2.innerHTML = "jjregoiprrgkrepgkp";

   
    litag.addEventListener('click',() => {
          
      div2.innerHTML = Object.values(obj)[i];//obj[i].i;
      //above code used to trigger keys of object in string type
   
   });
  
    litag.style.float = 'left';
    //div1.style.height  = "50px";
    litag.style.listStyle  = "none";
    litag.style.width  = "120px";
    litag.style.height  = "30px";
    litag.style.textAlign  = "center";
     litag.style.marginLeft = "50px";
     //litag.style.pa = "50px";
     litag.style.paddingTop = "10px";
     litag.style.marginTop = "-10px";
     litag.style.marginBottom = "8px";
    // litag.style.paddingBottom = "15px";
    //litag.style.
    // litag.style.listStyle = 'none';
    ultag.appendChild(litag);
}




/*let obj = ["home content", "latest news content","today's  content", "kashmir content", "business content", "world content"];*/
 //for array


/*let obj = [{
   0:"home content",
   1:"latest news content",
   2:"today's  content",
   3: "kashmir content", 
   4:"business content", 
   5:"world content"}
   ];*/
//for array of objects

// let obj = {
//    0:"home content",
//    1:"latest news content",
//    2:"today's  content",
//    3: "kashmir content", 
//    4:"business content", 
//    5:"world content"}
   //only object with keys in numbers

let obj = {
   home:`
   <h2 style= "text-align: center">Welcome to Our Website!</h2>
   <p>We are your trusted source for comprehensive and timely news coverage. Our mission is to keep you informed about the latest developments, events, and stories from around the world. With a team of dedicated journalists and reporters, we strive to deliver accurate and balanced news that matters to you.</p>
   <p>Our website is designed to provide you with easy access to a wide range of topics. Whether you're interested in local news, international affairs, business trends, or cultural insights, we have you covered. Our goal is to empower you with knowledge and understanding, enabling you to make informed decisions.</p>
   <p>In the "Latest News" section, you'll find real-time updates on current events. Our reporters are on the ground, bringing you breaking news as it happens. From politics and science to entertainment and sports, we curate stories that impact your world.</p>
   <p>Explore "Today's Paper" to discover a comprehensive compilation of news articles, editorials, and analyses. We understand the importance of in-depth reporting, and this section is your gateway to a wealth of information that goes beyond headlines.</p>
   <p>For those interested in the Kashmir region, our "Kashmir" section provides insights into the local culture, politics, and social dynamics. We believe in representing diverse perspectives and giving voice to the issues that matter most to the people of Kashmir.</p>
   <p>In the "Business" section, you'll find updates on financial markets, industry trends, and business strategies. Whether you're an investor, entrepreneur, or simply curious about the economy, this section offers valuable insights into the world of commerce.</p>
   <p>Our "World" section takes you on a global journey, highlighting stories from different countries and cultures. In an interconnected world, understanding international affairs is crucial, and this section aims to foster cross-cultural understanding and awareness.</p>
  `,
   latest:`
   
   <p>Our website is designed to provide you with easy access to a wide range of topics. Whether you're interested in local news, international affairs, business trends, or cultural insights, we have you covered. Our goal is to empower you with knowledge and understanding, enabling you to make informed decisions.</p>
   <p>We are your trusted source for comprehensive and timely news coverage. Our mission is to keep you informed about the latest developments, events, and stories from around the world. With a team of dedicated journalists and reporters, we strive to deliver accurate and balanced news that matters to you.</p>
   <p>For those interested in the Kashmir region, our "Kashmir" section provides insights into the local culture, politics, and social dynamics. We believe in representing diverse perspectives and giving voice to the issues that matter most to the people of Kashmir.</p>
   <p>In the "Business" section, you'll find updates on financial markets, industry trends, and business strategies. Whether you're an investor, entrepreneur, or simply curious about the economy, this section offers valuable insights into the world of commerce.</p>
   <p>Our "World" section takes you on a global journey, highlighting stories from different countries and cultures. In an interconnected world, understanding international affairs is crucial, and this section aims to foster cross-cultural understanding and awareness.</p>
   <p>In the "Latest News" section, you'll find real-time updates on current events. Our reporters are on the ground, bringing you breaking news as it happens. From politics and science to entertainment and sports, we curate stories that impact your world.</p>
   <p>Explore "Today's Paper" to discover a comprehensive compilation of news articles, editorials, and analyses. We understand the importance of in-depth reporting, and this section is your gateway to a wealth of information that goes beyond headlines.</p>
  `,
   today:`
   <p>In the "Latest News" section, you'll find real-time updates on current events. Our reporters are on the ground, bringing you breaking news as it happens. From politics and science to entertainment and sports, we curate stories that impact your world.</p>
   <p>Explore "Today's Paper" to discover a comprehensive compilation of news articles, editorials, and analyses. We understand the importance of in-depth reporting, and this section is your gateway to a wealth of information that goes beyond headlines.</p>
   
   <p>Our website is designed to provide you with easy access to a wide range of topics. Whether you're interested in local news, international affairs, business trends, or cultural insights, we have you covered. Our goal is to empower you with knowledge and understanding, enabling you to make informed decisions.</p>
   <p>Our "World" section takes you on a global journey, highlighting stories from different countries and cultures. In an interconnected world, understanding international affairs is crucial, and this section aims to foster cross-cultural understanding and awareness.</p>
   <p>For those interested in the Kashmir region, our "Kashmir" section provides insights into the local culture, politics, and social dynamics. We believe in representing diverse perspectives and giving voice to the issues that matter most to the people of Kashmir.</p>
   <p>In the "Business" section, you'll find updates on financial markets, industry trends, and business strategies. Whether you're an investor, entrepreneur, or simply curious about the economy, this section offers valuable insights into the world of commerce.</p>
   <p>We are your trusted source for comprehensive and timely news coverage. Our mission is to keep you informed about the latest developments, events, and stories from around the world. With a team of dedicated journalists and reporters, we strive to deliver accurate and balanced news that matters to you.</p>
  `,
   kashmir: `
   
   <p>In the "Business" section, you'll find updates on financial markets, industry trends, and business strategies. Whether you're an investor, entrepreneur, or simply curious about the economy, this section offers valuable insights into the world of commerce.</p>
   <p>We are your trusted source for comprehensive and timely news coverage. Our mission is to keep you informed about the latest developments, events, and stories from around the world. With a team of dedicated journalists and reporters, we strive to deliver accurate and balanced news that matters to you.</p>
   <p>For those interested in the Kashmir region, our "Kashmir" section provides insights into the local culture, politics, and social dynamics. We believe in representing diverse perspectives and giving voice to the issues that matter most to the people of Kashmir.</p>
   <p>Our website is designed to provide you with easy access to a wide range of topics. Whether you're interested in local news, international affairs, business trends, or cultural insights, we have you covered. Our goal is to empower you with knowledge and understanding, enabling you to make informed decisions.</p>
   <p>Our "World" section takes you on a global journey, highlighting stories from different countries and cultures. In an interconnected world, understanding international affairs is crucial, and this section aims to foster cross-cultural understanding and awareness.</p>
   <p>Explore "Today's Paper" to discover a comprehensive compilation of news articles, editorials, and analyses. We understand the importance of in-depth reporting, and this section is your gateway to a wealth of information that goes beyond headlines.</p>
   <p>In the "Latest News" section, you'll find real-time updates on current events. Our reporters are on the ground, bringing you breaking news as it happens. From politics and science to entertainment and sports, we curate stories that impact your world.</p>
   `, 
   busines:`
   <p>For those interested in the Kashmir region, our "Kashmir" section provides insights into the local culture, politics, and social dynamics. We believe in representing diverse perspectives and giving voice to the issues that matter most to the people of Kashmir.</p>
   
   <p>Our website is designed to provide you with easy access to a wide range of topics. Whether you're interested in local news, international affairs, business trends, or cultural insights, we have you covered. Our goal is to empower you with knowledge and understanding, enabling you to make informed decisions.</p>
   <p>We are your trusted source for comprehensive and timely news coverage. Our mission is to keep you informed about the latest developments, events, and stories from around the world. With a team of dedicated journalists and reporters, we strive to deliver accurate and balanced news that matters to you.</p>
   <p>Explore "Today's Paper" to discover a comprehensive compilation of news articles, editorials, and analyses. We understand the importance of in-depth reporting, and this section is your gateway to a wealth of information that goes beyond headlines.</p>
   <p>In the "Business" section, you'll find updates on financial markets, industry trends, and business strategies. Whether you're an investor, entrepreneur, or simply curious about the economy, this section offers valuable insights into the world of commerce.</p>
   <p>Our "World" section takes you on a global journey, highlighting stories from different countries and cultures. In an interconnected world, understanding international affairs is crucial, and this section aims to foster cross-cultural understanding and awareness.</p>
   <p>In the "Latest News" section, you'll find real-time updates on current events. Our reporters are on the ground, bringing you breaking news as it happens. From politics and science to entertainment and sports, we curate stories that impact your world.</p>
  `, 
   world:`
   
   <p>Our website is designed to provide you with easy access to a wide range of topics. Whether you're interested in local news, international affairs, business trends, or cultural insights, we have you covered. Our goal is to empower you with knowledge and understanding, enabling you to make informed decisions.</p>
   <p>We are your trusted source for comprehensive and timely news coverage. Our mission is to keep you informed about the latest developments, events, and stories from around the world. With a team of dedicated journalists and reporters, we strive to deliver accurate and balanced news that matters to you.</p>
   <p>In the "Business" section, you'll find updates on financial markets, industry trends, and business strategies. Whether you're an investor, entrepreneur, or simply curious about the economy, this section offers valuable insights into the world of commerce.</p>
   <p>In the "Latest News" section, you'll find real-time updates on current events. Our reporters are on the ground, bringing you breaking news as it happens. From politics and science to entertainment and sports, we curate stories that impact your world.</p>
   <p>For those interested in the Kashmir region, our "Kashmir" section provides insights into the local culture, politics, and social dynamics. We believe in representing diverse perspectives and giving voice to the issues that matter most to the people of Kashmir.</p>
   <p>Explore "Today's Paper" to discover a comprehensive compilation of news articles, editorials, and analyses. We understand the importance of in-depth reporting, and this section is your gateway to a wealth of information that goes beyond headlines.</p>
   <p>Our "World" section takes you on a global journey, highlighting stories from different countries and cultures. In an interconnected world, understanding international affairs is crucial, and this section aims to foster cross-cultural understanding and awareness.</p>
   `}
   //only object with keys in strings


let div2 = document.createElement('div');

//div2.innerHTML = Object.keys(obj)[0];
div2.innerHTML = Object.values(obj)[0];

//ultag.appendChild(litag);    //if i put it here then it shows only first[0]th element
 div1.appendChild(ultag);
 nav1.appendChild(div1);
 body.appendChild(nav1);

 div1.style.backgroundColor = '   #052230';

 //nav1.style.float = 'left';



//div2.innerHTML = obj[0][0];

//div2.innerHTML = obj[0];


   main.appendChild(div2);
   


// //div2.innerHTML = obj.arr;
// obj.arr.forEach((element) => {
//    let p = document.createElement('p');
//    var i=0;
//    addEventListener('click',() => {
      
//       if(element == arr[i])
//          p.textContent = element;
//       i++;
//       div2.appendChild(p);
//    });
   
   
// })//.filter((element) => (''));


