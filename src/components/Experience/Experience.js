// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import ExperienceCard from "./ExperienceCard";
// import "./experience-styles.css";
// import capri from "../../Assets/Experience/capri.png";
// import capraecertificate from "../../Assets/Experience/CapraCapital certificate .png";
// import capraelor from "../../Assets/Experience/Lor Caprae Capital .png";
// import mega from "../../Assets/Experience/mega.jpeg";
// import megalor from "../../Assets/Experience/megamindalor.png";
// import megacertificate from "../../Assets/Experience/megaminds certificate .png";
// import upwork from "../../Assets/Experience/Upwork 1.png";
// import upwork2 from "../../Assets/Experience/Upwork profile 2.png";
// import freelancer from "../../Assets/Experience/Freelancer profile.png";
// import freelancerlogo from "../../Assets/Experience/images (5).png";

// function Experience() {
//   return (
//     <div className="experience-section">
//       <Particle />
//       <Container fluid className="relative z-10 py-5 px-3">
//         <Row className="justify-content-center">
//           <Col md={10} className="text-center">
//             <h1 className="text-4xl font-bold text-white mb-3">
//               My <span className="purple">Experience</span>
//             </h1>
//             <p className="text-gray-300 mb-5 text-lg">
//               A snapshot of my professional journey across companies and freelancing.
//             </p>
//           </Col>
//         </Row>

//         <Row className="justify-content-center g-3">
//           {/* ────────────── Caprae Capital ────────────── */}
//           <Col xs={12} md={10}>
//             <ExperienceCard
//               role="ML Intern"
//               company="Caprae Capital"
//               logo={capri}
//               duration="August 2025 - December 2025"
//               points={[
//                 "Increased lead conversion by 15% by integrating machine learning into Caprae Capital's proprietary SaaSquatch Leads.",
//                 "Developed an in-house recruiting platform with the team, automating 70% of manual screening tasks.",
//                 "Collaborated with international, cross-functional teams to deliver key product features."
//               ]}
//               images={[capraecertificate, capraelor]}
//               description={`**Machine Learning Intern — Caprae Capital**

// During my internship at Caprae Capital as a **Machine Learning Intern**, I gained hands-on experience working on multiple features that are currently in production. This role allowed me to work far beyond model development and focus on **end-to-end production systems**, including API design, scalability, system handling, and real-world deployment workflows.

// **Production-Focused Development**

// Instead of limiting my work to machine learning models, I was deeply involved in building complete features from scratch—from research and API selection to backend development, load handling, and integration into live applications. This experience helped me understand how **ML-driven features** are managed, monitored, and scaled in a production environment.

// **Key Projects**

// I worked on several key projects, including:
// ** **
// 1. **Company Ownership Details Feature**
// ** **
// I conducted end-to-end research to identify APIs best suited for business requirements, performance, and scalability. I also contributed to designing an intuitive interface that remains easy to use even for first-time users. To ensure reliability under high traffic, I implemented multiprocessing and developed scalable APIs optimized for production usage.
// ** **
// 2. **LinkedIn & Email Message Generation**
// ** **
// I developed a feature that enables users to generate personalized LinkedIn and email messages by selecting a tone and providing minimal inputs. This helped users initiate meaningful conversations with company owners and decision-makers, improving outreach effectiveness through **ML-powered text generation**.
// ** **
// 3. **Company Insights & Review Summarization**
// ** **
// I worked on a company insights module that aggregates data from platforms such as Google Maps and Glassdoor. Using APIs, we fetch ratings and customer reviews and generate concise summaries highlighting company strengths and weaknesses based on user inputs.
// ** **
// 4. **In-House Recruitment Platform**
// ** **
// I contributed to building an internal recruitment system that supports candidate video submissions, automated response processing, transcript generation, and structured evaluation workflows, streamlining the hiring process through intelligent automation.

// **Production Engineering & Best Practices**

// In addition to feature development, I gained strong exposure to production engineering practices. I worked extensively with Git and GitHub, followed clean commit and PR workflows, and learned how features move from sandbox environments to live servers, including data handling, server-side workflows, and deployment pipelines.

// **Overall Impact**

// Overall, this internship was a valuable learning experience that strengthened my understanding of **production-grade ML systems**, scalable APIs, and real-world software engineering practices.`}
//               projects={[
//                 { 
//                   name: "Company Ownership Details Feature", 
//                   desc: "Conducted API research, implemented multiprocessing and scalable APIs for high-traffic reliability, to get the details of the owner of a company." 
//                 },
//                 { 
//                   name: "LinkedIn & Email Message Generation", 
//                   desc: "Built personalized message generation tool with tone selection, improving outreach effectiveness using ML-powered text generation." 
//                 },
//                 { 
//                   name: "Company Insights & Review Summarization", 
//                   desc: "Developed aggregation module using Google Maps and Glassdoor APIs to generate concise summaries of company strengths and weaknesses." 
//                 },
//                 { 
//                   name: "In-House Recruitment Platform", 
//                   desc: "Contributed to internal system with video submissions, automated processing, transcript generation, and structured evaluation workflows." 
//                 }
//               ]}
//               modalImages={[capraecertificate, capraelor]}
//               companyWebsite={[
//                 { name: "CapraeCapital web", url: "https://www.capraecapital.com/" },
//                 { name: "SaaSquatchLeads web", url: "https://www.saasquatchleads.com/" }
//               ]}
//             />
//           </Col>
//           {/* ────────────── Mega Mind Society Services ────────────── */}
//           <Col xs={12} md={10}>
//             <ExperienceCard
//               role="Technical Team Lead Intern"
//               company="Megaminds IT Services"
//               logo={mega}
//               duration="December 2023 - July 2025"
//               points={[
//                 "Led team on data-driven projects, developing ML/DL models with up to 98% accuracy and improving delivery efficiency by 30%.",
//                 "Collaborated on research initiatives, enhancing methods and solving problems through experimentation.",
//                 "Built NLP-based call transcription prototype for customer insight extraction and pattern analysis"
//               ]}
//               images={[megacertificate, megalor]}
//               description={`**Technical Team Lead Intern — Megaminds IT Services**

// I completed a long and progressive internship journey at Megaminds IT Services of 1.8 years, where I grew from a Developer Intern to a Client Consultant & Data Scientist Intern, and finally to a Technical Team Lead Intern. This experience played a crucial role in shaping my research mindset, technical depth, and leadership skills.

//  ** **
// I joined Megaminds IT Services in December 2023 as a Developer Intern, where I worked on multiple machine learning and data science projects across diverse domains. My responsibilities included building ML models, contributing to end-to-end project development, participating in client meetings, and gaining a strong understanding of the research and problem-solving process behind real-world use cases.

// ** **
// As I progressed into the role of Client Consultant & Data Scientist Intern, my work expanded into deep learning, computer vision, and NLP-based projects. The projects at Megaminds were heavily research-driven, requiring in-depth analysis of existing technologies, identification of gaps, and the development of novel methodologies. I worked on experimenting with multiple model architectures, fine-tuning strategies, and evaluation techniques, comparing results to continuously improve model performance and research outcomes.

// **Leadership Phase**

// In the final phase of my internship, I took on the role of Technical Team Lead Intern, where I led a team of 15+ members. I guided the team through the complete research lifecycle — from problem formulation and literature review to model development, fine-tuning, and result analysis. Alongside technical leadership, I actively handled client discussions, requirement understanding, and solution planning, ensuring alignment between research objectives and business needs.

// **Key Contribution: NLP Call Transcription Prototype**

// Additionally, I contributed to the development of an NLP-based prototype for a client, focused on transcribing customer calls into human-readable text and extracting key insights from conversations. This prototype helped identify important discussion points and patterns from customer interactions and was part of a broader set of research-oriented projects.

// **Summary**

// Throughout this internship, I gained deep practical knowledge of deep learning architectures, computer vision techniques, and NLP systems. I worked extensively with image, text, and tabular datasets, strengthening my ability to design, analyze, and improve models across different data modalities.
// ** **
// Overall, my internship at Megaminds IT Services was a highly enriching experience that strengthened my expertise in research-based AI development, technical leadership, and real-world problem solving, making it a significant milestone in my professional journey.`}

//               projects={[
//                 { name: "Research-Driven ML Projects", desc: "Led experimentation with multiple model architectures, fine-tuning strategies, and evaluation techniques across deep learning, computer vision, and NLP domains." },
//                 { name: "NLP Call Transcription System", desc: "Developed prototype for transcribing customer calls and extracting key insights, identifying patterns from customer interactions." },
//                 { name: "Technical Team Leadership", desc: "Guided 15+ team members through complete research lifecycle including problem formulation, literature review, model development, and result analysis." }
//               ]}
//               modalImages={[megacertificate, megalor]}
//               companyWebsite="https://megamindsit.in/"
//             />
//           </Col>

//           {/* ────────────── Freelance ────────────── */}
//           <Col xs={12} md={10}>
//             <ExperienceCard
//               role="Freelancer Python, AI/ML Developer"
//               company="Upwork/Freelancer"
//               logo={freelancerlogo}
//               duration="2023 - Present"
//               points={[
//                 "Delivered projects on domain involving Python, AI/ML, automation, data scraping, and data science.",
//                 "Maintained high client satisfaction and repeat contracts",
//                 "Completed 7+ freelancing projects on platforms like Freelancer and Upwork."
//               ]}
//               images={[upwork, freelancer]}
//               description={`**Freelancer — Python, ML/DL Developer**

// Alongside my internships, I worked as a freelance developer on platforms such as Upwork and Freelancer, delivering multiple client projects across Python automation, machine learning, deep learning, data scraping, and data analysis. This experience exposed me to a wide range of real-world problem statements and client requirements, helping me develop strong technical adaptability along with effective communication skills.

// **Project Focus & Approach**

// Most of my freelance work involved building small to mid-sized, focused, and practical solutions rather than large-scale applications. These projects were designed to directly solve specific business or operational problems, improving efficiency and usability for clients in real-world scenarios. My work included automation scripts, ML-based prediction systems, data processing pipelines, and lightweight deep learning solutions tailored to individual client needs.

// **Client Communication & Non-Technical Collaboration**

// A key learning from freelancing was understanding how to work closely with clients from non-technical backgrounds. I regularly explained technical concepts, system behavior, and project progress in a simple and structured manner, ensuring transparency and clarity throughout the development process. This approach helped build trust and ensured that deliverables aligned precisely with client expectations.

// **Adaptability & Workflow Lessons**

// Through this experience, I learned the importance of diversifying across technologies and problem domains. Rather than focusing on a single tech stack, I adapted my approach based on the problem at hand, selecting tools and methodologies best suited to the client’s requirements. Meeting deadlines, iterating based on feedback, and delivering functional and reliable solutions became central to my workflow.

// **Overall Impact**

// Overall, freelancing strengthened my ability to translate client requirements into effective technical solutions, enhanced my communication and stakeholder management skills, and reinforced the importance of building technology that is practical, usable, and impactful.`}
//               projects={[
//                 { 
//                   name: "Python Automation — Google Trends Data Pipeline", 
//                   desc: "Built a Python automation pipeline using Selenium to extract data from Google Trends automatically. Processed and stored the data in a structured Excel format with a user-friendly layout for easy analysis." 
//                 },
//                 { 
//                   name: "ML/DL Prediction & Classification Systems", 
//                   desc: "Developed a deep learning image classification system to identify gastric diseases from clinical images with improved accuracy." 
//                 },
//                 { 
//                   name: "Python-based Instagram automation bot", 
//                   desc: "Built a Python-based Instagram automation bot that monitors story viewers and analyzes user bios. Automatically sends personalized text and voice messages, enhancing targeted engagement." 
//                 }
//               ]}
//               modalImages={[upwork, upwork2, freelancer]}
//               profileLinks={[
//                 { name: "Upwork Profile", url: "https://www.upwork.com/freelancers/~010e98a8e17c0f005b?mp_source=share" },
//                 { name: "Freelancer Profile", url: "https://www.freelancer.in/u/Harshrajmishra24?sb=t" }
//               ]}
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Experience;







// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import ExperienceCard from "./ExperienceCard";
// import "./experience-styles.css";
// import capri from "../../Assets/Experience/capri.png";
// import capraecertificate from "../../Assets/Experience/CapraCapital certificate .png";
// import capraelor from "../../Assets/Experience/Lor Caprae Capital .png";
// import mega from "../../Assets/Experience/mega.jpeg";
// import megalor from "../../Assets/Experience/megamindalor.png";
// import megacertificate from "../../Assets/Experience/megaminds certificate .png";
// import upwork from "../../Assets/Experience/Upwork 1.png";
// import upwork2 from "../../Assets/Experience/Upwork profile 2.png";
// import freelancer from "../../Assets/Experience/Freelancer profile.png";
// import freelancerlogo from "../../Assets/Experience/images (5).png";

// // Certificate imports
// import cert1 from "../../Assets/Certificates /cert1.png";
// import cert2 from "../../Assets/Certificates /cert2.png";
// import cert3 from "../../Assets/Certificates /cert3.png";
// import cert4 from "../../Assets/Certificates /cert4.png";

// function Experience() {
//   const [selectedCert, setSelectedCert] = useState(null);

//   const handleCertClick = (src) => {
//     setSelectedCert(src);
//   };

//   const closeCert = () => {
//     setSelectedCert(null);
//   };

//   return (
//     <div className="experience-section">
//       <Particle />
//       <Container fluid className="relative z-10 py-5 px-3">
//         <Row className="justify-content-center">
//           <Col md={10} className="text-center">
//             <h1 className="text-4xl font-bold text-white mb-3">
//               My <span className="purple">Experience</span>
//             </h1>
//             <p className="text-gray-300 mb-5 text-lg">
//               A snapshot of my professional journey across companies and freelancing.
//             </p>
//           </Col>
//         </Row>

//         <Row className="justify-content-center g-3">
//           {/* ────────────── Caprae Capital ────────────── */}
//           <Col xs={12} md={10}>
//             <ExperienceCard
//               role="ML Intern"
//               company="Caprae Capital"
//               logo={capri}
//               duration="August 2025 - December 2025"
//               points={[
//                 "Increased lead conversion by 15% by integrating machine learning into Caprae Capital's proprietary SaaSquatch Leads.",
//                 "Developed an in-house recruiting platform with the team, automating 70% of manual screening tasks.",
//                 "Collaborated with international, cross-functional teams to deliver key product features."
//               ]}
//               images={[capraecertificate, capraelor]}
//               description={`**Machine Learning Intern — Caprae Capital**

// During my internship at Caprae Capital as a **Machine Learning Intern**, I gained hands-on experience working on multiple features that are currently in production. This role allowed me to work far beyond model development and focus on **end-to-end production systems**, including API design, scalability, system handling, and real-world deployment workflows.

// **Production-Focused Development**

// Instead of limiting my work to machine learning models, I was deeply involved in building complete features from scratch—from research and API selection to backend development, load handling, and integration into live applications. This experience helped me understand how **ML-driven features** are managed, monitored, and scaled in a production environment.

// **Key Projects**

// I worked on several key projects, including:
// ** **
// 1. **Company Ownership Details Feature**
// ** **
// I conducted end-to-end research to identify APIs best suited for business requirements, performance, and scalability. I also contributed to designing an intuitive interface that remains easy to use even for first-time users. To ensure reliability under high traffic, I implemented multiprocessing and developed scalable APIs optimized for production usage.
// ** **
// 2. **LinkedIn & Email Message Generation**
// ** **
// I developed a feature that enables users to generate personalized LinkedIn and email messages by selecting a tone and providing minimal inputs. This helped users initiate meaningful conversations with company owners and decision-makers, improving outreach effectiveness through **ML-powered text generation**.
// ** **
// 3. **Company Insights & Review Summarization**
// ** **
// I worked on a company insights module that aggregates data from platforms such as Google Maps and Glassdoor. Using APIs, we fetch ratings and customer reviews and generate concise summaries highlighting company strengths and weaknesses based on user inputs.
// ** **
// 4. **In-House Recruitment Platform**
// ** **
// I contributed to building an internal recruitment system that supports candidate video submissions, automated response processing, transcript generation, and structured evaluation workflows, streamlining the hiring process through intelligent automation.

// **Production Engineering & Best Practices**

// In addition to feature development, I gained strong exposure to production engineering practices. I worked extensively with Git and GitHub, followed clean commit and PR workflows, and learned how features move from sandbox environments to live servers, including data handling, server-side workflows, and deployment pipelines.

// **Overall Impact**

// Overall, this internship was a valuable learning experience that strengthened my understanding of **production-grade ML systems**, scalable APIs, and real-world software engineering practices.`}
//               projects={[
//                 { 
//                   name: "Company Ownership Details Feature", 
//                   desc: "Conducted API research, implemented multiprocessing and scalable APIs for high-traffic reliability, to get the details of the owner of a company." 
//                 },
//                 { 
//                   name: "LinkedIn & Email Message Generation", 
//                   desc: "Built personalized message generation tool with tone selection, improving outreach effectiveness using ML-powered text generation." 
//                 },
//                 { 
//                   name: "Company Insights & Review Summarization", 
//                   desc: "Developed aggregation module using Google Maps and Glassdoor APIs to generate concise summaries of company strengths and weaknesses." 
//                 },
//                 { 
//                   name: "In-House Recruitment Platform", 
//                   desc: "Contributed to internal system with video submissions, automated processing, transcript generation, and structured evaluation workflows." 
//                 }
//               ]}
//               modalImages={[capraecertificate, capraelor]}
//               companyWebsite={[
//                 { name: "CapraeCapital web", url: "https://www.capraecapital.com/" },
//                 { name: "SaaSquatchLeads web", url: "https://www.saasquatchleads.com/" }
//               ]}
//             />
//           </Col>
//           {/* ────────────── Mega Mind Society Services ────────────── */}
//           <Col xs={12} md={10}>
//             <ExperienceCard
//               role="Technical Team Lead Intern"
//               company="Megaminds IT Services"
//               logo={mega}
//               duration="December 2023 - July 2025"
//               points={[
//                 "Led team on data-driven projects, developing ML/DL models with up to 98% accuracy and improving delivery efficiency by 30%.",
//                 "Collaborated on research initiatives, enhancing methods and solving problems through experimentation.",
//                 "Built NLP-based call transcription prototype for customer insight extraction and pattern analysis"
//               ]}
//               images={[megacertificate, megalor]}
//               description={`**Technical Team Lead Intern — Megaminds IT Services**

// I completed a long and progressive internship journey at Megaminds IT Services of 1.8 years, where I grew from a Developer Intern to a Client Consultant & Data Scientist Intern, and finally to a Technical Team Lead Intern. This experience played a crucial role in shaping my research mindset, technical depth, and leadership skills.

//  ** **
// I joined Megaminds IT Services in December 2023 as a Developer Intern, where I worked on multiple machine learning and data science projects across diverse domains. My responsibilities included building ML models, contributing to end-to-end project development, participating in client meetings, and gaining a strong understanding of the research and problem-solving process behind real-world use cases.

// ** **
// As I progressed into the role of Client Consultant & Data Scientist Intern, my work expanded into deep learning, computer vision, and NLP-based projects. The projects at Megaminds were heavily research-driven, requiring in-depth analysis of existing technologies, identification of gaps, and the development of novel methodologies. I worked on experimenting with multiple model architectures, fine-tuning strategies, and evaluation techniques, comparing results to continuously improve model performance and research outcomes.

// **Leadership Phase**

// In the final phase of my internship, I took on the role of Technical Team Lead Intern, where I led a team of 15+ members. I guided the team through the complete research lifecycle — from problem formulation and literature review to model development, fine-tuning, and result analysis. Alongside technical leadership, I actively handled client discussions, requirement understanding, and solution planning, ensuring alignment between research objectives and business needs.

// **Key Contribution: NLP Call Transcription Prototype**

// Additionally, I contributed to the development of an NLP-based prototype for a client, focused on transcribing customer calls into human-readable text and extracting key insights from conversations. This prototype helped identify important discussion points and patterns from customer interactions and was part of a broader set of research-oriented projects.

// **Summary**

// Throughout this internship, I gained deep practical knowledge of deep learning architectures, computer vision techniques, and NLP systems. I worked extensively with image, text, and tabular datasets, strengthening my ability to design, analyze, and improve models across different data modalities.
// ** **
// Overall, my internship at Megaminds IT Services was a highly enriching experience that strengthened my expertise in research-based AI development, technical leadership, and real-world problem solving, making it a significant milestone in my professional journey.`}

//               projects={[
//                 { name: "Research-Driven ML Projects", desc: "Led experimentation with multiple model architectures, fine-tuning strategies, and evaluation techniques across deep learning, computer vision, and NLP domains." },
//                 { name: "NLP Call Transcription System", desc: "Developed prototype for transcribing customer calls and extracting key insights, identifying patterns from customer interactions." },
//                 { name: "Technical Team Leadership", desc: "Guided 15+ team members through complete research lifecycle including problem formulation, literature review, model development, and result analysis." }
//               ]}
//               modalImages={[megacertificate, megalor]}
//               companyWebsite="https://megamindsit.in/"
//             />
//           </Col>

//           {/* ────────────── Freelance ────────────── */}
//           <Col xs={12} md={10}>
//             <ExperienceCard
//               role="Freelancer Python, AI/ML Developer"
//               company="Upwork/Freelancer"
//               logo={freelancerlogo}
//               duration="2023 - Present"
//               points={[
//                 "Delivered projects on domain involving Python, AI/ML, automation, data scraping, and data science.",
//                 "Maintained high client satisfaction and repeat contracts",
//                 "Completed 7+ freelancing projects on platforms like Freelancer and Upwork."
//               ]}
//               images={[upwork, freelancer]}
//               description={`**Freelancer — Python, ML/DL Developer**

// Alongside my internships, I worked as a freelance developer on platforms such as Upwork and Freelancer, delivering multiple client projects across Python automation, machine learning, deep learning, data scraping, and data analysis. This experience exposed me to a wide range of real-world problem statements and client requirements, helping me develop strong technical adaptability along with effective communication skills.

// **Project Focus & Approach**

// Most of my freelance work involved building small to mid-sized, focused, and practical solutions rather than large-scale applications. These projects were designed to directly solve specific business or operational problems, improving efficiency and usability for clients in real-world scenarios. My work included automation scripts, ML-based prediction systems, data processing pipelines, and lightweight deep learning solutions tailored to individual client needs.

// **Client Communication & Non-Technical Collaboration**

// A key learning from freelancing was understanding how to work closely with clients from non-technical backgrounds. I regularly explained technical concepts, system behavior, and project progress in a simple and structured manner, ensuring transparency and clarity throughout the development process. This approach helped build trust and ensured that deliverables aligned precisely with client expectations.

// **Adaptability & Workflow Lessons**

// Through this experience, I learned the importance of diversifying across technologies and problem domains. Rather than focusing on a single tech stack, I adapted my approach based on the problem at hand, selecting tools and methodologies best suited to the client’s requirements. Meeting deadlines, iterating based on feedback, and delivering functional and reliable solutions became central to my workflow.

// **Overall Impact**

// Overall, freelancing strengthened my ability to translate client requirements into effective technical solutions, enhanced my communication and stakeholder management skills, and reinforced the importance of building technology that is practical, usable, and impactful.`}
//               projects={[
//                 { 
//                   name: "Python Automation — Google Trends Data Pipeline", 
//                   desc: "Built a Python automation pipeline using Selenium to extract data from Google Trends automatically. Processed and stored the data in a structured Excel format with a user-friendly layout for easy analysis." 
//                 },
//                 { 
//                   name: "ML/DL Prediction & Classification Systems", 
//                   desc: "Developed a deep learning image classification system to identify gastric diseases from clinical images with improved accuracy." 
//                 },
//                 { 
//                   name: "Python-based Instagram automation bot", 
//                   desc: "Built a Python-based Instagram automation bot that monitors story viewers and analyzes user bios. Automatically sends personalized text and voice messages, enhancing targeted engagement." 
//                 }
//               ]}
//               modalImages={[upwork, upwork2, freelancer]}
//               profileLinks={[
//                 { name: "Upwork Profile", url: "https://www.upwork.com/freelancers/~010e98a8e17c0f005b?mp_source=share" },
//                 { name: "Freelancer Profile", url: "https://www.freelancer.in/u/Harshrajmishra24?sb=t" }
//               ]}
//             />
//           </Col>

//           {/* ────────────── Certificates Section ────────────── */}
//           <Col xs={12} className="mt-5">
//             <h2 className="text-center mb-5 certificate-heading" style={{ fontSize: '3rem !important', fontWeight: '600 !important' }}>
//               My <span className="purple">Certificates</span>
//             </h2>

//             <Row className="g-4 justify-content-center">
//               {/* Certificate 1 */}
//               <Col xs={12} sm={6} md={4} lg={4}>
//                 <div className="certificate-card text-center">
//                   <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert1)}>
//                     <img 
//                       src={cert1} 
//                       alt="Salesforce AI Agent Developer - SmartBridge" 
//                       className="certificate-img"
//                     />
//                   </div>
//                   <p className="certificate-name mt-3">Salesforce AI Agent Developer - SmartBridge</p>
//                 </div>
//               </Col>

//               {/* Certificate 2 */}
//               <Col xs={12} sm={6} md={4} lg={4}>
//                 <div className="certificate-card text-center">
//                   <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert2)}>
//                     <img 
//                       src={cert2} 
//                       alt="Certificate 2" 
//                       className="certificate-img"
//                     />
//                   </div>
//                   <p className="certificate-name mt-3">NPTEL - Google Cloud Computing (IIT KGP)</p>
//                 </div>
//               </Col>

//               {/* Certificate 3 */}
//               <Col xs={12} sm={6} md={4} lg={4}>
//                 <div className="certificate-card text-center">
//                   <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert3)}>
//                     <img 
//                       src={cert3} 
//                       alt="Certificate 3" 
//                       className="certificate-img"
//                     />
//                   </div>
//                   <p className="certificate-name mt-3">Cerebro Ideathon Rank 4th IIIT Vadodara</p>
//                 </div>
//               </Col>

//               {/* Certificate 4 */}
//               <Col xs={12} sm={6} md={4} lg={4}>
//                 <div className="certificate-card text-center">
//                   <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert3)}>
//                     <img 
//                       src={cert4} 
//                       alt="Certificate 4" 
//                       className="certificate-img"
//                     />
//                   </div>
//                   <p className="certificate-name mt-4">Cerebro Ideathon Rank 4th IIIT Vadodara</p>
//                 </div>
//               </Col>


//             </Row>
//           </Col>
//         </Row>

//         {/* Certificate Lightbox */}
//         {selectedCert && (
//           <div 
//             className="cert-lightbox" 
//             onClick={closeCert}
//           >
//             <div className="cert-lightbox-wrapper">
//               {/* Close Button - completely outside and above */}
//               <button className="cert-close-btn" onClick={closeCert}>
//                 ×
//               </button>

//               <div className="cert-lightbox-content">
//                 <img 
//                   src={selectedCert} 
//                   alt="Certificate Full View" 
//                   className="cert-full-img"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default Experience;









import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import "./experience-styles.css";
import capri from "../../Assets/Experience/capri.png";
import capraecertificate from "../../Assets/Experience/CapraCapital certificate .png";
import capraelor from "../../Assets/Experience/Lor Caprae Capital .png";
import mega from "../../Assets/Experience/mega.jpeg";
import megalor from "../../Assets/Experience/megamindalor.png";
import megacertificate from "../../Assets/Experience/megaminds certificate .png";
import upwork from "../../Assets/Experience/Upwork 1.png";
import upwork2 from "../../Assets/Experience/Upwork profile 2.png";
import freelancer from "../../Assets/Experience/Freelancer profile.png";
import freelancerlogo from "../../Assets/Experience/images (5).png";

// Certificate imports
import cert1 from "../../Assets/Certificates /cert1.png";
import cert2 from "../../Assets/Certificates /cert2.png";
import cert3 from "../../Assets/Certificates /cert3.png";
import cert4 from "../../Assets/Certificates /cert4.png";
import cert5 from "../../Assets/Certificates /cert5.png";
import cert6 from "../../Assets/Certificates /cert 6.png";
import cert7 from "../../Assets/Certificates /cert 7.png";
import cert8 from "../../Assets/Certificates /cert 8.png";
import ide from "../../Assets/Certificates /ide bootcam.jpeg";
import reg1 from "../../Assets/Certificates /regional 1.jpeg";
import reg2 from "../../Assets/Certificates /regional 2.jpeg";
import nod1 from "../../Assets/Certificates /nodal1.jpeg";
import nod2 from "../../Assets/Certificates /nodal2.jpeg";
import sym from "../../Assets/Certificates /symposia.jpeg";
import junD from "../../Assets/Certificates /juniordep.jpeg";
import senD from "../../Assets/Certificates /seniordep.jpeg";
import ncc from "../../Assets/Certificates /nccA.jpeg";
import data from "../../Assets/Certificates /datathon.jpeg";
import tsec from "../../Assets/Certificates /tsec.png";
import workshop from "../../Assets/Certificates /workshop.png";

function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (src) => {
    setSelectedCert(src);
  };

  const closeCert = () => {
    setSelectedCert(null);
  };

  return (
    <div className="experience-section">
      <Particle />
      <Container fluid className="relative z-10 py-5 px-3">
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h1 className="text-4xl font-bold text-white mb-3">
              My <span className="purple">Experience</span>
            </h1>
            <p className="text-gray-300 mb-5 text-lg">
              A snapshot of my professional journey across companies and freelancing.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center g-3">
          {/* ────────────── Caprae Capital ────────────── */}
          <Col xs={12} md={10}>
            <ExperienceCard
              role="ML Intern"
              company="Caprae Capital"
              logo={capri}
              duration="August 2025 - December 2025"
              points={[
                "Increased lead conversion by 15% by integrating machine learning into Caprae Capital's proprietary SaaSquatch Leads.",
                "Developed an in-house recruiting platform with the team, automating 70% of manual screening tasks.",
                "Collaborated with international, cross-functional teams to deliver key product features."
              ]}
              images={[capraecertificate, capraelor]}
              description={`**Machine Learning Intern — Caprae Capital**

During my internship at Caprae Capital as a **Machine Learning Intern**, I gained hands-on experience working on multiple features that are currently in production. This role allowed me to work far beyond model development and focus on **end-to-end production systems**, including API design, scalability, system handling, and real-world deployment workflows.

**Production-Focused Development**

Instead of limiting my work to machine learning models, I was deeply involved in building complete features from scratch—from research and API selection to backend development, load handling, and integration into live applications. This experience helped me understand how **ML-driven features** are managed, monitored, and scaled in a production environment.

**Key Projects**

I worked on several key projects, including:
** **
1. **Company Ownership Details Feature**
** **
I conducted end-to-end research to identify APIs best suited for business requirements, performance, and scalability. I also contributed to designing an intuitive interface that remains easy to use even for first-time users. To ensure reliability under high traffic, I implemented multiprocessing and developed scalable APIs optimized for production usage.
** **
2. **LinkedIn & Email Message Generation**
** **
I developed a feature that enables users to generate personalized LinkedIn and email messages by selecting a tone and providing minimal inputs. This helped users initiate meaningful conversations with company owners and decision-makers, improving outreach effectiveness through **ML-powered text generation**.
** **
3. **Company Insights & Review Summarization**
** **
I worked on a company insights module that aggregates data from platforms such as Google Maps and Glassdoor. Using APIs, we fetch ratings and customer reviews and generate concise summaries highlighting company strengths and weaknesses based on user inputs.
** **
4. **In-House Recruitment Platform**
** **
I contributed to building an internal recruitment system that supports candidate video submissions, automated response processing, transcript generation, and structured evaluation workflows, streamlining the hiring process through intelligent automation.

**Production Engineering & Best Practices**

In addition to feature development, I gained strong exposure to production engineering practices. I worked extensively with Git and GitHub, followed clean commit and PR workflows, and learned how features move from sandbox environments to live servers, including data handling, server-side workflows, and deployment pipelines.

**Overall Impact**

Overall, this internship was a valuable learning experience that strengthened my understanding of **production-grade ML systems**, scalable APIs, and real-world software engineering practices.`}
              projects={[
                { 
                  name: "Company Ownership Details Feature", 
                  desc: "Conducted API research, implemented multiprocessing and scalable APIs for high-traffic reliability, to get the details of the owner of a company." 
                },
                { 
                  name: "LinkedIn & Email Message Generation", 
                  desc: "Built personalized message generation tool with tone selection, improving outreach effectiveness using ML-powered text generation." 
                },
                { 
                  name: "Company Insights & Review Summarization", 
                  desc: "Developed aggregation module using Google Maps and Glassdoor APIs to generate concise summaries of company strengths and weaknesses." 
                },
                { 
                  name: "In-House Recruitment Platform", 
                  desc: "Contributed to internal system with video submissions, automated processing, transcript generation, and structured evaluation workflows." 
                }
              ]}
              modalImages={[capraecertificate, capraelor]}
              companyWebsite={[
                { name: "CapraeCapital web", url: "https://www.capraecapital.com/" },
                { name: "SaaSquatchLeads web", url: "https://www.saasquatchleads.com/" }
              ]}
            />
          </Col>
          {/* ────────────── Mega Mind Society Services ────────────── */}
          <Col xs={12} md={10}>
            <ExperienceCard
              role="Technical Team Lead Intern"
              company="Megaminds IT Services"
              logo={mega}
              duration="December 2023 - July 2025"
              points={[
                "Led team on data-driven projects, developing ML/DL models with up to 98% accuracy and improving delivery efficiency by 30%.",
                "Collaborated on research initiatives, enhancing methods and solving problems through experimentation.",
                "Built NLP-based call transcription prototype for customer insight extraction and pattern analysis"
              ]}
              images={[megacertificate, megalor]}
              description={`**Technical Team Lead Intern — Megaminds IT Services**

I completed a long and progressive internship journey at Megaminds IT Services of 1.8 years, where I grew from a Developer Intern to a Client Consultant & Data Scientist Intern, and finally to a Technical Team Lead Intern. This experience played a crucial role in shaping my research mindset, technical depth, and leadership skills.

 ** **
I joined Megaminds IT Services in December 2023 as a Developer Intern, where I worked on multiple machine learning and data science projects across diverse domains. My responsibilities included building ML models, contributing to end-to-end project development, participating in client meetings, and gaining a strong understanding of the research and problem-solving process behind real-world use cases.

** **
As I progressed into the role of Client Consultant & Data Scientist Intern, my work expanded into deep learning, computer vision, and NLP-based projects. The projects at Megaminds were heavily research-driven, requiring in-depth analysis of existing technologies, identification of gaps, and the development of novel methodologies. I worked on experimenting with multiple model architectures, fine-tuning strategies, and evaluation techniques, comparing results to continuously improve model performance and research outcomes.

**Leadership Phase**

In the final phase of my internship, I took on the role of Technical Team Lead Intern, where I led a team of 15+ members. I guided the team through the complete research lifecycle — from problem formulation and literature review to model development, fine-tuning, and result analysis. Alongside technical leadership, I actively handled client discussions, requirement understanding, and solution planning, ensuring alignment between research objectives and business needs.

**Key Contribution: NLP Call Transcription Prototype**

Additionally, I contributed to the development of an NLP-based prototype for a client, focused on transcribing customer calls into human-readable text and extracting key insights from conversations. This prototype helped identify important discussion points and patterns from customer interactions and was part of a broader set of research-oriented projects.

**Summary**

Throughout this internship, I gained deep practical knowledge of deep learning architectures, computer vision techniques, and NLP systems. I worked extensively with image, text, and tabular datasets, strengthening my ability to design, analyze, and improve models across different data modalities.
** **
Overall, my internship at Megaminds IT Services was a highly enriching experience that strengthened my expertise in research-based AI development, technical leadership, and real-world problem solving, making it a significant milestone in my professional journey.`}

              projects={[
                { name: "Research-Driven ML Projects", desc: "Led experimentation with multiple model architectures, fine-tuning strategies, and evaluation techniques across deep learning, computer vision, and NLP domains." },
                { name: "NLP Call Transcription System", desc: "Developed prototype for transcribing customer calls and extracting key insights, identifying patterns from customer interactions." },
                { name: "Technical Team Leadership", desc: "Guided 15+ team members through complete research lifecycle including problem formulation, literature review, model development, and result analysis." }
              ]}
              modalImages={[megacertificate, megalor]}
              companyWebsite="https://megamindsit.in/"
            />
          </Col>

          {/* ────────────── Freelance ────────────── */}
          <Col xs={12} md={10}>
            <ExperienceCard
              role="Freelancer Python, AI/ML Developer"
              company="Upwork/Freelancer"
              logo={freelancerlogo}
              duration="2023 - Present"
              points={[
                "Delivered projects on domain involving Python, AI/ML, automation, data scraping, and data science.",
                "Maintained high client satisfaction and repeat contracts",
                "Completed 7+ freelancing projects on platforms like Freelancer and Upwork."
              ]}
              images={[upwork, freelancer]}
              description={`**Freelancer — Python, ML/DL Developer**

Alongside my internships, I worked as a freelance developer on platforms such as Upwork and Freelancer, delivering multiple client projects across Python automation, machine learning, deep learning, data scraping, and data analysis. This experience exposed me to a wide range of real-world problem statements and client requirements, helping me develop strong technical adaptability along with effective communication skills.

**Project Focus & Approach**

Most of my freelance work involved building small to mid-sized, focused, and practical solutions rather than large-scale applications. These projects were designed to directly solve specific business or operational problems, improving efficiency and usability for clients in real-world scenarios. My work included automation scripts, ML-based prediction systems, data processing pipelines, and lightweight deep learning solutions tailored to individual client needs.

**Client Communication & Non-Technical Collaboration**

A key learning from freelancing was understanding how to work closely with clients from non-technical backgrounds. I regularly explained technical concepts, system behavior, and project progress in a simple and structured manner, ensuring transparency and clarity throughout the development process. This approach helped build trust and ensured that deliverables aligned precisely with client expectations.

**Adaptability & Workflow Lessons**

Through this experience, I learned the importance of diversifying across technologies and problem domains. Rather than focusing on a single tech stack, I adapted my approach based on the problem at hand, selecting tools and methodologies best suited to the client's requirements. Meeting deadlines, iterating based on feedback, and delivering functional and reliable solutions became central to my workflow.

**Overall Impact**

Overall, freelancing strengthened my ability to translate client requirements into effective technical solutions, enhanced my communication and stakeholder management skills, and reinforced the importance of building technology that is practical, usable, and impactful.`}
              projects={[
                { 
                  name: "Python Automation — Google Trends Data Pipeline", 
                  desc: "Built a Python automation pipeline using Selenium to extract data from Google Trends automatically. Processed and stored the data in a structured Excel format with a user-friendly layout for easy analysis." 
                },
                { 
                  name: "ML/DL Prediction & Classification Systems", 
                  desc: "Developed a deep learning image classification system to identify gastric diseases from clinical images with improved accuracy." 
                },
                { 
                  name: "Python-based Instagram automation bot", 
                  desc: "Built a Python-based Instagram automation bot that monitors story viewers and analyzes user bios. Automatically sends personalized text and voice messages, enhancing targeted engagement." 
                }
              ]}
              modalImages={[upwork, upwork2, freelancer]}
              profileLinks={[
                { name: "Upwork Profile", url: "https://www.upwork.com/freelancers/~010e98a8e17c0f005b?mp_source=share" },
                { name: "Freelancer Profile", url: "https://www.freelancer.in/u/Harshrajmishra24?sb=t" }
              ]}
            />
          </Col>

          {/* ────────────── Certificates Section ────────────── */}
          <Col xs={12} className="mt-5">
            {/* Main Heading */}
            <h2 className="text-center mb-5 certificate-heading" style={{ fontSize: '3rem', fontWeight: '600' }}>
              My <span className="purple">Certificates</span>
            </h2>


            {/* ═══════════ Technical Certificates Section ═══════════ */}
            <h3 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#c770f0' }}>
              Technical Certificates
            </h3>

            <Row className="g-4 justify-content-center">
              {/* Certificate 1 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert1)}>
                    <img 
                      src={cert1} 
                      alt="Salesforce AI Agent Developer - SmartBridge" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Salesforce AI Agent Developer - SmartBridge</p>
                </div>
              </Col>

              {/* Certificate 2 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert2)}>
                    <img 
                      src={cert2} 
                      alt="Certificate 2" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">NPTEL - Google Cloud Computing (IIT KGP)</p>
                </div>
              </Col>
              {/* Certificate 3 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert5)}>
                    <img 
                      src={cert5} 
                      alt="Certificate 5" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Crash Course Python - Google</p>
                </div>
              </Col>
              {/* Certificate 2 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert7)}>
                    <img 
                      src={cert7} 
                      alt="Certificate 7" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Cisco Python Essentials 1</p>
                </div>
              </Col>
              
              {/* Certificate 4 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert6)}>
                    <img 
                      src={cert6} 
                      alt="Certificate 6" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Cisco Python Essentials 2</p>
                </div>
              </Col>



            </Row>


            {/* ═══════════ Achievement Certificates Section ═══════════ */}
            <h3 className="text-center mb-4 mt-5" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#c770f0' }}>
              Achievement Certificates
            </h3>

            <Row className="g-4 justify-content-center mb-5">
              {/* Certificate 1 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert8)}>
                    <img 
                      src={cert8} 
                      alt="Certificate 3" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Smart India Hackathon finalists top 5/500</p>
                </div>
              </Col>
              {/* Certificate 4 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(ide)}>
                    <img 
                      src={ide} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">IDE Bootcamp National Level Winners</p>
                </div>
              </Col>

              {/* Certificate 9 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(data)}>
                    <img 
                      src={data} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">National level Datathon winners' 3rd position</p>
                </div>
              </Col>

              {/* Certificate 2 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert4)}>
                    <img 
                      src={cert4} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Entrepreneurship Bootcamp IIT Bombay</p>
                </div>
              </Col>
              {/* Certificate 3 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(cert3)}>
                    <img 
                      src={cert3} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Cerebro Ideathon Rank 4th IIIT Vadodara</p>
                </div>
              </Col>

              {/* Certificate 9 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(tsec)}>
                    <img 
                      src={tsec} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">TSEC Hacks 2025 Mumbai</p>
                </div>
              </Col>
              {/* Certificate 7 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(nod1)}>
                    <img 
                      src={nod1} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3"> Nodal/District Level - Winners 1st Position 2023</p>
                </div>
              </Col>
              {/* Certificate 8 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(nod2)}>
                    <img 
                      src={nod2} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Nodal/District Level - Winners 1st Position 2024</p>
                </div>
              </Col>
              
              {/* Certificate 5 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(reg1)}>
                    <img 
                      src={reg1} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Regional level chess, 2017</p>
                </div>
              </Col>
              {/* Certificate 6 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(reg2)}>
                    <img 
                      src={reg2} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Regional level chess, 2018</p>
                </div>
              </Col>
              
              {/* Certificate 9 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(sym)}>
                    <img 
                      src={sym} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">International Symposia on DS and ML Research Paper</p>
                </div>
              </Col>
              
              {/* Certificate 9 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(workshop)}>
                    <img 
                      src={workshop} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">National Workshop on Research Paper</p>
                </div>
              </Col>
              {/* Certificate 9 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(junD)}>
                    <img 
                      src={junD} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Junior Diploma in Tabla</p>
                </div>
              </Col>
              {/* Certificate 9 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(senD)}>
                    <img 
                      src={senD} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">Senior Diploma in Tabla</p>
                </div>
              </Col>
              {/* Certificate 9 */}
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className="certificate-card text-center">
                  <div className="certificate-image-wrapper" onClick={() => handleCertClick(ncc)}>
                    <img 
                      src={ncc} 
                      alt="Certificate 4" 
                      className="certificate-img"
                    />
                  </div>
                  <p className="certificate-name mt-3">National Cadet Corps A Certificate</p>
                </div>
              </Col>

            </Row>

            
          </Col>
        </Row>

        {/* Certificate Lightbox */}
        {selectedCert && (
          <div 
            className="cert-lightbox" 
            onClick={closeCert}
          >
            <div className="cert-lightbox-wrapper">
              {/* Close Button - completely outside and above */}
              <button className="cert-close-btn" onClick={closeCert}>
                ×
              </button>

              <div className="cert-lightbox-content">
                <img 
                  src={selectedCert} 
                  alt="Certificate Full View" 
                  className="cert-full-img"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Experience;