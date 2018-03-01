
var name = 'Gianluca';
console.log(name);

var age = 46;
console.log(age);

var info = ['Gianluca', 'Bragaglia', 46];
console.log(info);

var data = {name: 'Gianluca', age: 46};
console.log(data);

for(var i=0; i<info.length; i++) {
    console.log(info[i]);
    
}

var a = 23;
var b = 67;

if(a<b) {
    console.log(b);
    
}else{
    console.log(a);
    
}

var arr = [34, 56, 4, 78, 23];

for(var i=0; i<arr.length; i++) {
    
    if(arr[i] == arr[2]) {
        console.log("We are in the middle of loop");
        
    }
    console.log(arr[i]);
}

var myName = 'Gianluca';
var myAge = 46;

if(myName !== 'Gianluca' && myAge !== 46) {
    console.log("this is not you!");
    
}else{
    console.log("Hi!! Glad to see u again!");
    
}

var data2 = ['Gianluca', 'tony', 33, 'Bragaglia', 38, 46, 'mark', ];
for(i=0; i<data2.length; i++) {
    if(data2[i] == 'Gianluca' && data2[i] == 'Bragaglia' && data2[i] == 46) {
        console.log("We find your data!" );
        
    }
}