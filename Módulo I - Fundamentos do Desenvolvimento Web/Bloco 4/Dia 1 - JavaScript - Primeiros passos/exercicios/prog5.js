const a = -90;
const b = 45;
const c = 45;

if (a + b + c === 180) {
    console.log(true);
}

else if (a + b + c <= 0) {
    console.log("invalid");
}

else {
    console.log(false);
}