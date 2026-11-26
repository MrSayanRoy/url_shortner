
const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const URL = require("./models/url");

const app = express();
const PORT = 3000;

// MongoDB Connection
connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log("MongoDB connected"));

// Middleware
app.use(express.json());

// Routes
app.use("/url", urlRoute);

// Redirect Route
app.get("/:shortId", async (req, res) => {

    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).send("URL not found");
    }

    res.redirect(entry.redirectUrl);

}); // IMPORTANT: Close the route here!

// Start Server
app.listen(PORT, () => {
    console.log(`Server Started at PORT:${PORT}`);
});
