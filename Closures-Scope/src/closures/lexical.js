const buildCount = (i) =>{
    let count = i;
    const displayCount  = () =>{
        console.log(count++);
    };
    return displayCount;

};
const mycount = buildCount(1);
mycount();
mycount();
mycount();

myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();