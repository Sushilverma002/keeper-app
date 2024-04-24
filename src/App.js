import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import List from "./List";
import notes from "./Note";

function App() {
  return (
    <>
      <Heading />
      {/* {notes.map((cards) => {
        <List key={cards.key} title={cards.title} head={cards.content} />
      })} */}
      {notes.map((cards) => (
        <List key={cards.key} title={cards.title} head={cards.content} />
      ))}
      <Footer />
    </>
  );
}
export default App;
