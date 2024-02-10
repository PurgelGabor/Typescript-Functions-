function negativE(szam) {
    var szamok = 0;
    for (var i = 0; i < szam.length; i++) {
        if (szam[i] < 0) {
            szamok++;
        }
    }
    return true;
}
function korKerTer(r) {
    var kerulet = 2 * r * Math.PI;
    var terulet = r * r * Math.PI;
    return [kerulet, terulet];
}
console.log(negativE([1, 0, 3, 6, -8]));
console.log(korKerTer(6));
