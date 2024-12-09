'use client';

import React from 'react';
import styles from './project1.module.css';

const ProjectOne = () => {
    return (
        <section className={styles.container}>
            <div className={styles.projectWrapper}>
                <h1 className={styles.title}>Project Title</h1>
                
                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2>About the Project</h2>
                        <p>
                            Description of your project goes here. Explain what the project does,
                            the technologies used, and your role in development.
                        </p>
                    </div>

                    <div className={styles.technologies}>
                        <h3>Technologies Used</h3>
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            GitHub Repository
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOne;