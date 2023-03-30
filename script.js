const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')


button.addEventListener('click', () => {
	let value = input.value
	
	result.innerHTML = ''
	fetch(`http://api.weatherapi.com/v1/current.json?key=a79a0067de9f401da0b70745233003&q=${value}`)
		.then(res => {
			if (res.status === 200) {
				return res.json()
			} else {
				result.innerHTML += `<h5>No matching location found.</h5>`
			}
		})
		
		.then(data => {
			let a = data.location
			// console.log(data)
			result.innerHTML += `
				<h6>Date: ${data.current.last_updated}</h6>
				<h6>City: ${a.name}</h6>
				<h6>Country: ${a.country}</h6>
				<h6>Temperature: ${a.lon} °C</h6>
			`
		})
})