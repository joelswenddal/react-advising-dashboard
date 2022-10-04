
function getBarBData() {

    let dataArr = fillRandom(12, 200, 120);
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Appointments By Month',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: dataArr,
            }
        ]
    }
    return data;
}

function fillRandom(count, max, min) {
    let result = [];
    for (let i = 0; i < count; i++) {
        let num = getRandomInt(min, max);
        result.push(num);
    }
    return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export default getBarBData;