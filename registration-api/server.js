const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..'))); // Serve static files

const upload = multer();

const saveToExcel = (data, fileName) => {
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet([data]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    xlsx.writeFile(workbook, fileName);
};

// Volunteer Registration API
app.post('/api/volunteer', upload.none(), (req, res) => {
    const { name, email, password } = req.body;
    const volunteerData = { name, email, password };

    saveToExcel(volunteerData, 'volunteers.xlsx');
    res.json({ message: 'Volunteer registered successfully!' });
});

// Member Registration API
app.post('/api/member', upload.none(), (req, res) => {
    const { name, email, password } = req.body;
    const memberData = { name, email, password };

    saveToExcel(memberData, 'members.xlsx');
    res.json({ message: 'Member registered successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
