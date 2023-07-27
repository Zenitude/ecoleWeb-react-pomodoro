export const getTime = (value: number, valueSeconds: number) => {
    const minutes = `${(value / 60) < 10 ? `0${value / 60}` : `${value / 60}`}`;
    const seconds = `${valueSeconds < 10 ? `0${valueSeconds}` : `${valueSeconds}`}`;
    return `${minutes} : ${seconds}`
}