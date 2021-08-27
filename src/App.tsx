import "./App.css";
import { useEffect, useState } from "react";
import {
  deleteNote,
  createNote,
  getNotes,
  updateNote,
} from "./services/notesService";
// import DUMMY_NOTES from "./DUMMY_NOTES";
import Note from "./components/Note/Note";
import INote from "./interfaces/note.interface";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

function App() {
  // const getNotes = () =>{
  //   console.log('we are awesome')
  // }
  // let notesList: any[] = []; //note list variable

  const [notesList, setNotesList] = useState<Array<INote>>([]);
  const [ShowAddModal, setShowAddModal] = useState(false);
  const handleCloseAddModal = () => {
    setNewNote({
      link: "",
      text: "",
    });
    setShowAddModal(false);
  };
  const handleShowAddModal = () => setShowAddModal(true);

  const [newNote, setNewNote] = useState<Partial<INote>>({
    link: "",
    text: "",
  });
  // const [notesList, setNotesList] = useState<any[]>([]);

  // App components renders first time get items from local storage
  // useEffect(() => {
  //   const listFromStorageString = localStorage.getItem("my-notes");
  //   if (listFromStorageString) {
  //     const listFromStorageArray = JSON.parse(listFromStorageString);
  //     setNotesList(listFromStorageArray);
  //   } else {
  //     setNotesList(DUMMY_NOTES);
  //   }
  // }, []);
  useEffect(() => {
    getNotesFromServer();
  }, []);

  const getNotesFromServer = async () => {
    const notes = await getNotes();
    setNotesList(notes);
  };

  // useEffect(() => {
  //   console.log("saving to localstorage");
  //   const notesListString = JSON.stringify(notesList);
  //   localStorage.setItem("my-notes", notesListString);
  // }, [notesList]);

  // useEffect(() => {
  //   console.log("noteList list value changed");
  //   console.log(notesList);
  // }, [notesList]);

  // get notes method
  // async function getNotes() {
  //   try {
  //     const response = await axios.get("http://localhost:5000/notes");
  //     // noteslist = response.data.notes;
  //     setNotesList(response.data.notes);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // console.log("rerendering");
  // console.log(notesList);
  const updateNoteItem = async (updatedNote: INote) => {
    const noteFromServer = await updateNote(updatedNote);
    // temporary variable
    const updatedList = notesList.map((noteItem: INote) => {
      if (noteItem._id === noteFromServer._id) {
        return noteFromServer;
      }
      return noteItem;
    });
    setNotesList(updatedList); // updating the state of notes list
  };

  const addNote = async () => {
    const savedNote = await createNote(newNote);
    setNotesList([...notesList, savedNote]);
    handleShowAddModal();
  };
  const deleteNoteItem = async (noteToDelete: INote) => {
    await deleteNote(noteToDelete._id);
    const remainingNotes = notesList.filter((noteItem) => {
      return noteItem._id !== noteToDelete._id;
    });
    setNotesList(remainingNotes);
  };

  return (
    <div className="App">
      <div className="t1-main">Notes Application</div>
      <Button
        variant="dark"
        className="add-button"
        onClick={handleShowAddModal}
      >
        +
      </Button>

      <Modal show={ShowAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              onChange={(event) => {
                const NewVal = event.currentTarget.value;
                setNewNote({
                  ...newNote,
                  text: NewVal,
                });
              }}
              as="textarea"
              placeholder="Enter your text"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Link"
            className="mb-3 note-link"
          >
            <Form.Control
              onChange={(event) => {
                const NewVal = event.currentTarget.value;
                setNewNote({
                  ...newNote,
                  text: NewVal,
                });
              }}
              type="url"
              placeholder="Enter note Url"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addNote}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return (
            <Note
              note={noteItem}
              onNoteUpdate={updateNoteItem}
              onNoteDelete={deleteNoteItem}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
