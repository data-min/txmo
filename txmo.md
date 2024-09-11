Structure
memo-chat-app/
│
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ └── manifest.json
│ │
│ ├── src/
│ │ ├── components/
│ │ │ ├── ChatBox.js
│ │ │ ├── MessageBubble.js
│ │ │ ├── MemoList.js
│ │ │ ├── MemoItem.js
│ │ │ ├── NewMemoButton.js
│ │ │ └── SearchBar.js
│ │ │
│ │ ├── pages/
│ │ │ ├── ChatInterface.js
│ │ │ ├── MemoListView.js
│ │ │ └── SettingsPage.js
│ │ │
│ │ ├── services/
│ │ │ ├── api.js
│ │ │ └── socket.js
│ │ │
│ │ ├── styles/
│ │ │ └── index.css
│ │ │
│ │ ├── App.js
│ │ └── index.js
│ │
│ ├── package.json
│ └── README.md
│
├── backend/
│ ├── config/
│ │ └── database.js
│ │
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── memoController.js
│ │ └── chatController.js
│ │
│ ├── models/
│ │ ├── User.js
│ │ ├── Memo.js
│ │ └── ChatMessage.js
│ │
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── memoRoutes.js
│ │ └── chatRoutes.js
│ │
│ ├── middleware/
│ │ └── auth.js
│ │
│ ├── utils/
│ │ └── socketHandler.js
│ │
│ ├── app.js
│ ├── server.js
│ ├── package.json
│ └── README.md
│
├── .gitignore
└── README.md
