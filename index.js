// Import required modules
const express = require('express');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mock database
let mlaData = {
    "110001": {
        name: "John Doe",
        position: "MLA",
        email: "john.doe@example.com",
        phone: "1234567890"
    },
    "400001": {
        name: "Jane Smith",
        position: "Nagar Sevak",
        email: "jane.smith@example.com",
        phone: "0987654321"
    }
};

// Endpoint 1: Get MLA or Nagar Sevak details
app.get('/mla-details/:pincode', (req, res) => {
    const pincode = req.params.pincode;
    const details = mlaData[pincode];

    if (details) {
        res.status(200).json({
            success: true,
            data: details
        });
    } else {
        res.status(404).json({
            success: false,
            message: `No details found for pincode: ${pincode}`
        });
    }
});

// Endpoint 2: Update MLA or Nagar Sevak details
app.put('/mla-details/:pincode', (req, res) => {
    const pincode = req.params.pincode;
    const { name, position, email, phone } = req.body;

    // Validate request body
    if (!name || !position || !email || !phone) {
        return res.status(400).json({
            success: false,
            message: "All fields (name, position, email, phone) are required"
        });
    }

    // Update or create entry
    mlaData[pincode] = { name, position, email, phone };

    res.status(200).json({
        success: true,
        message: `Details updated for pincode: ${pincode}`,
        data: mlaData[pincode]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
