pesos = [0.4,0.2,0.1,0.3];
notas = [8.2,5.0,10.0,9.1];
i = 0;
s = 0;
while(i < pesos.length && notas.length){
    mult = pesos[i] * notas[i];
    s = s + mult
    i = i +1;
}
console.log ("Nota Final:", s);