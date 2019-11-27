$.ajax({
	type: 'GET or POST',
	url: 'http://',
	dataType: 'json',
	complete : function(){
		alert('Foi gerado com sucesso');
	},
	success: function(jsonMSG){
		var promoCode = jsonMSG.rs;

		$("#theCode").val(promoCode);
	},
	error : function(){
		alert('erro');
	}
});