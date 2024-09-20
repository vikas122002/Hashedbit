function findTax(salary) {
    let tax = 0;

    switch (true) {
        case salary > 1500000:
            tax = salary * 0.30;
            break;
        case salary > 1000000:
            tax = salary * 0.20;
            break;
        case salary > 500000:
            tax = salary * 0.10;
            break;
        case salary > 0 && salary <= 500000:
            tax = 0;  // No tax for salaries <= 500000
            break;
        default:
            return "Invalid salary input.";
    }

    return `The tax on a salary of ${salary} is ${tax}`;
}

console.log(findTax(400000));  // Output: The tax on a salary of 400000 is 0
console.log(findTax(700000));  // Output: The tax on a salary of 700000 is 70000
console.log(findTax(1200000)); 
console.log(findTax(2000000)); 
