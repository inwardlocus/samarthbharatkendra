import React from "react"
import { graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default () => (
  <div
    style={{
      textAlign: `center`,
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(32),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <div class="header">
      <header>
        <img
          src={"logo.jpg"}
          alt="समर्थ भारत"
          style={{ width: 150, height: 150 }}
        />{" "}
        <h1>समर्थ भारत गर्भ विज्ञान एवं गर्भ संस्करण केंद्र - गांधीधाम</h1>
        <h3></h3>
      </header>
      <p style={{ fontSize: 15, color: "red" }}>
        <strong>
          भारतीय नारी अपने बालक के बारे में कैसी कल्पना करती है? भारतीय पुरुष भी
          कैसी कल्पना करते है? और आप भी?
          <br /> मेरा बालक स्वरूपवान, गुणवान, शिलवान, बलवान, धैर्यवान, शूरवीर,
          स्वस्थ, प्रसन्न एवं तेजस्वी हो।
        </strong>
      </p>
      <h3 style={{ padding: 12, border: "solid red" }}>
        क्या ऐसा इच्छित और उत्तम संतान रत्न प्राप्त करना संभव है?
      </h3>
    </div>
    <div class="raw">
      <div class="column">
        <img src={"SMC.jpg"} alt="समर्थ भारत" />
      </div>
      <div class="column">
        <h3>क्या एक नन्हा शिशु, महा मानव, दिव्य पुरुष बन सकता है?</h3>
        <p>
          <strong>नवदंपति प्रशिक्षण- श्रेष्ठ संतान प्राप्ति</strong> <br /> आईए,
          हम सब आनेवाली पीढ़ी के द्वारा श्रेष्ठ संतति से 'समर्थ भारत' का निर्माण
          करें । हम जैसे चाहे वैसे बालक का निर्माण कर सकते है। क्या आप अपने
          बच्चे के विकास के लिए योग्य मार्गदर्शन लेना चाहते है? <br />
          <br />{" "}
          <p
            style={{
              background: "Yellow",
              padding: 10,
              fontSize: 20,
            }}
          >
            <strong>
              समर्थ भारत गर्भ विज्ञान एवं गर्भ संस्करण केंद्र
              <br /> वार्ड - 7 सी, गांधीधाम
              <br />
              संपर्क : 094260 44191
            </strong>
          </p>
        </p>
      </div>
    </div>
  </div>
)
