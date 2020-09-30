const getNumberOfCombination = (x, y, z, w) =>{
	// get max possible count of each thing
	const getMaxCount = number => Math.floor(w / number)
	const maxX = getMaxCount(x)
	const maxY = getMaxCount(y)
	const maxZ = getMaxCount(z)

	// try all combinations
	let variations = 0
	for (let i = 0; i <= maxX; i++) {
	    for (let j = 0; j <= maxY; j++) {
	        for (let k = 0; k <= maxZ; k++) {
	            if (x * i + y * j + z * k === w) {
	            	variations++
	            }
	        }
	    }
	}
	return variations
}

console.log("1. Candies")
console.log("Result:", getNumberOfCombination(10, 25, 15, 40))