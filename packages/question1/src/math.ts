const isPrime = (value: number) => {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

const isSquare = (value: number) => {
    return value > 0 && Math.sqrt(value) % 1 === 0;
}

const isFibonacci = (value: number) => {
    if (isSquare(5 * (value * value) - 4) || isSquare(5 * (value * value) + 4)) {
        return true;
    } else {
        return false;
    }
}

export const calculate = (value: any, type: string) => {
    if (type === 'isFibonacci') {
        return isFibonacci(value)
    } else if (type === 'isPrime'){
        return isPrime(value)
    }
    return false
}
