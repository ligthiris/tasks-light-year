<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('tasks');
});

// return all tasks
Route::get('/tasks', function()
{
	return 'All Tasks';
});

// save task
Route::post('/tasks', function()
{

});

// get task
Route::get('/tasks/{id}', function($id)
{
	return 'Task with id ' . $id;
})->where('id', '[0-9]+');