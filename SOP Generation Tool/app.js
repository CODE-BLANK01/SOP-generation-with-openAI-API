const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const { sopgeneration } = require("./openAIcomms");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));

//Endpoint client routes
app.get("/", (req, res, next) => {
  res.render("home");
});

app.get("/generate-sop", (req, res, next) => {
  res.render("form");
});

app.post("/submit", async (req, res) => {
  // Store form data
  const formData = req.body;
  const sop = await sopgeneration(formData);

  sendEmail(formData.email, sop);

  // Respond to the client
  res.send("Form submitted successfully.");
});

const sendEmail = async (to, sop) => {
  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "enoch.ritchie52@ethereal.email",
      pass: "S4nFFy1PSQHysFspzD",
    },
  });

  // Compose email
  const mailOptions = {
    from: "absbmessi@gmail.com",
    to: to,
    subject: "Statement of Purpose",
    text: JSON.stringify(sop),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
