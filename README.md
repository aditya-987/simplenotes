# Notes App

A simple note-taking web application built with React. This app allows users to create, edit, save, and manage their notes with a clean and intuitive interface.

## Features

- **Create Notes**: Add new notes with a simple click
- **Edit Notes**: Modify title and content of existing notes
- **Delete Notes**: Remove unwanted notes with one click
- **Auto-save**: Notes are automatically saved to localStorage
- **Clean UI**: Modern, minimalist interface
- **Local Storage**: All notes persist between browser sessions

## Technologies Used

- **React 19.1.0** - Frontend framework
- **React DOM 19.1.0** - React rendering for web
- **React Scripts 5.0.1** - Build tools and development server
- **CSS3** - Styling and responsive design
- **LocalStorage API** - Data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🎯 Usage

### Creating a Note
1. Click the `+` button in the sidebar
2. A new note will be created with the title "Untitled"
3. Click on the note to start editing

### Editing a Note
1. Select a note from the sidebar
2. Modify the title in the title input field
3. Write your content in the textarea
4. Click the "Save" button to save your changes

### Deleting a Note
1. Click the ❌ button next to any note in the sidebar
2. The note will be permanently removed

### Navigation
- Click on any note in the sidebar to switch between notes
- The active note is highlighted in the sidebar
- Notes are automatically sorted with the most recent first

## 📁 Project Structure

```
notes-app/
├── public/
│   ├── index.html          # Main HTML file
│   ├── bg-sidepannel.png   # Background image
│   └── robots.txt          # SEO configuration
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Application styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md               # This file
```
## Features in Detail

### State Management
- Uses React hooks (`useState`, `useEffect`) for state management
- Automatic synchronization with localStorage
- Real-time updates across components

### Data Persistence
- Notes are automatically saved to localStorage
- Data persists between browser sessions
- No external dependencies for data storage
