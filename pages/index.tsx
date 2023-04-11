import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>AI & ML Newsletter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>

      <main>
        <h1>Hacker News AI Digest</h1>
        <p>Subscribe to our newsletter to receive a digest of the top AI and machine learning articles from Hacker News.</p>
        <form action="your_subscription_endpoint" method="POST">
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="submit" value="🚀 Subscribe" />
        </form>
        <div className="social-links">
          <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/vlameiras" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="footer">
          <p>
            Built by{' '}
            <a href="https://github.com/vlameiras" target="_blank" rel="noopener noreferrer" className="footer-link">
              @vlameiras
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
