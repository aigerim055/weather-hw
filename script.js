const input = document.querySelector('input')
const button = document.querySelector('button')
const row = document.querySelector('.row')
const select = document.querySelector('#select')

const selectHandler = () => {
	// let value = select.value
	// console.log(value)
	let dates = [
		'today',
		'2023-05-01',
		'2023-05-02',
		'2023-05-03',
		'2023-05-04',
		'2023-05-05',
		'2023-05-06',
		'2023-05-07',
		'2023-05-08',
		'2023-05-09',
	]
	dates.map(el => {
		// console.log(el)
		select.innerHTML += `
		<option value=${el}>${el}</option>
	`
	})
	
}
selectHandler()


button.addEventListener('click', () => {
	let value = input.value
	// console.log()
	row.innerHTML = ''
	let url = ''
	
	if (select.value === 'today') {
		url = `https://api.weatherapi.com/v1/current.json?key=a79a0067de9f401da0b70745233003&q=${value}`
	} else {
		url = `https://api.weatherapi.com/v1/future.json?key=a79a0067de9f401da0b70745233003&dt=${select.value}&q=${value}`
	}
	console.log(url)
	fetch(url)
		.then(res => {
			// console.log(res )
			if (res.status === 200) {
				return res.json()
			} else {
				row.innerHTML += `<h5>No matching location found.</h5>`
			}
		})
		.then(data => {
			// console.log(data.forecast.forecastday[0])
			if (select.value === 'today'){
				row.innerHTML += `
				<h6>Date: ${data.current.last_updated}</h6>
				<h6>${data.location.name}, ${data.location.country}</h6>
				<img src=${data.current.condition.icon}>
			`
			} else {
				row.innerHTML += `
				<div class="col-4">
					<div class="box">
						<h6>${data.location.name}, ${data.location.country}</h6>
						<h6>${data.forecast.forecastday[0].date}</h6>
						<h6>+${data.forecast.forecastday[0].day.maxtemp_c}°C</h6>
						<h6>-${data.forecast.forecastday[0].day.mintemp_c}°C</h6>
						<img src=${data.forecast.forecastday[0].day.condition.icon}>
					</div>
				</div>
			`
			}
		})
})

// console.log(new Date)






// console.log(data.current.condition.icon)
