availableBalance=740;
withdrawal=500;
function checkBalance(availableBalance,withdrawal){
if (withdrawal>availableBalance){
    console.log("Insufficient funds");
} else {
    availableBalance=availableBalance-withdrawal;
    console.log("Withdrawal successful. Available balance is:",availableBalance);
}
}
checkBalance(availableBalance,withdrawal);