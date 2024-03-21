import "./ThoughtsInput.css";

export const ThoughtsInput = ({
  handleSubmit,
  addThought,
  setAddThought,
}) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <p>What is making you happy right now?</p>
        <textarea
          className="text-input"
          value={addThought}
          onChange={(event) => setAddThought(event.target.value)}
          placeholder="Write here..."
        >
          {" "}
        </textarea>
        <button id="submit-btn" type="submit">
          ❤️Send Happy Thought❤️
        </button>
      </form>
    </div>
  );
};
