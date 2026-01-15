import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gym from "../../Assets/Projects/gym.png";
import tourism from "../../Assets/Projects/tourism.png";
import netflix from "../../Assets/Projects/netflix.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import ticket from "../../Assets/Projects/ticket.png";
import project from "../../Assets/Projects/mgmt.png";
import assistant from "../../Assets/Projects/Rag Project.png";
import company from "../../Assets/Projects/Company Owner Details.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assistant}
              isBlog={false}
              title="Multi-Source RAG Analyzer"
              description="Developed a multi-document RAG chat system using LangChain, Perplexity API and HF embeddings to analyze PDFs with relevance scoring and source citations and interactive visualizations. Deployed on Hugging Face Spaces, reducing information extraction time by 70%."
              ghLink="https://huggingface.co/spaces/harshrajmishra111/my-rag-dashboard"
              demoLink="https://huggingface.co/spaces/harshrajmishra111/my-rag-dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={company}
              isBlog={false}
              title="Company Ownership Feature (CAPRAE)"
              description="Developed a feature with APIs and Gemini AI to fetch company owner details (founder, company, LinkedIn, etc.), Integrated into SaaSquatch's Get Owner Details button at Leads enrichment page, enhancing lead qualification and saving 80% research time. Live on Caprae Capital’s SaaSquatch Platform."
              ghLink="https://www.saasquatchleads.com/"
              //demoLink="https://huggingface.co/spaces/harshrajmishra111/my-rag-dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Retain AI"
              description="A full-stack ML application predicting customer churn by analyzing user behavior and sentiment using BERT for sentiment analysis on a big dataset of about 3.5 lakh data points. Using deep learning with multi-head attention layers, achieved 95% accuracy."
              ghLink="https://github.com/harshrajmishra111/Retain_AI"
              //demoLink="https://netflix-clone-website-kappa.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourism}
              isBlog={false}
              title="MXPERT"
              description="An AI-driven platform automating interview panelist selection by matching job descriptions with candidate skillsets using AI/ML scoring. I created the backend using NLP and a custom similarity algorithm, reducing the hiring process time by 40%."
              ghLink="https://github.com/harshrajmishra111/MXPERT"
              demoLink="
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="ZenInbox"
              description="An AI-powered task management system — the idea is to gather key messages from Gmail, Slack, Discord, and Telegram, score them by urgency and deadlines, and present them as a clear, actionable task list in a sleek, intuitive UI that seamlessly blends automation, intelligence, and productivity."
              ghLink="https://github.com/harshrajmishra111/ZenInbox"
              demoLink="https://v0-new-project-ggs40znzpsl.vercel.app
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="AI-Driven Skin Lesion Diagnostic System"
              description="Skin cancer detection system using deep learning models to analyze and classify various types of skin cancer from images. It leverages ground truth data for precision and achieves 98% accuracy in predicting the cancer type."
              ghLink="https://github.com/harshrajmishra111/AI-Powered-Skin-Cancer-Diagnosis"
              demoLink="gym-website-roan-five.vercel.app
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Alzheimer's Detection and Severity Assessment"
              description="An advanced Alzheimer’s diagnosis and severity assessment system that harnesses MRI analysis with deep learning, GANs, and explainable AI (XAI) — delivering highly accurate, interpretable, and trustworthy results."
              ghLink="https://github.com/harshrajmishra111/Alzheimer-s-Detection-and-Severity-Assessment"
              demoLink="https://hostelhub-management-system.vercel.app/
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Automated Trends Pro: SEO"
              description="Trend Magnet Pro: Your automatic SEO ally for real-time insights and automated trend analysis, enhanced with the power of Google Trends. It empowers marketers and analysts to identify emerging topics, track keyword performance, and optimize strategies with precision."
              ghLink="https://github.com/harshrajmishra111/Automated-Trends-Pro"
              demoLink="gym-website-roan-five.vercel.app
"
            />
          </Col>


                    {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourism}
              isBlog={false}
              title="Meghalaya Tourism Website"
              description="This Meghalaya Tourism website showcases the state’s attractions and culture with a responsive design and intuitive navigation. Built with **HTML5**, **CSS3**, and **JavaScript**, it offers a seamless way to explore Meghalaya’s beauty."
              ghLink="https://github.com/iabhijeet24/Meghalaya-Tourism-Website"
              demoLink=""
            />
          </Col>
                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assistant}
              isBlog={false}
              title="Personal Voice Assistant"
              description="This Meghalaya Tourism website showcases the state’s attractions and culture with a responsive design and intuitive navigation. Built with **HTML5**, **CSS3**, and **JavaScript**, it offers a seamless way to explore Meghalaya’s beauty."
              ghLink="https://github.com/iabhijeet24/Voice-Assistant-JS"
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
