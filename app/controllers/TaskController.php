<?php

class TaskController extends BaseController {

	public function getTasks()
	{
		$users = Task::all();
		return Response::json($users);
	}

	public function getTask($id)
	{
		return 'Task with id ' . $id;
	}

	public function saveTask()
	{
		$taskName = Input::get('taskName');
		$taskDate = Input::get('taskDate');

		$task = new Task();
		$task->name = $taskName;
		$task->due_date = $taskDate;
		$task->done = false;
		$task->save();

		return Response::json($task);
	}

}
