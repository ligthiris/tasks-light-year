<?php

class TaskController extends BaseController {

	public function getTasks()
	{
		return 'All Tasks';
	}

	public function getTask($id)
	{
		return 'Task with id ' . $id;
	}

	public function saveTask()
	{

	}

}
