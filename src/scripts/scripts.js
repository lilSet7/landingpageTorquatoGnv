const inputAutonomi = document.getElementById('autolitro');
const inputKmPecorri = document.querySelector('#automes') ;
const inputLitroGaso = document.querySelector('#autogasomes');
const inputValueMc = document.querySelector('#autometrocub');
const btnAction = document.querySelector('#btnAction')

btnAction.addEventListener('click', () =>{ 
    const spanquantidadeDeCombustivel = document.querySelector('#quantidadeDeCombustivel')
    const spanValorgasto = document.querySelector('#valorgasto')
    const spanAutonomiaDoGnv = document.querySelector('#autonomiaGnv')
    const spanKmTotalGnv = document.querySelector('#kmTotalGnv')
    const spanEconomiaTotal = document.querySelector('#enconomiaTotal')
    const spanTotalMes = document.querySelector("#mesASerPago")

	let combustivelGastoNoMes = (inputKmPecorri.value / inputAutonomi.value);
	let valorGastoPorMes = combustivelGastoNoMes * inputLitroGaso.value
	let autonomiGnv = inputAutonomi.value * 1.3;
	let kmTotalDeGnvNoMes = inputKmPecorri.value / autonomiGnv
	let valorGastoPorMesEmGnv = kmTotalDeGnvNoMes * inputValueMc.value
	let economiaTotalNoMes = valorGastoPorMesEmGnv - valorGastoPorMes
	let porcentoEconomia = valorGastoPorMesEmGnv / valorGastoPorMes * 100
	let totalDeParcelas = 5000 / economiaTotalNoMes

	spanquantidadeDeCombustivel.innerHTML = Math.round(combustivelGastoNoMes)
	spanValorgasto.innerHTML = valorGastoPorMes
	spanAutonomiaDoGnv.innerHTML = Math.round(autonomiGnv) 
	spanKmTotalGnv.innerHTML = Math.round(valorGastoPorMesEmGnv)
	spanEconomiaTotal.innerHTML = Math.abs(Math.round(economiaTotalNoMes))
	spanTotalMes.innerHTML = Math.abs(Math.round(totalDeParcelas))


})
