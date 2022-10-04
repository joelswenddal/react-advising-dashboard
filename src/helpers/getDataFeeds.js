


const colleges = ['Liberal Arts', 'Engineering', 'Sciences', 'Business', 'Social Studies', 'Law', 'Education', 'Information', 'Medicine'];

const classes = ['First Year', 'Sophmore', 'Junior', 'Senior', 'Grad'];

const advisors = ['Smith', 'Matthews', 'DaCosta', 'McGrath', 'Sandar', 'Murphy', 'Tevar', 'McDonaugh', 'Fernandes', 'Bryant', 'Kendrick'];


// Data generation
/*
function getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for (let i = 0; i < numItems; i++) {
        data.push({
            label: names[i],
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}
*/

function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2022-06-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for (let i = 0; i < numItems; i++) {
        data.push({
            time: new Date(baseTime + i * dayMs),
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

function generateCatData(categoryArr) {
    let numItems = categoryArr.length;
    let data = [];
    for (let i = 0; i < numItems; i++) {
        data.push({
            label: categoryArr[i],
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}


function getDataFeeds() {
    let data = [];


    data.push({
        title: 'Appts by Day',
        data: getRandomDateArray(120)
    });

    data.push({
        title: 'Appts by Advisor - Current Month',
        data: generateCatData(advisors)
    });

    data.push({
        title: 'Appts by College - YTD',
        data: generateCatData(colleges)
    });

    data.push({
        title: 'Appts by Class - YTD',
        data: generateCatData(classes)
    });

    return data;
}


export default getDataFeeds;