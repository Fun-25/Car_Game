var books = {name:"RD Sharma",price:200,releaseYear:2020}; //method 1
console.log(books);

var key="price"; //changing values in the above list
var books={}; //empty object
var books=new Object(); //empty object 
console.log(books);       // {}
console.log(new Object()); // {}
books[key]=20;
console.log(books);
var books = {};
books.name="RD Sharma";
books["name"]="R Sharma"; // doesn't change values in the above list
console.log(books);

var obj=Object.create(null); // //empty object // [Object: null prototype] {}
console.log(obj);

function Largest(var arr){
    var index=-1;
    var LargestElement=-1;
}

for(var i=0;i<arr.length;i++){
    if(arr[i]>largestElement){
largestElement=arr[i];
index=i;
    }
return index;
}


console.log(largest([1,2,3,4]));