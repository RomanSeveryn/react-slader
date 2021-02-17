import React, { Component } from 'react';
import styles from './Carusel.module.css';
  class Slayder extends Component {
    constructor(props) {
      super(props);

      this.state = {
        db:
          [
            {
              name: 'HUBBLE SHOWCASES A VAST COSMIC UNDERSEA WORLD TEEMING WITH STARS',
              src: 'https://imgsrc.hubblesite.org/hvi/uploads/story/display_image/1351/low_STSCI-H-p2016a-k-1340x520.png',
              description: "A colorful image resembling a cosmic version of an undersea world teeming with stars is being released to commemorate the Hubble Space Telescope's 30 years of viewing the wonders of space.",
            },
            {
              name: 'HUBBLE SHOWCASES A VAST COSMIC UNDERSEA WORLD TEEMING WITH STARS',
              src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200',
              description: "A colorful image resembling a cosmic version of an undersea world teeming with stars is being released to commemorate the Hubble Space Telescope's 30 years of viewing the wonders of space.",
            },
            {
              name: 'HUBBLE SHOWCASES A VAST COSMIC UNDERSEA WORLD TEEMING WITH STARS',
              src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200',
              description: "A colorful image resembling a cosmic version of an undersea world teeming with stars is being released to commemorate the Hubble Space Telescope's 30 years of viewing the wonders of space.",
            }
          ],
          currentIndex: 0,
      }
    }


    renderSlader() {
      const {db} = this.state;
      return db.map((slide, currentIndex) => {
        const {name, src, description} = slide;
        return <div className={styles.container} key={currentIndex}>
          <h1 class={styles.title}>{name}</h1>
          <img className={styles.img} src={src}/>
          <p className={styles.pharagraph}>{description}</p>
        </div>
      })
      
    }
      render() {
        return (
          <div>
            {this.renderSlader()}
          </div>
        );
      }
    }

    export default Slayder;
