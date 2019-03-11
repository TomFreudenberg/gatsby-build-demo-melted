import React from "react"

import styles from "../../styles/pdf.scss"

export default () =>
  <div id="pdf">
    <div id="page1" className={`${styles.page} ${styles.landscape}`}>
      <h1>Hello world!</h1>
      <p>Simple demo page to convert with Puppeteer!</p>
      <div id={styles.logo}>
        <img src="/img/logo.svg" alt="logo" />
      </div>
    </div>
  </div>
