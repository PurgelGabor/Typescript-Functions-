function negativE(szam:number[]):boolean{

    let szamok: number = 0;

    for(let i: number = 0; i < szam.length; i++){
        if(szam[i] < 0){    
            szamok++;
        }
    }
    return true;
}

function korKerTer(r:number):[number,number]{

    let kerulet: number = 2 * r * Math.PI; 
    let terulet: number = r * r *  Math.PI;

    return [kerulet, terulet];
}

interface Auto {
    Gyarto: string,
    Tipus: string,
    Hengerurtartalom: number,
    BenzinesE: boolean
}

console.log(negativE([1,0,3,6,-8]));
console.log(korKerTer(6));