import { Hearts } from "./Hearts.jsx"
import { Time } from "./Time.jsx"
import "./Thoughts.css"

export const Thoughts = ({ message, hearts, time}) => {
  return (
    <div className="thoughts-container">
        <p id="message">{message}</p>
        <div className="row-items">
        <Hearts hearts={hearts} />
        <Time time={time}/>
        </div>
    </div>
  )
}

