# My-Todo-List

A robust, full-stack task management application designed to help users organize, track, and prioritize their daily activities. Built with persistent data storage to ensure that tasks are securely saved and accessible across sessions.

## 🚀 Features
- **Task Management:** Seamlessly add, edit, and delete tasks.
- **Status Tracking:** Mark tasks as complete or pending to monitor progress.
- **Persistent Storage:** All data is securely stored in a database, ensuring no tasks are lost upon refreshing or closing the application.
- **Responsive UI:** A clean and intuitive interface for managing to-dos on any device.

## 🛠️ Tech Stack
- **Frontend:** React.js 
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/sagarMaurya81/My-Todo-List.git](https://github.com/sagarMaurya81/My-Todo-List.git)
   cd My-Todo-List
2.**Install dependencies:**
   Navigate into the respective frontend and backend directories (if separated) to install the necessary packages.
  ```bash
      npm install
  ```
3.**Environment Variables:**
  Create a .env file in your backend directory. Define your environment variables, including your MongoDB connection URI and the server port.
  ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
  ```
4.**Run the application:**
  ```bash
    npm run dev
