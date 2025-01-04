"use client";

import React from "react";
import { Box, Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import { GitHub, Link as LinkIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Finance Tracker",
    description: "This is a personal Finance tracker made by me using nextjs and tailwindcss.",
    github: "https://github.com/zainabqureshi09/Personal-Finance-Tracker",
    vercel: "https://personal-finance-tracker-woad.vercel.app",
  },
  {
    title: "Quiz Application",
    description: "This is Quiz Application just build using HTML CSS and JS",
    github: "https://github.com/zainabqureshi09/html-quiz-application",
    vercel: "https://html-quiz-application.vercel.app/",
  },
  {
    title: "ToDo List Application",
    description: "The Todo List application just made to enhance my coding skills.",
    github: "https://github.com/zainabqureshi09/To-do-web",
    vercel: "https://to-do-web-blush.vercel.app/",
  },
  {
    title: "Project 4",
    description: "A dummy project description for Project 4.",
    github: "https://github.com/example/project4",
    vercel: "https://project4.vercel.app",
  },
  {
    title: "Expenses Tracker",
    description: " Built with HTML5, CSS3, and TypeScript, it's sleek, easy-to-use, and ready to help you save. Want to see it in action? 🚀",
    github: "https://github.com/zainabqureshi09/expenses-tracker",
    vercel: "https://expenses-tracker-phi.vercel.app/",
  },
  {
    title: "My Resume Web",
    description: "This is static resume just made by me using html and css.",
    github: "https://github.com/zainabqureshi09/hackaton-static-resume-builder",
    vercel: "https://hackaton-static-resume-builder.vercel.app/",
  },
  {
    title: "Dynamic resume builder",
    description: "This is dynamic resume builder.",
    github: "https://github.com/zainabqureshi09/dynamic-resume-builder",
    vercel: "https://dynamic-resume-builder-zeta-plum.vercel.app/",
  },
  {
    title: "Editable resume builder",
    description: "This is editable resume builder made by me using html css and javascript.",
    github: "https://github.com/zainabqureshi09/Editable-resume-builder",
    vercel: "https://editable-resume-builder-kohl.vercel.app/",
  },
  {
    title: "Shareable resume builder",
    description: "This is shareable resume builder made by me using html css and javascript.",
    github: "https://github.com/zainabqureshi09/shareable-resume-builder",
    vercel: "https://shareable-resume-builder-six.vercel.app/",
  },
  {
    title: "SEcommerce UI",
    description: "This is Ecommerce website UI website just made using Nextjs and tailwindcss.",
    github: "https://github.com/zainabqureshi09/hackathon-templ-8",
    vercel: "https://hackathon-templ-8.vercel.app/",
  },
  {
    title: "College Website",
    description: "This is College Website for exhibition just made using Nextjs and tailwindcss.",
    github: "https://github.com/zainabqureshi09/fkwc-college-web",
    vercel: "https://fkwc-college-web.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <Box sx={{ padding: "2rem",  minHeight: "100vh" }}>
     
       
     <h1  className="text-5xl font-bold text-center mb-12 text-blue-800">
        My Projects
        </h1>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.4 }}
          >
            <Card
              sx={{
                background: "linear-gradient(135deg, #e3f2fd, #f9fbe7)",
                borderRadius: "15px",
                color: "rgb(75,0,130)",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
        
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "1rem" }}>
                  {project.description}
                </Typography>
                <Box>
                  <IconButton
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginRight: "0.5rem" }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
