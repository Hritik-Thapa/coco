import React, { useEffect, useState } from "react";
import "./App.css";
import Charts from "./components/charts";
import { Button, Dropdown, Modal, Alert } from "react-bootstrap";
import FetchButton from "./components/FetchButton";
import OffCanvas from "./components/OffCanvas";

const Forms = () => {
  const [selected, setSelected] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({ name: "", file: null });
  const [fetchShow, setFetchShow] = useState(null);
  const [formError, setFormError] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/test");
      const data = await response.json();
      if (!data.ok) {
        setFetchShow(false);
      } else {
        setFetchShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    console.log(data);
    if (data.name && data.file) {
      console.log("ok");
    } else {
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 3000);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center m-5 gap-4">
      <OffCanvas />

      <p className="text-white bg-green-500 font-bold text-center text-4xl p-4 rounded-lg hover:text-green-500 hover:bg-white cursor-pointer w-[60%] ">
        Hello World
      </p>

      <Charts />

      <Dropdown>
        <Dropdown.Toggle variant="secondary">
          {selected ? selected : "Dropdown"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSelected("Item 1")}>
            Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelected("Item 2")}>
            Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelected("Item 3")}>
            Item 3
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* button for popup */}

      <Button variant="primary" className="p-4" onClick={() => setModal(true)}>
        Click Me
      </Button>

      {modal && (
        <Modal show={true} onHide={() => setModal(false)}>
          <Modal.Header closeButton className="bg-slate-100">
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body className="w-[80%] m-3">
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer className="bg-slate-100">
            <Button variant="secondary" onClick={() => setModal(false)}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      )}
      {fetchShow ? (
        <h1 className="text-lg text-green-500">Success</h1>
      ) : (
        <h1 className="text-lg text-red-500">Fail</h1>
      )}

      {/* FORM */}

      <form>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={data.name}
          onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })}
        />
        <input
          type="file"
          id="file"
          accept="application/pdf"
          onChange={(e) =>
            setData({ ...data, [e.target.id]: Array.from(e.target.files) })
          }
          multiple
        />
        <button type="button" onClick={handleSubmit}>
          Submit{" "}
        </button>
      </form>

      {/* form error handeling */}

      {formError && <Alert variant="danger">Please Add fill the form</Alert>}
    </div>
  );
};

export default Forms;
