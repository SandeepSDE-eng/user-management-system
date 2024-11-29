<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Fetch all users
    public function index()
    {
        return response()->json(User::all(), 200);  // This fetches all users
    }

    // Create a new user
    public function store(Request $request)
    {
        // Validate incoming data
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|unique:users,email',  // Ensure 'email' is unique
        'password' => 'required|string|min:6',
        'dob' => 'required|date',
    ]);

        // If validation passes, create the user
    $user = User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
        'dob' => $validated['dob'],
    ]);

        return response()->json($user, 201);  // Return newly created user
    }

    // Fetch a single user
    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user, 200);  // Return user data
    }

    // Update a user
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|email|unique:users,email,' . $id,
            'password' => 'string|min:6',
            'dob' => 'date',
        ]);

        $user->update([
            'name' => $validated['name'] ?? $user->name,
            'email' => $validated['email'] ?? $user->email,
            'password' => isset($validated['password']) ? Hash::make($validated['password']) : $user->password,
            'dob' => $validated['dob'] ?? $user->dob,
        ]);

        return response()->json($user, 200);  // Return updated user data
    }

    // Delete a user
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);  // Return success message
    }
}
