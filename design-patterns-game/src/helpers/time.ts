/**
 * handle time
 */
const formatNum = (num: number | string, n = 2) => {
    let len = num.toString().length
    while (len < n) {
        num = '0' + num
        len++
    }
    return num
}

const getDate = (time: Date, detailed: boolean): string => {
    const year = time.getFullYear()
    const month = formatNum(time.getMonth() + 1)
    const date = formatNum(time.getDate())
    const hours = formatNum(time.getHours())
    const minutes = formatNum(time.getMinutes())
    const seconds = formatNum(time.getSeconds())
    return detailed ? `${year}-${month}-${date} ${hours}:${minutes}:${seconds}` : `${year}-${month}-${date}`;
}

const handleWrongTime = (time: unknown) => {
    console.log('your input is ', time);
    throw new Error('the input has some problem');
}

export const formatTime = (time: unknown, detailed: boolean = true) => {
    if (time === undefined || time === null || time === Infinity || time === -Infinity) {
        handleWrongTime(time);
    }
    //is Date?
    if (time instanceof Date) {
        return getDate(time, detailed);
    }
    if (typeof time === 'number') {
        let inputTime = time;
        if (String(time).length === 10) {
            inputTime *= 1000;
        }
        return getDate(new Date(inputTime), detailed);
    }
    if (typeof time === 'string') {
        if (!isNaN(Date.parse(time))) {
            return getDate(new Date(time), detailed);
        } else {
            handleWrongTime(time);
        }
    }
}
