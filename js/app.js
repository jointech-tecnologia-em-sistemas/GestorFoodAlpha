function dialog(message,typeButton,textButton,orientation){
	$('#dialog').remove();
	$('<div>',{
		'class' : 'window-modal-wrap',
		'id' : 'dialog',
		append : [
			$('<div>',{
				'class' : 'window-modal',
				append : [
					$('<header>',{
						append : [
							$('<h1>',{
								'text': 'Messagem do Sistema'
							})
						]
					}),
					$('<section>').append(message),
					$('<footer>',{
						append : [
							$('<div>',{
								id : "dialog-footer-container"
							})
						]
					})
				]
			})
		],
		appendTo : 'body'
	});
	
	if(typeButton == 'buttonClose'){
		$('<div>',{
			append : [
				$('<a>',{
					'class' : 'btn btn-large btn-inverse',
					'text' : textButton,
					'href' : '#',
					click : function(event){
						event.preventDefault();
						$('#dialog').remove();
					}
				})
			],
			appendTo : '#dialog-footer-container'
		});
	}else{
		$('#dialog-footer-container').append(typeButton);
	}
}

function openLoading(){
	$('<div>',{
		'id' : 'loading',			
		append : [
			$('<label>',{
				'class' : 'btn btn-large',
				'text' : 'Aguarde...'
			})
		],
		appendTo : 'body'
	}).fadeIn(700);
}

function closeLoading(){
	$('#loading').fadeOut(700).remove();
}

function about(){
	dialog('Nome: Gestor Food Mobile <br/> Autor: Jointech Tecnologia em Sistemas <br/> Versão: 0.1.0 Beta','buttonClose','OK','none');
}

function errorException(handle){
	xhr = handle;
	status = handle.status;
	if(status == 0){
		dialog('Servidor '+ generalIP +' não encontrado <br/> Verifique a conexão!','buttonClose','OK','none');
	}
	else if(status == 500){
		dialog('Erro interno do servidor <br/> Contate o administrador','buttonClose','OK','none');
	}
	else if(status == 404){
		dialog('Arquivo não encontrado <br/> Contate o administrador','buttonClose','OK','none');
	}else{
		dialog('Erro não identificado:' + xhr.responseText,'buttonClose','OK','none');
	}		
}