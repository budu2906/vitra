const pText = document.getElementById('p-text');

const promptFn = () => {
    const arg1 = prompt('შეიყვანე კვადრატულობა, რაოდენობა ყუთში, ცალობა');
    const val = arg1.split(' ');
    let fullAmount = val[0];
    let box = val[1];
    let oneInBox = +val[2];

    let lastVal = 0;
    let extraValue = 0;
    let finalNum =0;

    let count;
    const value = fullAmount / box; // kvadratuloba / yutshi ramdeni kvadraticaa
    const isInt = (num) => {
        return num % 1 === 0;
    };
    const firstInt = isInt(value);
    if (firstInt) {
        finalNum = fullAmount;
    } else if (!firstInt) {
        let parsedValue = parseInt(value);
	const z = fullAmount - (box * parsedValue)
        extraValue = z.toFixed('2')
	console.log(extraValue)
	let t = extraValue / oneInBox
        lastVal = t.toFixed('2')
        count = 0;
        while (extraValue > count) {
            count += oneInBox;
        }

        finalNum = (Number(count.toFixed('2')) + Number(box * parsedValue)).toFixed('2')
	if(lastVal==1.00){
	finalNum = fullAmount
	}
    }

    // Update the text content of the <p> element with the calculated finalNum
    pText.textContent = finalNum;
};

const pila = document.getElementById('pila')
const firstInput = document.getElementById('inputOne')
const secondInput = document.getElementById('inputTwo')
const totalSumFn = () =>{
	
	const totalSum = (firstInput.value /100) * (secondInput.value/100)
	pila.textContent = totalSum.toFixed('3')
	

} 
