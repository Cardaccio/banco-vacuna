let size = 8;
let str = '';

for (let i = 0; i < size; i++) {
    for (let y = 0; y < size; y++) {
        if((i+y)%2==0){
            str+=" ";
        }else{
            str +="#";
        }
    }
    str += "\n";
}


console.log(str);