import styles from "./InfoCard.module.css";

export default function InfoCard() {
    return(
        <div className={styles.parentDiv}>
          <div>
            <h3>QueerCoded</h3>
            <p>QueerCoded is a new student org for LGBTQ+ students and allies in computer science. 
               We aim to provide a safe and welcoming community for LGBTQ+ students in computer science and adjacent fields to talk about their experiences and interests in CS. 
               We have a room in the Siebel basement (room number 0209) open to all, come visit us and join us at upcoming social events!</p>
          </div>
          <div> 
            <img src="/assets/butterfly.png" alt="Butterfly" />
          </div>
        </div>
    )
}