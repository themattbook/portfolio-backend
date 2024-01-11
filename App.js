const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const workHistory = [
  { position: 'Software Engineer', company: 'Tech Company A', year: '2018-2020' },
  { position: 'Web Developer', company: 'Web Agency B', year: '2016-2018' },
];

const aboutMe = {
  name: 'Your Name',
  bio: 'I am a passionate and experienced software developer with expertise in web development.',
};

app.get('/history', (req, res) => {
  res.json({ workHistory });
});

app.get('/about', (req, res) => {
  res.json({ aboutMe });
});

app.get('/resume', (req, res) => {
  const resumeFilePath = path.join(__dirname, 'matt_sweet_resume.pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=matt_sweet_resume.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.sendFile(resumeFilePath);
});

app.get('/github', (req, res) => {
  res.json({ githubUrl: 'https://github.com/themattbook' });
});

app.get('/linkedin', (req, res) => {
  res.json({ linkedinUrl: 'https://linkedin.com/in/meetmattsweet' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
