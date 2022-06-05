import Cpf from '../src/Cpf';

test("Deve validar um CPF válido", async  function(){
    const cpf = new Cpf("129.566.540-98");
});

const wrongSameDigitCpf = [
    "111.111.111-11",
    "222.222.222-11",
    "333.333.333-33"
];

test.each(wrongSameDigitCpf)("Deve validar um cpf inválido com todos os números iguais", function(cpf){
    expect(() => new Cpf(cpf)).toThrow(new Error("CPF Inválido"));
});
