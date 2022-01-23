import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: #d7d7d7;

  .footer-social {
    text-align: center;
    margin: 10px 0;
  }

  .footer-social ul {
    padding: 0;
    display: inline-block;
    list-style-type: none;
  }

  .footer-social ul:after {
    display: table;
    clear: both;
    content: '';
  }

  .footer-social li {
    float: left;
    margin: 0 15px 0 0;
    padding: 0;
  }
`

const Footer = (props) => {
  return (
    <Container>
      <footer aria-label="Copy rights">
        © Copyright 2014, All Rights Reserved
      </footer>
      <div className="footer-social">
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Follow Us</p>
        <ul style={{ margin: 0 }}>
          <li>
            <a
              href="https://www.facebook.com"
              title="Facebook"
              onclick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);"
            >
              <img
                width="24"
                height="24"
                alt="Like us on Facebook"
                src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"
              />
            </a>
          </li>
          <li>
            <a
              href="https://google.com"
              title="Google+"
              onclick="_gaq.push(['_trackSocial', 'GooglePlus', 'Follow', 'Footer', 'undefined', 'True']);"
            >
              <img
                width="24"
                height="24"
                alt="Follow us on Google+"
                src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"
              />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer
