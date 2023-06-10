import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

import aboutData from "../Data/about.json";


function About() {

  // Set page title
  const title = document.querySelector('title')
  title.textContent = 'Kasa - A Propos'

  return (
    <>
      <Banner class="Backabout" />
      <div>

        {
          aboutData.map((elt) => (
            <Collapse title={elt.title}  >
              {elt.content}
            </Collapse>
          ))
        }
      </div>
    </>
  )
}

export default About