<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // You can register any services here if needed
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // This will ensure all routes in api.php have 'api' prefix and middleware
        Route::prefix('api')             // Set the global route prefix
            ->middleware('api')          // Apply 'api' middleware
            ->group(base_path('routes/api.php'));  // Load routes from api.php
    }
}
