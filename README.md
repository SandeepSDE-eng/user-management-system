# User Management Application

This is a simple User Management application built using **React** for the frontend and a **RESTful API** for managing users. The app allows you to:

- View a list of users.
- Add new users.
- Update existing user details.
- Delete users from the system.

## Features

- **User List**: Displays a table of all users with their ID, name, email, and date of birth.
- **Add User**: Allows admins to add new users to the system.
- **Edit User**: Enables users to update their profile details such as name, email, and date of birth.
- **Delete User**: Allows admins to remove users from the system.

## Tech Stack

- **Frontend**: React.js
- **Backend**: A RESTful API (assuming a backend API at `http://127.0.0.1:8000/api/v1/users` is available)
- **State Management**: React `useState` and `useEffect`
- **Styling**: Inline CSS and Bootstrap for basic styling

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A backend API running on `http://127.0.0.1:8000` for managing users (with endpoints like `/users`, `/users/:id` for CRUD operations)

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/user-management-app.git
    cd user-management-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

   This will start the React app, and it will be available at `http://localhost:3000`.

### API Requirements

Ensure that you have a backend API running with the following endpoints:

- **GET /api/v1/users**: Fetch all users.
- **GET /api/v1/users/:id**: Fetch a single user by ID.
- **POST /api/v1/users**: Create a new user.
- **PUT /api/v1/users/:id**: Update a user by ID.
- **DELETE /api/v1/users/:id**: Delete a user by ID.

For the backend, you can use any server-side technology like Node.js, Django, or Laravel that supports RESTful routes.

## Usage

Once the application is running, you can perform the following actions:

### Viewing Users

- The user list is displayed in a table with columns for ID, name, email, and date of birth.
- The "Actions" column contains **Update** and **Delete** buttons for each user.

### Adding a User

- To add a user, you'll need to send a `POST` request to the backend API with the user's data.
- The frontend provides a simple form to enter the full name, email, password, and date of birth.

### Updating a User

- Clicking the **Update** button next to a user will show an editable form with the user's details.
- After making changes, clicking **Save Changes** will send a `PUT` request to the backend API to update the user's details.

### Deleting a User

- Clicking the **Delete** button next to a user will send a `DELETE` request to the backend API to remove the user from the system.

## File Structure

```plaintext
├── src/
│   ├── api/
│   │   └── users.js    # Contains API calls for CRUD operations on users
│   ├── components/
│   │   └── UserTable.js  # Table to display users with action buttons
│   ├── App.js         # Main app component
│   └── index.js       # Entry point for React
├── package.json       # Project dependencies and configuration
├── README.md          # Project documentation (this file)
└── .gitignore         # Git ignore file
