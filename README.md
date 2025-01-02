# Web Scraping Project for Indian MLAs and MLCs Information

This project scrapes detailed information about Indian MLAs (Members of Legislative Assembly) and MLCs (Members of Legislative Council) from the official government website [india.gov.in](https://www.india.gov.in/my-government/whos-who/mlasmlcs). The project is built using **Express.js**, **Selenium**, and is hosted on **Render**.

## Features

- Scrapes and organizes data about MLAs and MLCs.
- Outputs the scraped data in a structured format for further use.

## Technologies Used

- **Express.js**: Backend framework for handling requests and API integration.
- **Selenium**: Automation tool for web scraping.
- **Render**: Cloud hosting platform.

## Prerequisites

Before running this project, ensure you have:

- **Node.js** and **npm** installed on your system.
- Selenium WebDriver installed (configured with the browser of your choice, e.g., ChromeDriver or GeckoDriver).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ParasPalli/mla-express-app.git
   ```

2. Install dependencies:

   ```bash
    npm install
   ```

3. Configure the Selenium WebDriver:

   - Download and set up the WebDriver for your preferred browser.
   - Ensure the WebDriver is added to your system's PATH.

4. Update the project configuration file (if applicable) with the necessary environment variables.

## Usage

1. Start the server:

   ```bash
    node index.js
   ```

2. Access the application:

   Open your browser and navigate to `http://localhost:3000` or the Render-hosted URL.

3. Trigger the scraping functionality through the application.

## Hosted Application

The application is live and accessible at: [Link](https://politian-detials.onrender.com)
