// let legacy =+prompt('inter your fatherlegacy');
// console.log('')
// let price =+prompt('enter price');
// let newprice = price +(price * 0.14);
// console.log(`oldprice ${price} newprice ${ newprice}`);

let inheritance =+prompt('ادخل الميراث');
let wives =+prompt('ادخل عددالزوجات');
let boys =+prompt('ادخل عدد الابناء');
let girls =+prompt('ادخل عدد البنات');

let wife =+(inheritance * (1/8)) / wives ;
let arrow =+(inheritance - wife) / ((boys * 2) + (girls ));
let son =arrow * 2 ;
let girl =(1/2) * son ;
// let 
console.log(`+ميراث الاب هو ${inheritance} ميراث كت زوجه من ال ${wives}
    هو ${wife} ميراث كل ابن من ال${boys}هو${son} ميراث كل بنت من${girls}هو${girl} باقليلثلثلبثلثل${arrow}`)