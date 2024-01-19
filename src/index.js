
let nomeDaPrimeiraPessoa = 'Jorge'

let nomeDaSegundaPessoa = 'Luana'

let nomeDaTerceiraPessoa = 'Francisco'

let nomeDaQuartaPessoa = 'Beatriz'

let nomeDaQuintaPessoa = 'Rafael'

let imcDaPrimeiraPessoa = 55 / (1.80 * 1.80) 

let imcDaSegundaPessoa = 60 / (1.65 * 1.65)

let imcDaTerceiraPessoa = 90 / (1.85 * 1.85) 

let imcDaQuartaPessoa = 100 / (1.75 * 1.75)

let imcDaQuintaPessoa = 110 / (1.60 * 1.60) 

let primeraPessoaEstaAbaixoDoPeso = (imcDaPrimeiraPessoa) < 18.5

let primeiraPessoaEstaNoPesoNormal = (imcDaSegundaPessoa) >= 18.5 && (imcDaSegundaPessoa) <= 25;

let primeiraPessoaEstaAcimaDoPeso = (imcDaSegundaPessoa) > 25 && (imcDaSegundaPessoa) <= 30;

let primeiraPessoaEstaObesa = (imcDaSegundaPessoa) > 30 && (imcDaSegundaPessoa) <= 40;

let primeiraPessoaEstaComObesidadeGrave = (imcDaPrimeiraPessoa) > 40

if(primeraPessoaEstaAbaixoDoPeso){
console.log('A pessoa denominada' + nomeDaPrimeiraPessoa + 'está abaixo do peso segundo o cálculo do IMC.')
}else if(primeiraPessoaEstaNoPesoNormal){
    console.log('A pessoa denominada' + nomeDaPrimeiraPessoa + 'está no peso normal segundo o cálculo do IMC.')
} else if(primeiraPessoaEstaAcimaDoPeso){
    console.log('A pessoa denominada' + nomeDaPrimeiraPessoa + 'está acima do peso segundo o cálculo do IMC.')
}else if(primeiraPessoaEstaObesa){
    console.log('A pessoa denominada' + nomeDaPrimeiraPessoa + 'está obesa segundo o cálculo do IMC.')
    }else if(primeiraPessoaEstaComObesidadeGrave){
        console.log('A pessoa denominada' + nomeDaPrimeiraPessoa + 'está com obesidade grave segundo o cálculo do IMC.')
    }else{
  console.log('A pessoa denominada' + nomeDaPrimeiraPessoa + 'não participou da pesquisa  para calcular o IMC.')
    }

let segundaPessoaEstaAbaixoDoPeso = (imcDaSegundaPessoa) < 18.5

let segundaPessoaEstaNoPesoNormal = (imcDaSegundaPessoa) >= 18.5 && (imcDaSegundaPessoa) <= 25;

let segundaPessoaEstaAcimaDoPeso = (imcDaSegundaPessoa) > 25 && (imcDaSegundaPessoa) <= 30;

let segundaPessoaEstaObesa = (imcDaSegundaPessoa) > 30 && (imcDaSegundaPessoa) <= 40;

let segundaPessoaEstaComObesidadeGrave = (imcDaSegundaPessoa) > 40

if(segundaPessoaEstaAbaixoDoPeso){
    console.log('A pessoa denominada' + nomeDaSegundaPessoa + 'está abaixo do peso segundo o cálculo do IMC.')
    }else if(segundaPessoaEstaNoPesoNormal){
        console.log('A pessoa denominada' + nomeDaSegundaPessoa + 'está no peso normal segundo o cálculo do IMC.')
    } else if(segundaPessoaEstaAcimaDoPeso){
        console.log('A pessoa denominada' + nomeDaSegundaPessoa + 'está acima do peso segundo o cálculo do IMC.')
    }else if(segundaPessoaEstaObesa){
        console.log('A pessoa denominada' + nomeDaSegundaPessoa + 'está obesa segundo o cálculo do IMC.')
        }else if(segundaPessoaEstaComObesidadeGrave){
            console.log('A pessoa denominada' + nomeDaSegundaPessoa + 'está com obesidade grave segundo o cálculo do IMC.')
        }else{
            console.log('A pessoa denominada' + nomeDaSegundaPessoa + 'não participou da pesquisa  para calcular o IMC.')
              }

 let quartaPessoaEstaAbaixoDoPeso = (imcDaQuartaPessoa) < 18.5

 let quartaPessoaEstaNoPesoNormal = (imcDaQuartaPessoa) >= 18.5 && (imcDaQuartaPessoa) <= 25;

 let quartaPessoaEstaAcimaDoPeso = (imcDaQuartaPessoa) > 25 && (imcDaQuartaPessoa) <= 30;

 let quartaPessoaEstaObesa = (imcDaQuartaPessoa) > 30 && (imcDaQuartaPessoa) <= 40;

let quartaPessoaEstaComObesidadeGrave = (imcDaQuartaPessoa) > 40

if(quartaPessoaEstaAbaixoDoPeso){
    console.log('A pessoa denominada' + nomeDaQuartaPessoa + 'está abaixo do peso segundo o cálculo do IMC.')
    }else if(quartaPessoaEstaNoPesoNormal){
        console.log('A pessoa denominada' + nomeDaQuartaPessoa+ 'está no peso normal segundo o cálculo do IMC.')
    } else if(quartaPessoaEstaAcimaDoPeso){
        console.log('A pessoa denominada' + nomeDaQuartaPessoa + 'está acima do peso segundo o cálculo do IMC.')
    }else if(quartaPessoaEstaObesa){
        console.log('A pessoa denominada' + nomeDaQuartaPessoa + 'está obesa segundo o cálculo do IMC.')
        }else if(quartaPessoaEstaComObesidadeGrave){
            console.log('A pessoa denominada' + nomeDaQuartaPessoa + 'está com obesidade grave segundo o cálculo do IMC.')
        }else{
            console.log('A pessoa denominada' + nomeDaQuartaPessoa + 'não participou da pesquisa  para calcular o IMC.')
              }

              let quintaPessoaEstaAbaixoDoPeso = (imcDaQuintaPessoa) < 18.5

              let quintaPessoaEstaNoPesoNormal = (imcDaQuintaPessoa) >= 18.5 && (imcDaQuintaPessoa) <= 25;
             
              let quintaPessoaEstaAcimaDoPeso = (imcDaQuintaPessoa) > 25 && (imcDaQuintaPessoa) <= 30;
             
              let quintaPessoaEstaObesa = (imcDaQuintaPessoa) > 30 && (imcDaQuintaPessoa) <= 40;
             
             let quintaPessoaEstaComObesidadeGrave = (imcDaQuintaPessoa) > 40
             
             if(quintaPessoaEstaAbaixoDoPeso){
                 console.log('A pessoa denominada' + nomeDaQuintaPessoa + 'está abaixo do peso segundo o cálculo do IMC.')
                 }else if(quintaPessoaEstaNoPesoNormal){
                     console.log('A pessoa denominada' + nomeDaQuintaPessoa + 'está no peso normal segundo o cálculo do IMC.')
                 } else if(quintaPessoaEstaAcimaDoPeso){
                     console.log('A pessoa denominada' + nomeDaQuintaPessoa + 'está acima do peso segundo o cálculo do IMC.')
                 }else if(quintaPessoaEstaObesa){
                     console.log('A pessoa denominada' + nomeDaQuintaPessoa + 'está obesa segundo o cálculo do IMC.')
                     }else if(quintaPessoaEstaComObesidadeGrave){
                         console.log('A pessoa denominada' + nomeDaQuintaPessoa + 'está com obesidade grave segundo o cálculo do IMC.')
                     }else{
                         console.log('A pessoa denominada' + nomeDaQuintaPessoa + 'não participou da pesquisa  para calcular o IMC.')
                           }