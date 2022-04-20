const cardwripper = document.querySelector('.cardinfof');
	const carddelite = document.querySelector('.kypit');

	window.addEventListener('click', function(event){

	if (event.target.hasAttribute('data-card')){
		const card = event.target.closest('.card');
		console.log(card);

		const info = {
			name: card.querySelector('.card_name').innerText,
			price: card.querySelector('.card_price').innerText,
		};
		console.log(info);

		const cardinfo = `<p class="tovar">${info.name}</p>
		<p class="tsen">${info.price}</p>`;

        cardwripper.insertAdjacentHTML('beforeend',cardinfo);
	}
	carddelite.onclick = function(){
		console.log('Элемент Удалён');
		cardwripper.innerHTML="";
		//cardwripper.parentElement.remove();
	}
})