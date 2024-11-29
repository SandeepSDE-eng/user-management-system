<?php

use App\Http\Controllers\UserController;

Route::prefix('v1')->group(function () {
    // Fetch all users
    Route::get('users', [UserController::class, 'index']);
    
    // Create a new user
    Route::post('users', [UserController::class, 'store']);  // Ensure this route exists
    
    // Fetch a single user
    Route::get('users/{id}', [UserController::class, 'show']);
    
    // Update a user
    Route::put('users/{id}', [UserController::class, 'update']);
    
    // Delete a user
    Route::delete('users/{id}', [UserController::class, 'destroy']);
});
