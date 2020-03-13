function AddComment() {
	let $new = $("<li><svg><circle></circle></svg><div><h5></h5><h6></h6><p></p></div></li>");
	$new.addClass("media");
	$new.find("div").addClass("media-body");
	$new.find("h5").html($("#inputSubject").val());
	$new.find("h6").html($("#inputName").val());
	$new.find("p").html($("#inputComment").val());
	$new.find("svg").attr({
		"height": 100,
		"width": 100
	});
	$new.find("circle").attr({
		"cx": 50,
		"cy": 50,
		"r": 40,
		"fill": $("input[name=inputcolor]:checked").val()
	});
	$("#comments").append($new);
	$("form")[0].reset();

}
function SaveComment(){


}
$(function(){
	$.ajax({
		type: 'GET',
		url: 'file.txt'
	})
})
