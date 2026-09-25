export function isValidPriority(num: number): boolean{
    let frag: boolean = false;
    if(num==1||num==2||num==3){
        frag = true;
    }
    return frag;
}