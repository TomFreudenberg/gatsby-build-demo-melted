import React from "react"

import pdf_sample from "../pdf_documents/pdf_sample.pdf"

export default () =>

  <div id="helloWorld">
    <h1>Hello world!</h1>
    <p>
      Example to generate and build and include Pdf documents. <br/>
      <a href={pdf_sample}>View sample PDF</a>
    </p>
  </div>
