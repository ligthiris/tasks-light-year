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
		$taskName = Input::get('name');
		$taskDate = Input::get('due_date');
		$taskDone = false;

		$task = new Task();
		$task->name = $taskName;
		$task->due_date = $taskDate;
		$task->done = $taskDone;
		$task->save();

		return Response::json($task);
	}

}
