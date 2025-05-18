export default function IMC(props) {

    const { peso, altura } = props;

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a) {
        return <h1>Sem informação</h1>;
    }

    const imc = p / (a * a)
    let classificacao = ''

    if (imc < 18.5) classificacao = 'Abaixo do peso'
    else if (imc < 24.9) classificacao = 'Peso normal'
    else if (imc < 29.9) classificacao = 'Sobrepeso'
    else classificacao = 'Obesidade'

    return (
        <div>
            <h1>IMC: {imc.toFixed(2)}</h1>
            <h2>{classificacao}</h2>
        </div>
    )
}