//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....
function footballTeam (player){
	var teamobj = {}
	teamobj.player = player;
	teamobj.addInfo =addInfo;
	teamobj.arrayOfPlayers= [];
	teamobj.increaseLevel=increaseLevel;
	teamobj.isAvailable=isAvailable;
	teamobj.decrease=decrease;
	teamobj.sortPalyerBy=sortPalyerBy;
	return teamobj
}
	function infoo(age, position, level, availability){
		return {
		 age: age,
		 position:position,
		 level:level,
		 availability:availability
		 }
	}


function addInfo (age, position, level, availability ){
	this.arrayOfPlayers.push(infoo(age, position, level, availability))
}
function increaseLevel(n){
	 this.arrayOfPlayers[0].level = n + this.arrayOfPlayers[0].level;
	 return this.arrayOfPlayers

}

function isAvailable(){
	//var that = this
	if(this.arrayOfPlayers[0].availability==="yes"){
		return true
	}
	else{
		return false
	}
}

function decrease(n){
	each(this.arrayOfPlayers,function(elem,i){
		if(elem.age>30){
			elem.level=elem.level-n;
		}
	})
	return this.arrayOfPlayers
}

function sortPalyerBy (key){
	
	return this.arrayOfPlayers.sort(function(a,b){
		return ((a[key] < b[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0))
	})
}




function each(coll, func) {
     if (Array.isArray(coll)) {
         for (var i = 0; i < coll.length; i++) {
                func(coll[i], i);
         }
     } else {
         for (var key in coll) {
                func(coll[key], key);
         }
     }
}