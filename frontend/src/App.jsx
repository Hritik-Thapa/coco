import React, { useEffect, useState } from "react";
import "./App.css";
import Charts from "./components/charts";
import { Button, Dropdown, Modal } from "react-bootstrap";
import FetchButton from "./components/FetchButton";
const App = () => {
  const [selected, setSelected] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});
  const [fetchShow, setFetchShow] = useState(null);
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
      throw error;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 gap-4">
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
      <div>
        <FetchButton title={fetchShow ? "Success" : "Error"}></FetchButton>
      </div>
    </div>
  );
};

export default App;
