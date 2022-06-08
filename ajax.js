
	$('document').ready(function(){
		$('#form11').validate(
		{	
			//Правила
			rules:{
				"name1":{ required:true, minlength:3 },
				"phone1":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name1":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone1":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form11,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	
	//2
	$('document').ready(function(){
		$('#form12').validate(
		{	
			//Правила
			rules:{
				"name2":{ required:true, minlength:3 },
				"phone2":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name2":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone2":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form12,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
//3
	$('document').ready(function(){
		$('#form13').validate(
		{	
			//Правила
			rules:{
				"name3":{ required:true, minlength:3 },
				"phone3":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name3":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone3":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form13,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//4
	$('document').ready(function(){
		$('#form14').validate(
		{	
			//Правила
			rules:{
				"name4":{ required:true, minlength:3 },
				"phone4":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name4":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone4":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form14,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//5
	$('document').ready(function(){
		$('#form15').validate(
		{	
			//Правила
			rules:{
				"name5":{ required:true, minlength:3 },
				"phone5":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name5":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone5":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form15,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//6
	$('document').ready(function(){
		$('#form16').validate(
		{	
			//Правила
			rules:{
				"name6":{ required:true, minlength:3 },
				"phone6":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name6":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone6":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form16,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//7
	$('document').ready(function(){
		$('#form17').validate(
		{	
			//Правила
			rules:{
				"name7":{ required:true, minlength:3 },
				"phone7":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name7":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone7":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form17,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//8
	$('document').ready(function(){
		$('#form18').validate(
		{	
			//Правила
			rules:{
				"name8":{ required:true, minlength:3 },
				"phone8":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name8":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone8":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form18,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//9
	$('document').ready(function(){
		$('#form19').validate(
		{	
			//Правила
			rules:{
				"name9":{ required:true, minlength:3 },
				"phone9":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name9":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone9":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form19,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//10
	$('document').ready(function(){
		$('#form20').validate(
		{	
			//Правила
			rules:{
				"name10":{ required:true, minlength:3 },
				"phone10":{ required:true }
			},

			//Текста предупреждений
			messages:{
				"name10":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone10":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#form20,#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13').serialize();
        $.ajax({
          type: 'POST',
          url: 'index1.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	//11
	$('document').ready(function(){
		$('#formsss44').validate(
		{	
			//Правила
			rules:{
				"name":{ required:true, minlength:3 },
				"phone":{ required:true },
				"email":{ required:true, email: true }
			},

			//Текста предупреждений
			messages:{
				"name":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>", 
minlength: "<span style='color:red;'>Введите ваше имя!</a>" },
				"phone":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>" },
				"email":{ required:"<div style='color:red;font-size: 15px;'>Обязательное поле!</a>",
email: "<div style='color:red;'>Введите ваш емейл!</a>" }
			},

			//Обработчик и отправка данных
			submitHandler: function call() {
 	  var msg   = $('#formsss,#formsss2,#formsss3,#formsss4,#formsss5,#formsss6,#formsss7,#formsss8,#formsss9,#formsss10,#formsss13,#formsss44').serialize();
        $.ajax({
          type: 'POST',
          url: 'index2.php',
          data: msg,
          success: function(data) {
            $("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }


		})
	});
	
	
	
	
	
	
	function polit() {
 	  var msg   = $('').serialize();
        $.ajax({
          type: 'POST',
          url: 'polit.php',
          data: msg,
          success: function(data) {
            
			$("#modal").modal('show');
		    $('#wb_uid777').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }
    
    	
	function slide() {
 	  var msg   = $('').serialize();
        $.ajax({
          type: 'POST',
          url: 'slide.php',
          data: msg,
          success: function(data) {
            
			$("#modal").modal('show');
		    $('#wb_uid177').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }