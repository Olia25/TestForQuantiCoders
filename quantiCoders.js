const employees = [
	{"id":1,"name":"Mildred Carson","drinks":["Macchiato"]},
	{"id":2,"name":"Clifford Brown","drinks":["Latte"]},
	{"id":3,"name":"Kellie Fletcher","drinks":["Flat White","Espresso"]},
	{"id":4,"name":"Don Parsons","drinks":["Espresso"]},
	{"id":5,"name":"Renee Reynolds","drinks":["Cappuccino","Macchiato"]},
	{"id":6,"name":"Rudolph Bishop","drinks":["Latte","Macchiato","Flat White"]},
	{"id":7,"name":"Geraldine Carpenter","drinks":["Espresso"]},
	{"id":8,"name":"Hilda Jimenez","drinks":["Latte","Macchiato","Espresso"]},
	{"id":9,"name":"Pauline Roberson","drinks":["Espresso"]},
	{"id":10,"name":"Vanessa Barrett","drinks":["Flat White","Cappuccino","Latte"]}
]
const recipes = {
   "Cappuccino": {
	    "coffee": 0.01,
	    "water": 0.035,
	    "milk": 0.09
  },
   "Espresso": {
	    "coffee": 0.01,
	    "water": 0.035
  },
  	"Latte": {
	    "coffee": 0.01,
	    "water": 0.035,
	    "milk": 0.135
  },
  	"Flat White": {
	    "coffee": 0.02,
	    "water": 0.04,
	    "milk": 0.11
  },
  	"Macchiato": {
	    "coffee": 0.01,
	    "water": 0.035,
	    "milk": 0.015
  }
}	
const prices =  {
	"coffee": 3.6,
	"water": 1,
	"milk": 1.5
}

const M = 0.25;

//find the price of each drink
const priceOfDrinks = Object.entries(recipes).reduce((priceList, [cofeeName, recipet])=> {	
		const drinkPrice = Object.entries(recipet).reduce((sum, [ingridient, weight]) =>
			sum + prices[ingridient] * weight,
		0)
		return {...priceList, [cofeeName]: drinkPrice}
	}, {})

//get the total price of drinks for each employee
const priceOfSelectionsDrinks = employees.map(elem => {
	const drinksPrice = elem.drinks.reduce((sum, cofee) => {
		return b = sum + priceOfDrinks[cofee]
	}, 0)
	return {...elem, "price": drinksPrice}
},[])

//sort employees from lower price and by id 
const sortList = priceOfSelectionsDrinks.sort((a, b) => {
	if (a.price === b.price) return a.id - b.id
	return a.price - b.price	
})

//output employees who fall into the pariah budget
const getInvitedEmployees = (budget) => 
	sortList.reduce(({ sum, invitedEmploees }, elem) =>{
		if(sum + elem.price <= budget){
			return { sum: sum + elem.price, invitedEmploees: [...invitedEmploees, elem]}
		} 
		return {sum, invitedEmploees}
	}, { sum: 0, invitedEmploees: []})


const result = getInvitedEmployees(M).invitedEmploees.map(({ id, name, drinks }) => ({ id, name, drinks }))

console.log("-------------------------")
console.log("3. QuantiCoders employees")
console.log("Result:", result)
