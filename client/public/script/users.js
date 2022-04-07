const teamInner = document.querySelector('.team__inner');

fetch('http://localhost:3001/users')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		for (let user of data.items) {
			const teamItem = document.createElement('div');
			teamItem.classList.add('team__item');
			teamItem.innerHTML = `
<img class="team__photo" style="width:100%" src="https://i.pravatar.cc/150?img=${user.id}" alt="">

	<div class="team__title1">${user.username}</div>
	<div class="team__title2">${user.email}</div>
	<div class="team__title2">${user.phone}</div>
	<div class="team__text">
		<p>${user.website}</p></div>
	<div class="icon">
		<a class="icon__item" href="#" target="_blank">
		<svg class="icon__cvg">
		<use xlink:href="#facebook"></use>
		</svg>
		</a>
		<a class="icon__item" href="#" target="_blank">
		<svg class="icon__cvg">
		<use xlink:href="#twitter"></use>
		</svg>
		</a>
		<a class="icon__item" href="#" target="_blank">
		<svg class="icon__cvg">
		<use xlink:href="#linkedin"></use>
		</svg>
		</a>
	</div>
			`;
teamInner.append(teamItem);
		}
	})