
$(function() {

	$('.datepicker').datepicker({language: 'es', format: 'dd/mm/yyyy'});
	$("form").submit(addTask);

});

var addTask = function() {

	var newTask = {};
	newTask.done = false;
	newTask.name = $("#taskName").val();
	newTask.date = $("#taskDate").datepicker('getDate');

	var item = $(".list-group-item:first").clone();
	item.find("[data-field=task-name]").html(newTask.name);
	item.find("[data-field=task-date]").html(moment(newTask.date).fromNow());
	item.find("button").click(checkTask);
	item.appendTo(".list-group").show().data(newTask);

	$(":input").val("");
	$("input:first").focus();
	return false;
};

var checkTask = function() {
	var item = $(this).parent(".list-group-item");
	if (item.data("done") === false) {
		$(this).removeClass("btn-default").addClass("btn-success").next("span").addClass("done");
		item.data("done", true);
	} else {
		$(this).removeClass("btn-success").addClass("btn-default").next("span").removeClass("done");
		item.data("done", false);
	}
};