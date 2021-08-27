import dayjs from 'dayjs'

export const DisplayDate =(str)=>dayjs(str).format("DD MMM YYYY")
export const distinctArray=arr=>arr.filter((v, i, a) => a.indexOf(v) === i);