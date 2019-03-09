import React from "react"
import { Link } from "gatsby"
import PdfSample from "./pdf_documents/pdf_sample.pdf" // Tell Webpack this JS file uses this PDF

export default () =>

  <div id="helloWorld">
    <h1>Hello world!</h1>
    <p>
      Example to generate and build and include Pdf documents. <br/>
      <Link to={PdfSample}>Read PdfSample</Link>
    </p>
  </div>
