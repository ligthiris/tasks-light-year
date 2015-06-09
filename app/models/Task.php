<?php

class Task extends Eloquent
{
	// table name
	protected $table = 'tasks';

	// fillable attributes
	protected $fillable = ['name', 'due_date', 'done'];

	// using default timestamps
	public $timestamps = true;

}