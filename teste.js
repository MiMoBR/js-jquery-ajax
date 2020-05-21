$.ajax({
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
----------------------------------------------- URL find json object -----------------------------------------------
$.ajax({
	type: 'GET',
	url: '<%=request.getContextPath()%>/ajax?',
	data : {
		'cmd' : 'listIntervals',
	},
//			dataType : 'json',
//	 	complete : function(data){
//			alert('Foi gerado com sucesso----plate---'+data.contactReason+'---startDate---'+startDate);
//		},
	success: function(data){
		console.log('----------');
		console.log(data);
		console.log('----------');
//				$('#modalwait').hide();
	},
	error : function(){
//				$('#modalwait').hide();	
		alert('DEU CORONA');
	}
});
