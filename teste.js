jQuery.ajax({
	type: 'post',
	url: '<%=r',
	data : {
		'<%=%>' : '<%=%>',
		'<%=%>': plateJava,
		'<%=%>': startDate.val()
	},
	dataType : 'json',
// 	complete : function(data){
//		alert('Foi gerado com sucesso----plate---'+data.contactReason+'---startDate---'+startDate);
//	},
	success: function(data){

		$('#modalwait').hide();
	},
	error : function(){
		$('#modalwait').hide();	
		alert('xxxxxxxxxxxxxxx.');
	}
});
