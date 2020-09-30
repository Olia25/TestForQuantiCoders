const getMinimumTime = (x, y, N) =>{
    const fastestPrinterTime = Math.min(x, y)
    // coefficient to calculate copies count by printer
    const coefficient = (N - 1) / (x + y)
    // how much copies makes each printer
    const pagesByPrinter1 = Math.ceil(y * coefficient)
    const pagesByPrinter2 = Math.ceil(x * coefficient)
    // best time of printers + time to mske first copy
    return Math.min(pagesByPrinter1 * x, pagesByPrinter2 * y) + fastestPrinterTime
}

console.log("-------------------------")
console.log("2. Secretary Jimny")
console.log("Result:", getMinimumTime(2,5,14))