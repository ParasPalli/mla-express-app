const express = require('express');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 3000;

// Set up the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Read CSV data
function readCsvData() {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream('./combines_details.csv')  // Path to your CSV file
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
}

// Route to render the page with politician details
app.get('/', async (req, res) => {
    const searchQuery = req.query.search || '';
    let data = await readCsvData();

    if (searchQuery) {
        data = data.filter(item => 
            item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.Constitution_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.State.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    res.render('index', { data, searchQuery });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
