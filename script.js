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
    if ((!Number.isFinite(date) && date !== undefined) ||
    (!Number.isFinite(data) && data !== undefined) ||
    (!Number.isFinite(value) && value !== undefined)) return 'Invalid Value';
    date = date === undefined ? 0 : Math.floor(date);
    data = data === undefined ? 0 : Math.floor(data);
    value = value === undefined ? 0 : Math.floor(value);
    
    data += Math.floor(value/60);
    value = value >= 0 ? value%60 : 60 + value%60;
    date += Math.floor(data/60);
    data = data >= 0 ? data%60 : 60 + data%60;
    date = date >= 0 ? date%24 : 24 + date%24;

    data = data < 10 ? data === 0 ? '00' : `0${data}` : `${data}`;
    value = value < 10 ? value === 0 ? '00' : `0${value}` : `${value}`;
    console.log(`${date}:${data}:${value}`);
}

function task8 (date, data, value) {
    if ((!Number.isFinite(date) && date !== undefined) ||
    (!Number.isFinite(data) && data !== undefined) ||
    (!Number.isFinite(value) && value !== undefined)) return 'Invalid Value';
    date = date === undefined ? 0 : Math.floor(date);
    data = data === undefined ? 0 : Math.floor(data);
    value = value === undefined ? 0 : Math.floor(value);
    
    return value + 60*data + 3600*date;
}

function task9 (value) {
    if (!Number.isFinite(value) && value !== undefined) return 'Invalid Value';
    value = value === undefined ? 0 : Math.floor(value);
    
    let date = Math.floor(value/3600);
    let data = Math.floor(value/60);
    value = value%60;
    value = value >= 0 ? value : 60 + value;
    data = data >= 0 ? data%60 : 60 + data%60;
    date = date >= 0 ? date%24 : 24 + date%24;

    data = data < 10 ? data === 0 ? '00' : `0${data}` : `${data}`;
    value = value < 10 ? value === 0 ? '00' : `0${value}` : `${value}`;
    return `${date}:${data}:${value}`;
}

function task10(date, data, value, date1, data1, value1) {
    return task9(Math.abs(task8(date, data, value) - task8(date1, data1, value1)));
}