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
        extraValue = fullAmount - (box * parsedValue); // 0.5
        lastVal = extraValue / oneInBox;
        count = 0;
        while (extraValue > count) {
            count += oneInBox;
        }

        finalNum = Number(count.toFixed('2')) + Number(box * parsedValue);
    }

    // Update the text content of the <p> element with the calculated finalNum
    pText.textContent = finalNum;
};
