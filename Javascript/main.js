
var div1=document.getElementById('div-1');
var button=document.createElement('button');
var alertButton=document.getElementById('btn');
console.log("div-1",div1);


button.textContent="Click me";
button.style.backgroundColor="blue";
button.style.color="green";
console.log('Btn',button);

div1.appendChild(button);
button.style.backgroundColor="blue";
button.style.color="white"

button.onclick=function(){alert("Click me")};

function showAlert(){
    alert("I'm an alertt button");
}

alertButton.addEventListener('click',showAlert);

function Largest(arr){
    var index=-1;
    var LargestElement=-1;
}

for(var i=0;i<arr.length;i++){
    if(arr[i]>largestElement){
largestElement=arr[i];
index=i;
    }

}
console.log(largestElement);