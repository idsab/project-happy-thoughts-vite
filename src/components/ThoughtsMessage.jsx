import { Hearts } from "./Hearts.jsx"
import { Time } from "./Time.jsx"
import "./ThoughtsMessage.css"

export const ThoughtsMessage = ({ message, hearts, time}) => {
  return (
    <div className="thoughts-container">
        <p>{message}</p>
        <Hearts hearts={hearts} />
        <Time time={time}/>
    </div>
  )
}

