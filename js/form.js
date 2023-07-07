jQuery(document).ready(function () { // проверка на наличие html документа
    jQuery("#form").submit(function () { // событие отправки с формы
        let form_data = jQuery(this).serialize(); // получение данных с полей
		jQuery.ajax({
			type: "POST", // Метод отправки
			url: "sendform.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: swal({
				title: "Спасибо! Ваша заявка отправлена",
                type: "success",
                showConfirmButton: false,
                timer: 2000
            })
        });
        $(this).find('input, textarea').prop('disabled', true); // предотвращение повторной отправки полей
        event.preventDefault();
    });
});