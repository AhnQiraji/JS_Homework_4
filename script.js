function task1(data, value) {
    return data > value ? 1 : data < value ? -1 : 0;
}

function task2(data) {
    for (let i = data-1; i > 1; i--) data *= i;
    return data;
}

function task3(data, value, num) {
    return data*100 + value*10 + num;
}

function task4(data, value) {
    return Number.isInteger(value) ? data*value : data**2;
}

function task5(data) {
    let value = true;
    for (let i = 2; i <= Math.sqrt(data); i++) {
        if (data % i === 0) {
            i !== data/i ? value += (i + data/i) : value += i;
        }
    }
    return data === value;
}

function task6(data, value) {
    for (let i = data; i <= value; i++) if (task5(i) === true) console.log(i);
}

function task7(date, data, value) {
    

    date = (typeof(date) === 'number' && isFinite(date)) ? parseInt(+date) : date === undefined ? 0 : console.log('Invalid Date');
    data = (typeof(data) === 'number' && isFinite(data)) ? parseInt(+data) : data === undefined ? 0 : console.log('Invalid Date');
    value = (typeof(value) === 'number' && isFinite(value)) ? parseInt(+value) : value === undefined ? 0 : console.log('Invalid Date');

    data += Math.floor(value/60);
    value = value >= 0 ? value%60 : 60 + value%60;
    date += Math.floor(data/60);
    data = data >= 0 ? data%60 : 60 + data%60;
    date = date >= 0 ? date%24 : 24 + date%24;
    console.log(date, data, value);


}

function task8 (date, data, value) {
    date = parseInt(date);
    data = parseInt(data);
    value = parseInt(value);
    value = value > 0 ? value : 0;
    value = data > 0 ? 60*data+value : value;
    value = date > 0 ? 3600*date+value : value;
    return value;
}

function task9 (value) {
    let date = 0;
    let data = 0;
    value = parseInt(value);
    if (value > 0) {
        
    } else value = 0;
}