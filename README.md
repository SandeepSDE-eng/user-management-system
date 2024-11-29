# User Management Application

This is a simple **User Management** application built using **React** for the frontend and **Laravel** (PHP) for the backend. The app allows you to:

- View a list of users.
- Add new users.
- Update existing user details.
- Delete users from the system.

## Features

- **User List**: Displays a table of all users with their ID, name, email, and date of birth.
- **Add User**: Allows admins to add new users to the system.
- **Edit User**: Enables users to update their profile details such as name, email, date of birth, and password.
- **Delete User**: Allows admins to remove users from the system.

## Screenshot

Here is a screenshot of the **User Management** interface:

![User Management Screenshot](.frontend/assets/screenshot.png)

## Tech Stack

- **Frontend**: React.js
- **Backend**: Laravel (PHP)
- **State Management**: React `useState` and `useEffect`
- **Styling**: Inline CSS and Bootstrap for basic styling
- **API**: RESTful API (CRUD operations for users)

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Composer** (for managing PHP dependencies)
- **PHP** (v7.4 or higher)
- **MySQL** (or any database supported by Laravel)

Ensure that you have both the **frontend (React)** and **backend (Laravel)** set up in your local environment.

### Backend Setup (Laravel)

Follow these steps to set up the **Laravel backend**:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/user-management-app.git
    cd user-management-app
    ```

2. **Install PHP dependencies** using Composer:

    ```bash
    composer install
    ```

3. **Set up environment file**:

    Copy `.env.example` to `.env`:

    ```bash
    cp .env.example .env
    ```

4. **Generate application key**:

    ```bash
    php artisan key:generate
    ```

5. **Set up the database**:

    Configure your `.env` file with your database connection details. For example:

    ```plaintext
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=user_management
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6. **Run migrations** to create the necessary tables:

    ```bash
    php artisan migrate
    ```

7. **Start the Laravel development server**:

    ```bash
    php artisan serve
    ```

   This will start the backend API on `http://127.0.0.1:8000`.

### Frontend Setup (React)

Follow these steps to set up the **React frontend**:

1. **Navigate to the frontend directory**:

    If you're in the backend directory, change to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. **Install React dependencies**:

    ```bash
    npm install
    ```

3. **Start the React development server**:

    ```bash
    npm start
    ```

   This will start the frontend on `http://localhost:3000`.

### API Requirements

Ensure that you have the following endpoints running on your backend:

- **GET /api/v1/users**: Fetch all users.
- **GET /api/v1/users/:id**: Fetch a single user by ID.
- **POST /api/v1/users**: Create a new user.
- **PUT /api/v1/users/:id**: Update a user by ID.
- **DELETE /api/v1/users/:id**: Delete a user by ID.

For the backend, you can use **Laravel** to provide these RESTful routes.

### Usage

Once the application is running, you can perform the following actions:

#### Viewing Users

- The user list is displayed in a table with columns for ID, name, email, and date of birth.
- The "Actions" column contains **Update** and **Delete** buttons for each user.

#### Adding a User

- To add a user, you'll need to send a `POST` request to the backend API with the user's data.
- The frontend provides a simple form to enter the full name, email, password, and date of birth.

#### Updating a User

- Clicking the **Update** button next to a user will show an editable form with the user's details.
- After making changes, clicking **Save Changes** will send a `PUT` request to the backend API to update the user's details.

#### Deleting a User

- Clicking the **Delete** button next to a user will send a `DELETE` request to the backend API to remove the user from the system.

## File Structure

```plaintext
├── src/
│   ├── assets/
│   │   └── screenshot.png    # Screenshot image
│   ├── api/
│   │   └── users.js    # Contains API calls for CRUD operations on users
│   ├── components/
│   │   └── UserTable.js  # Table to display users with action buttons
│   ├── App.js         # Main app component
│   └── index.js       # Entry point for React
├── backend/             # Laravel backend folder
│   ├── app/
│   ├── database/
│   ├── routes/
│   ├── .env            # Laravel environment configuration
│   ├── composer.json   # PHP dependencies
│   └── server.php      # Laravel entry point
├── package.json       # Project dependencies and configuration for React
├── README.md          # Project documentation (this file)
└── .gitignore         # Git ignore file
