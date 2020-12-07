import React from 'react'
import '../css/footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <a
              className="App-link"
              href="https://github.com/mrbrianevans/number-format-converter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="link to github repository" src="github-logo.png" />
            </a>
          </div>

          <div className="col-md-6 developed-by">
            Maintained by{' '}
            <a href="http://brianevans.tech/">Brian Evans</a> and{' '}
            <a href="https://macbase.co.za/">Daniel Mamphekgo</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
