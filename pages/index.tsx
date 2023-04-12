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
          <a href="https://your_substack_url" target="_blank" rel="noopener noreferrer">
  <img src="https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fba81cfff-7bc5-4aef-866e-864d0942c42d_1000x1000.png" alt="Substack" style={{width: '24px', height: '24px', marginLeft: '10px', marginRight: '10px'}} />
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
