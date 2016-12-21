//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...

	function rbkStudents(name,age,education,nationality){
		return {
		 name: name,
		 age:age,
		 education:education,
		 nationality:nationality
		 }
	}

	function RBK (){
		var array = []
		return {
			addStudent:function(name,age,education,nationality){
				array.push(rbkStudents(name,age,education,nationality))
			},
			display:function(){
				var str = ""
				for(var i=0;i<array.length;i++){
					str+="name : "+array[i].name +", age :"+ array[i].age+" ,education :"+ array[i].education +" ,nationality : "+array[i].nationality+"\n"
				}
				return str
			},
			showFriend:function(data){
				for(var i=0;i<array.length;i++){
				if(data === array[i].name || array[i].age || array[i].education ||array[i].nationality) 
				return array[i].name +" with the age of "+ array[i].age+" and with  "+ array[i].education
					}
			},
			avergeStudents:function(){
				var sum = 0;
				for(var i=0;i<array.length;i++){
					sum+=array[i].age
				}
				return sum/array.length
			}
		}
	}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function rangeSquared (a,b){
	 if(b===undefined){
	    b = a
	  }
	 if(a%2 !==0 )
	 	return null
	var array = []
	for(var i =a;i<=b;i=i+2){
		array.push(Math.pow(i,2))
	}
	return array
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function leader (array){
	var arr =[]
	 for(var i =0 ; i<=array.length;i++){
	 	if(array[i]>array[i+1]){
	 		arr.push(array[i])
	 	}
	 
}
	return arr
}