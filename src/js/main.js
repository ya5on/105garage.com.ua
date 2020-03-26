$(document).ready(function($){

    $('.btn-evacuator').on('click', function(e){
		e.preventDefault();
		$('.form-container').removeClass('hidden').html(`<div class="form-block">
		<h3>Вызвать эвакуатор</h3>
		<form class="ajax-form">
			<input id="what" type="hidden" name="whatform" value="Форма - Вызов эвакуатора" />
			<input id="name" name="name" type="text" placeholder="Ваше имя" size="25" required>
			<input id="phone" name="phone" type="tel" placeholder="Ваш телефон" required>
			<button id="submitForm" type="button" class="button">Отправить</button>
		</form>
		<button type="button" class="btn-close">×</button>
	</div>`);
		$('body').toggleClass('lock');
	});

	$('.btn-to').on('click', function(e){
		e.preventDefault();
		$('.form-container').removeClass('hidden').html(`<div class="form-block">
		<h3>Тех. обслуживание</h3>
		<form class="ajax-form">
			<input id="what" type="hidden" name="whatform" value="Форма - Тех. обслуживание" />
			<input id="name" name="name" type="text" placeholder="Ваше имя" size="25" required>
			<input id="phone" name="phone" type="tel" placeholder="Ваш телефон" required>
			<button id="submitForm" type="button" class="button">Отправить</button>
		</form>
		<button type="button" class="btn-close">×</button>
	</div>`);
		$('body').toggleClass('lock');
	});

	$('.btn-repair').on('click', function(e){
		e.preventDefault();
		$('.form-container').removeClass('hidden').html(`<div class="form-block">
		<h3>Ремонт</h3>
		<form class="ajax-form">
			<input id="what" type="hidden" name="whatform" value="Форма - Ремонт" />
			<input id="name" name="name" type="text" placeholder="Ваше имя" size="25" required>
			<input id="phone" name="phone" type="tel" placeholder="Ваш телефон" required>
			<button id="submitForm" type="button" class="button">Отправить</button>
		</form>
		<button type="button" class="btn-close">×</button>
	</div>`);
		$('body').toggleClass('lock');
	});

	$('.btn-custom').on('click', function(e){
		e.preventDefault();
		$('.form-container').removeClass('hidden').html(`<div class="form-block">
		<h3>Тюнинг и дооснащение</h3>
		<form class="ajax-form">
			<input id="what" type="hidden" name="whatform" value="Форма - Тюнинг и дооснащение" />
			<input id="name" name="name" type="text" placeholder="Ваше имя" size="25" required>
			<input id="phone" name="phone" type="tel" placeholder="Ваш телефон" required>
			<button id="submitForm" type="button" class="button">Отправить</button>
		</form>
		<button type="button" class="btn-close">×</button>
	</div>`);
		$('body').toggleClass('lock');
	});

	$('.btn-other').on('click', function(e){
		e.preventDefault();
		$('.form-container').removeClass('hidden').html(`<div class="form-block">
		<h3>Доп. услуги</h3>
		<form class="ajax-form">
			<input id="what" type="hidden" name="whatform" value="Форма - Доп. услуги" />
			<input id="name" name="name" type="text" placeholder="Ваше имя" size="25" required>
			<input id="phone" name="phone" type="tel" placeholder="Ваш телефон" required>
			<button id="submitForm" type="button" class="button">Отправить</button>
		</form>
		<button type="button" class="btn-close">×</button>
	</div>`);
		$('body').toggleClass('lock');
	});

    //close popup
	$('.form-container').on('click', function(event){
		if( $(event.target).is('.btn-close') || $(event.target).is('.form-container') ) {
			event.preventDefault();
			$(this).addClass('hidden');
			$('body').removeClass('lock');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
			$('.form-container').addClass('hidden');
			$('body').removeClass('lock');
	    }
	});

});