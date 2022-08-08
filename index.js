let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

let i=0
let x=monthlyExpenseQuestions.length-1
while(i < weeklyExpenseQuestions.length) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    i++;
    weeklyExpenses = weeklyExpenses + answer;
}
while(x >=0) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[x]));
    x--;
    monthlyExpenses = monthlyExpenses + answer;
}
for(i=0;i < annualExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}
// Your Code Here