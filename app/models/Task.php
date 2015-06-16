<?php

class Task extends Eloquent
{
	// table name
	protected $table = 'tasks';

	// fillable attributes
	protected $fillable = ['name', 'due_date', 'done'];

	// using default timestamps
	public $timestamps = true;

	//using Carbon for date fields
	public function getDates() {
		return array('created_at', 'edited_at', 'due_date');
	}

	//applying an accesor for boolean done
	public function getDoneAttribute($value)
	{
		return (bool) $value;
	}

}