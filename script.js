// const input = document.querySelector('#input')
// const button = document.querySelector('button')
// const row = document.querySelector('.row')
// const dateInput = document.querySelector('#date')



// button.addEventListener('click', () => {
// 	let value = input.value
// 	row.innerHTML = ''
// 	let url = ''
//
//
// 	let date_input = dateInput.value.split('-').reverse().join('-')
// 	// let today = new Date()
// 	// console.log(today.getDate())
// 	console.log(date_input)
//
// 	// if (select.value === 'today') {
// 	// 	url = `https://api.weatherapi.com/v1/current.json?key=a79a0067de9f401da0b70745233003&q=${value}`
// 	// } else {
// 	// 	url = `https://api.weatherapi.com/v1/future.json?key=a79a0067de9f401da0b70745233003&dt=${select.value}&q=${value}`
// 	// }
// 	// console.log(url)
// 	fetch(`https://api.weatherapi.com/v1/future.json?key=a79a0067de9f401da0b70745233003&dt=${date_input}&q=${value}`)
// 		.then(res => {
// 			if (res.status === 200) {
// 				return res.json()
// 			} else {
// 				row.innerHTML += `<h5>No matching location found.</h5>`
// 			}
// 		})
// 		.then(data => {
// 			if (select.value === 'today'){
// 				row.innerHTML += `
// 				<h6>Date: ${data.current.last_updated}</h6>
// 				<h6>${data.location.name}, ${data.location.country}</h6>
// 				<img src=${data.current.condition.icon}>
// 			`
// 			} else {
// 				row.innerHTML += `
// 				<div class="col-4">
// 					<div class="box">
// 						<h6>${data.location.name}, ${data.location.country}</h6>
// 						<h6>${data.forecast.forecastday[0].date}</h6>
// 						<h6>+${data.forecast.forecastday[0].day.maxtemp_c}°C</h6>
// 						<h6>-${data.forecast.forecastday[0].day.mintemp_c}°C</h6>
// 						<img src=${data.forecast.forecastday[0].day.condition.icon}>
// 					</div>
// 				</div>
// 			`
// 			}
// 		})
// })













// button.addEventListener('click', () => {
//
// 	let b = new Date('2023-03-30')
// 	console.log(b.toDateString())
//
//
//
// 	let value = input.value
// 	row.innerHTML = ''
// 	let url = ''
	
	// let date_input = dateInput.value.split('-').reverse().join('-')
	//
	// fetch(`https://api.weatherapi.com/v1/forecast.json?key=a79a0067de9f401da0b70745233003&q=${value}&days=14`)
	// 	.then(res => {
	// 		if (res.status === 200) {
	// 			return res.json()
	// 		} else {
	// 			row.innerHTML += `<h5>No matching location found.</h5>`
	// 		}
	// 	})
	// 	.then(data => {
	// 		let a = data.forecast.forecastday[0].date
	// 	})
// })

const input = document.querySelector('input')
const button = document.querySelector('button')
const row = document.querySelector('.row')
const select = document.querySelector('#select')



input.addEventListener('keypress',  (e) => {
	if (e.key === 'Enter'){
		row.innerHTML = ''
		fetch(`https://api.weatherapi.com/v1/current.json?key=a79a0067de9f401da0b70745233003&q=${e.target.value}`)
			.then(res => {
				// console.log(res )
				if (res.status === 200) {
					return res.json()
				} else {
					row.innerHTML += `<h5>No matching location found.</h5>`
				}
			})
			.then(data => {
				let localtime = data.location.localtime
				let check_day = new Date(localtime.slice(0, localtime.indexOf(' ')))
	
				let day = ''
				if (check_day.getDay() === 0) {
					day = 'Sunday'
				} else if (check_day.getDay() === 1) {
					day = 'Monday'
				} else if (check_day.getDay() === 2) {
					day = 'Tuesday'
				} else if (check_day.getDay() === 3) {
					day = 'Wednesday'
				} else if (check_day.getDay() === 4) {
					day = 'Thursday'
				} else if (check_day.getDay() === 5) {
					day = 'Friday'
				} else if (check_day.getDay() === 6) {
					day = 'Saturday'
				}
				
				let months = ['January', 'February', 'March', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
			
				
				row.innerHTML += `
				<div class="col-4">
					<div class="box">
						<h4>${data.location.name}, ${data.location.country}</h4>
						<h4>${day}, ${check_day.getDate()} ${months[check_day.getMonth()]}, ${check_day.getFullYear()}</h4>
						<h4>${localtime.slice(localtime.indexOf(' '), localtime.length)}</h4>
					</div>
				</div>
				<div class="col-4">
					<div class="box desc">
						<div class="icon">
							<img src=${data.current.condition.icon}>
							<h2>${data.current.temp_c} °C</h2>
						</div>
						<h6>${data.current.condition.text}</h6>
					</div>
				</div>
				<div class="col-4 desc2">
					<h4>Feels like: ${data.current.feelslike_c} °C</h4>
					<h4>Wind: ${data.current.wind_kph} kph</h4>
				</div>
			`
			})
	}
	
})

