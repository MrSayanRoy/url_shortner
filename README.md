# 🔗 URL Shortener

A simple and efficient URL Shortener built using **Node.js, Express.js, and MongoDB**. This application converts long URLs into shorter, shareable links and tracks the number of visits to each shortened URL.

## 🚀 Features

- **Short URL Generation:** Generate unique short IDs for long URLs.
- **URL Redirection:** Redirect users to the original URL using the shortened link.
- **Visit Tracking:** Track the number of visits using timestamps.
- **MongoDB Integration:** Store URL information and visit history in MongoDB.
- **REST API:** Handle URL creation and redirection through Express.js.

## 🛠️ Tech Stack

- **Backend:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Development Tool:** Nodemon

## 📁 Project Structure

```text
url-shortener/
│
├── controllers/
│   └── url.js
│
├── models/
│   └── url.js
│
├── routes/
│   └── url.js
│
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/MrSayanRoy/url_shortner.git
```

### 2. Navigate to the project directory

```bash
cd url_shortner
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your system.

The application uses the following MongoDB connection:

```text
mongodb://localhost:27017/short-url
```

### 5. Start the server

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

The server will start at:

```text
http://localhost:3000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/url` | Generate a shortened URL |
| GET | `/:shortId` | Redirect to the original URL |

## 🧪 API Usage

### 1. Generate a Short URL

**Request:**

```http
POST http://localhost:3000/url
```

**Request Body (JSON):**

```json
{
  "url": "https://www.youtube.com/"
}
```

**Example Response:**

```json
{
  "id": "abc123"
}
```

*Note: The response format depends on your route controller implementation.*

### 2. Redirect to Original URL

Open the generated short URL in your browser:

```text
http://localhost:3000/abc123
```

The application will find the corresponding original URL in MongoDB, update its visit history, and redirect the user.

## 🗄️ Database Schema

Each URL document stores:

| Field | Description |
|---|---|
| `shortId` | Unique identifier for the shortened URL |
| `redirectURL` | Original URL |
| `visitHistory` | Array containing visit timestamps |

## 🔮 Future Improvements

- [ ] User authentication using JWT
- [ ] Custom short URL generation
- [ ] URL expiration functionality
- [ ] Click analytics dashboard
- [ ] QR code generation
- [ ] React-based frontend
- [ ] User-specific URL management

## 👨‍💻 Author

**Sayan Roy**

- GitHub: [@MrSayanRoy](https://github.com/MrSayanRoy)
- Portfolio: [My Portfolio](https://my-portfolio-website-rho-black.vercel.app/)

---

⭐ If you find this project useful, consider giving it a star!
