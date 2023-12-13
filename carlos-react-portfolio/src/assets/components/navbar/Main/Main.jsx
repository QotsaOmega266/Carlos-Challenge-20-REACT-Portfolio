import React from "react";
import styles from "./Main.module.css";

export const Main = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.intro}> Hello, my name is Carlos Ogle!
            <p>I am a resident of Kingman, Arizona for over 15 years and am currently planning
                 to enroll for a Bachelors Degree in Computer Science. I've been learning about Web development for a while 
                 and am eagar to test my skills in the field! </p>
                 <a href="emailto:cogle6095@gmail.com">My Contact Here</a>
            </h1>
                </div>
                <img alt="Image of me"/>
                <div className={styles.upperblur}/>
                <div className={styles.lowerblur}/>
    </section>;
}