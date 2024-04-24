import React, { useState } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import List from "./components/List";
// import notes from "./components/Note";
import CreateArea from "./components/CreateArea";
function App() {
  const [notes, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote} />
      {/* {notes.map((cards) => {
        <List key={cards.key} title={cards.title} head={cards.content} />
      })} */}
      {/* {notes.map((cards) => (
        <List key={cards.key} title={cards.title} head={cards.content} />
      ))} */}
      {notes.map((noteItem, index) => {
        return (
          <List
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
