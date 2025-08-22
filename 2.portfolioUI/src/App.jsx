
import './App.css'

function App() {
  

  return (
    <>
      
    <header>
        <nav class="container">
            <a href="#" class="logo">Jane Doe</a>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
       
        <section id="hero">
            <div class="hero-content">
                <h1 class="hero-title">Software Developer & Innovator</h1>
                <p class="hero-subtitle">Building elegant and scalable solutions for the web.</p>
                <a href="#projects" class="hero-button">View My Work</a>
            </div>
        </section>

       
        <section id="about" class="container">
            <div class="about-content">
                <div class="about-image">
                   
                    <img src="data:image/jpeg;base64,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" alt="Jane Doe Profile Photo" class="profile-photo"/>
                </div>
                <div class="about-text">
                    <h2 class="section-title">About Me</h2>
                    <p>
                        Hello! I'm Jane Doe, a passionate full-stack developer with a strong focus on clean code and user-centric design. I specialize in building robust and high-performance applications using modern technologies.
                    </p>
                    <p>
                        With a background in computer science, I'm constantly learning and exploring new tools to solve complex problems and create meaningful digital experiences. Let's build something amazing together!
                    </p>
                </div>
            </div>
        </section>

      
        <section id="projects" class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="project-grid">

              
                <div class="project-card">
                    <img src="https://placehold.co/600x400/1f2937/d1d5db?text=Project+1" alt="Project 1 Thumbnail" class="project-image"/>
                    <div class="project-info">
                        <h3>E-commerce Platform</h3>
                        <p>A full-featured e-commerce site with user authentication, product catalog, and a secure payment gateway.</p>
                        <div class="project-links">
                            <a href="#" class="project-link-button"><i class="fas fa-eye"></i> Live Site</a>
                            <a href="#" class="project-link-button"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

                
                <div class="project-card">
                    <img src="https://placehold.co/600x400/1f2937/d1d5db?text=Project+2" alt="Project 2 Thumbnail" class="project-image"/>
                    <div class="project-info">
                        <h3>Social Media Dashboard</h3>
                        <p>A modern social media analytics dashboard that provides real-time insights and visualizations.</p>
                        <div class="project-links">
                            <a href="#" class="project-link-button"><i class="fas fa-eye"></i> Live Site</a>
                            <a href="#" class="project-link-button"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

            
                <div class="project-card">
                    <img src="https://placehold.co/600x400/1f2937/d1d5db?text=Project+3" alt="Project 3 Thumbnail" class="project-image"/>
                    <div class="project-info">
                        <h3>Task Management App</h3>
                        <p>A sleek and intuitive task management application built for productivity and collaboration.</p>
                        <div class="project-links">
                            <a href="#" class="project-link-button"><i class="fas fa-eye"></i> Live Site</a>
                            <a href="#" class="project-link-button"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        
        <section id="skills" class="container">
            <h2 class="section-title">My Skills</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <i class="fab fa-js-square skill-icon"></i>
                    <span>JavaScript</span>
                </div>
                <div class="skill-item">
                    <i class="fab fa-react skill-icon"></i>
                    <span>React</span>
                </div>
                <div class="skill-item">
                    <i class="fab fa-node-js skill-icon"></i>
                    <span>Node.js</span>
                </div>
                <div class="skill-item">
                    <i class="fab fa-python skill-icon"></i>
                    <span>Python</span>
                </div>
                <div class="skill-item">
                    <i class="fab fa-aws skill-icon"></i>
                    <span>AWS</span>
                </div>
                <div class="skill-item">
                    <i class="fas fa-database skill-icon"></i>
                    <span>Databases</span>
                </div>
            </div>
        </section>


        <section id="contact" class="container">
            <h2 class="section-title">Get In Touch</h2>
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div class="contact-links">
                <a href="mailto:jane.doe@example.com" class="contact-link"><i class="fas fa-envelope"></i> Email</a>
                <a href="#" class="contact-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
                <a href="#" class="contact-link"><i class="fab fa-github"></i> GitHub</a>
            </div>
        </section>
    </main>


    <footer>
        <p>&copy; 2024 Jane Doe. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default App
