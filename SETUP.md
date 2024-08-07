# Kryptonion App Setup Instructions

## Prerequisites

1. **Download and Install Node.js**
   - [Node.js Download](https://nodejs.org/en)

2. **Download and Install MongoDB Community Edition**
   - [MongoDB Community Edition Download](https://www.mongodb.com/try/download/community)
   - (Optional) **Download MongoDB Compass for GUI Experience**
     - [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)

## Setup Instructions

1. **Create New Database**
   - Create a new database named `kryptonion_app` in your MongoDB server.

2. **Clone the Repository**
   - Clone the repository to your system and navigate to the `kryptonion_app` directory.
   
   ```sh
   git clone <repository-url>
   cd kryptonion_app
   ```

3. **The project has two sub-projects:**
	- kryptonion_app_api for the backend (Node.js and Express)
    - kryptonion_app_ui for the frontend (React.js)

4. **Running the Backend Server**
    - Navigate to the kryptonion_app_api directory and run the backend server on PORT 5000.
	
	```sh
	cd kryptonion_app_api
	npm install
	npm start
	```
5. **Running the Frontend Server**
    - Navigate to the kryptonion_app_ui directory and run the frontend server on PORT 3000.
	
	```sh
	cd kryptonion_app_ui
	npm install
	
	npm start
	or,
	npm run build
	```