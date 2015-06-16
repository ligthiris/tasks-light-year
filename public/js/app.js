
$(function() {

	$('.datepicker').datepicker({language: 'es', format: 'dd/mm/yyyy', forceParse: true, todayHighlight: true, todayBtn: true});
	$("form").submit(addTask);

	// get saved tasks
	$.get('/tasks').done( function(data) {
		$(data).each(function(i, task){
			var item = $(".list-group-item:first").clone();
			item.find("[data-field=task-name]").html(task.name);
			item.find("[data-field=task-date]").html(moment(task.due_date).fromNow());
			if(task.done) { item.find("button").removeClass("btn-default").addClass("btn-success").next("span").addClass("done"); }
			item.find("button").click(checkTask);
			item.appendTo(".list-group").show().data(task);
		});
	});

});

var addTask = function() {

	var newTask = {};
	newTask.done = false;
	newTask.name = $("#taskName").val();
	newTask.due_date = moment($("#taskDate").datepicker("getDate")).format("YYYY-MM-DD");

	$.post('/tasks', newTask).done( function(newTask) {

		var item = $(".list-group-item:first").clone();
		item.find("[data-field=task-name]").html(newTask.name);
		item.find("[data-field=task-date]").html(moment(newTask.due_date).fromNow());
		item.find("button").click(checkTask);
		item.appendTo(".list-group").show().data(newTask);

		$(":input").val("");
		$("input:first").focus();
	});
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