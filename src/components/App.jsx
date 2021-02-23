import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");

  function handleChange() {
    setName(event.target.value);
  }

  function handleClick(event) {
    setTitle(name);

    event.preventDefault(); //prevent refresh of page.
  }

  return (
    <div className="container">
      <h1>{title} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
