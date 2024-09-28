import app from "./app.js";

// Fallback to port 4547 if process.env.PORT is not set
const PORT = process.env.PORT || 4547;

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);

})
