export const generateList = (start, end) => {
    let list = [];
    if (start>end)
        for (let i=start;i>=end;--i)
            list.push(i);
    else 
        for (let i=start;i<=end;++i)
            list.push(i);
    return list;
}