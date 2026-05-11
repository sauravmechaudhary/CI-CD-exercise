const express = require('express')
const app = express()

// Get the port from environment variables (important for Render)
const PORT = process.env.PORT || 5001

// Serve the static files from the Webpack build folder
app.use(express.static('dist'))

// Health check endpoint for Exercise 12
app.get('/health', (req, res) => {
  res.send('ok')
})

// Version endpoint for Exercise 10
app.get('/version', (req, res) => {
  res.send('1') // Increment this to '2', '3', etc., to verify new deployments
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})


app.get('/health', (req, res) => {
  res.send('ok')
})

/*
  Checiking if it works or not
*/