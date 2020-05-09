    //Basic&Managing Elements
// var array = [1, 2, 3];
// console.log(array.length);

// var array = [1, 2, 3];
// console.log(array.length);
// console.log(array[1]);

// var array = [1, 2, 3];
// array[1] = 100;
// console.log(array);

// var array = [1, 2, 3];
// array[3] = 100;
// console.log(array);

// var array = [1, 2, 3];
// array[5] = 100;
// console.log(array);



    //forEach() Method
// var array = [1, 2, 3];
// array.forEach(function(element) {
//     console.log(element);
// })



    //Working with Elements: Push, Pop, Unshift and Shift
// var array = [1, 2, 3];
// array.push(4);
// console.log(array);

// var array = [1, 2, 3,];
// array.push(4);
// console.log(array);

// var array = [1, 2, 3,,];
// console.log(array);

// var array = [1, 2, 3,,];
// array.push(4);
// console.log(array);

// var array = [1, 2, 3, 4];
// array.pop();
// console.log(array);

// var array = [1, 2, 3, 4];
// console.log(array.pop());
// console.log(array);

// var array = [1, 2, 3, 4];
// console.log(array.shift());
// console.log(array);

// var array = [1, 2, 3, 4];
// array.unshift('new');
// console.log(array);



    //Working with Parts of an Array: IndexOf, Splice and Slice
// var array = [1, 2, 3, 4];
// array.unshift('new');
// console.log(array.indexOf('new'));

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// console.log(array);

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// var newArray = array.splice(3);
// console.log(array);

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// var newArray = array.splice(2, 2);
// console.log(newArray);
// console.log(array);

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// var newArray = array.slice(2, 4);
// console.log(newArray);
// console.log(array);



    //Filtering, Mapping and Reversing Array Elements
// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// console.log(array.filter(function(value) {
//     return value > 2;
// }));

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// console.log(array.map(function(value) {
//     return value * 2;
// }));
// //for first element 'new' will return a NaN because this element is not a number, it's a string!

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// console.log(array.map(function(value) {
//     return value * 2;
// }));
// console.log(array);
// //for first element 'new' will return a NaN because this element is not a number, it's a string!

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// console.log(array.reverse());
// console.log(array);



    //The Difference between Concat and Join
// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// var newArray = ['join', 'me']
// console.log(array.concat(newArray));
// console.log(array);
// console.log(newArray);

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// var newArray = ['join', 'me']
// console.log(array.join(newArray));
// console.log(array);
// console.log(newArray);

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// var newArray = ['join', 'me']
// console.log(array.join(', '));
// console.log(array);
// console.log(newArray);

// var array = [1, 2, 3, 4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';
// var newArray = ['join', 'me']
// console.log(array.join(', ' + newArray + ', '));
// console.log(array);
// console.log(newArray);




    //Reducing Arrays
// var array = [1, 2, 3, 4];
// console.log(array.reduce(function(total, value) {
//     return total + value;
// }));
// console.log(array);

// var array = [1, 2, 3, 4];
// console.log(array.reduce(function(total, value) {
//     console.log('Total:' + total + ', Value: ' + value);
//     return total + value;
// }));
// console.log(array);