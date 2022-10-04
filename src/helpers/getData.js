

function getData() {
    let numItems = 20 + Math.floor(20 * Math.random())
    let data = []
    for (let i = 0; i < numItems; i++) {
        data.push({
            x: Math.random(),
            y: Math.random(),
            r: Math.random(),
            colour: i % 5
        })
    }
    return data
}

export default getData;