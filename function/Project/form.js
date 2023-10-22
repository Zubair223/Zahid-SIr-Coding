let x = document.createElement('div');
//let arr = ['firstname']
let label = document.createElement('label');
label.setAttribute('for',"f");
label.textContent = 'First Name : ';
//input.appendChild(label);
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'f');
input.setAttribute('name', 'fname');
//input.setAttribute('value',"hello world")
input.setAttribute('placeholder','Enter your first name');
x.appendChild(label);

x.appendChild(input);
x.appendChild(document.createElement('br'));





let label2 = document.createElement('label');
label2.setAttribute('for',"l");
label2.textContent = 'Last Name : ';
//input.appendChild(label);
let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('id', 'l');
input2.setAttribute('name', 'lname');
//input.setAttribute('value',"hello world")
input2.setAttribute('placeholder','Enter your last name');

x.appendChild(label2);

x.appendChild(input2);

let y = document.getElementById('main');
y.appendChild(x);

let btn = document.createElement('button');
let err = document.createElement('span');
x.appendChild(err);
let err1 = document.createElement('span');
x.appendChild(err1);
btn.addEventListener('click', () =>{
    err1.setAttribute('style', 'display:none');
    if(input.value != "" || input2.value != "")
{
     err.setAttribute('style', 'display:block;');
    if(input.value.length <=3 || input2.value.length <= 3)
    {
        err.id = 'errfname';
        
        err.innerHTML = "*Name is too short";
        err.style.color = 'red';
    }
    else
    {
             err.setAttribute('style', 'display:none;');
    }

}
else{
    err.setAttribute('style', 'display:none;');
            err1.setAttribute('style', 'display:block;');
        err1.id = 'err';
        
        err1.innerHTML = "*value can't be empty";
        err1.style.color = 'red';
}
});
btn.setAttribute('type', 'button');
btn.setAttribute('id', 'btn');
//btn.setAttribute('title','Create');
//btn.setAttribute('disabled', 'disabled');
//btn.setAttribute('value', 'Create');
btn.textContent = 'Create';
//btn.style.marginTop = '110px';

x.appendChild(document.createElement('br'));
x.appendChild(btn);