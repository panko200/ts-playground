function greetAndCalculate(name: string,a: number,b: number,f: boolean): string {
    const sum: number = a + b;
    let str: string = "";
    if(f){str = `ok,${f}.`+`Hello, ${name}! The sum of ${a} and ${b} is ${sum}.`}
    else{str = `sorry, I can't りぷらい`};
    return str;
}

const userName: string = "Alice";
const x: number = 11;
const frag: boolean = true;
const y: number = 20;

const result: string = greetAndCalculate(userName,x,y,frag);
console.log(result);
