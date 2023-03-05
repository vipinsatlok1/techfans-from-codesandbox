import { useEffect } from "react";
import styles from "../../styles/componants/layout.module.css";
import { LayoutFeedback } from "./LayoutFeedback";

export const LayoutBlog = ({ html }: { html: string }) => {

  const htmlText = `
    <h1 id="how-to-use-github">How To Use Github</h1>
    <p>आज हम संत तुकाराम महाराजजी की कथा सुनेंगे । संत तुकाराम महाराज जी की भगवान पांडुरंग के प्रति अनन्‍यसाधारण भक्‍ति थी । उनका जन्‍म महाराष्‍ट्र के देहू गांव में हुआ था और वे सदेह वैकुंठ गए थे । अर्थात वे देहत्‍याग किए बिना अपने स्‍थूल देह के साथ भगवान श्रीविष्‍णुजी के वैकुंठधाम गए थे ।</p>
    <ul>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> sat saheb</li>
      <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> sat saheb 2</li>
    </ul>
    <blockquote>
        <p>sat sahehb ji hello</p>
    </blockquote>
    <pre>
        <code>
        कैसे हुँ मैं/code>
    </pre>
    <ul>
        <li>Sat Saheb Ji</li>
        <li>Sat Saheb Ji 2</li>
        <li>List item</li>
        <li>Sat Saheb Ji</li>
        <li>Sat Saheb Ji</li>
    </ul>
    <ol start="2">
        <li>
            <p>Sat Saheb Ji 2</p>
        </li>
        <li>
           <p>List item<br>
           4. Sat Saheb Ji</p>
            <p>function getCode(){<br>
           sat saheb ji<br>
           }</p>
        </li>
    </ol>
    <h2 id="lets--start-the-tutorial">Lets  Start The Tutorial</h2>
    <blockquote>
      <p>sat saheb ji bolo <strong>satsaguu</strong> dev ji ki jay <strong>saho</strong></p>
    </blockquote>
    <p><img src="https://plus.unsplash.com/premium_photo-1667043243144-3e9c47dc23b9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw=&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="enter image description here"></p>
  `

  return (
    <div className={styles.blogLayoutWrapper}>
      <div dangerouslySetInnerHTML={{ __html: htmlText }} className={styles.blogLayout}>
      </div>
      <LayoutFeedback like={4343} link="httpsLtwitter" />
    </div>
  )
};