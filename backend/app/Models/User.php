<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Ensure the fields are mass assignable
    protected $fillable = [
        'name',
        'email',
        'password',
        'dob',  // Add 'dob' if it is not already there
    ];

    // Optionally, hide sensitive attributes like password
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Cast the date format for 'dob'
    protected $casts = [
        'dob' => 'datetime',
    ];
}
