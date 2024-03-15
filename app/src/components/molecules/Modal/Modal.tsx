"use client";

import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import axios from "axios";
import { db } from "@/app/src/utils/firebaseConfig";
import { collection,addDoc } from "firebase/firestore";
import { ModalType } from "@/type";


const addDataToFireStore = async(title: unknown,detail:unknown) => {
  try {
    const docRef = await addDoc(collection(db,"messages"),{
      title,
      detail
    });
    console.log(`Docref`,docRef);
    console.log(`Document id: `,docRef.id);
    return true;
  } catch (error) {
    console.error(`Error adding document`,error);
    return false;
  }
}

export default function MyModal() {
  const [open, setOpen] = useState<ModalType>({ isOpen: false });
  const handleOpen = () => setOpen({ isOpen: true });
  const handleClose = () => setOpen({ isOpen: false });

  const inputRefs = useRef<{
    titleRef: HTMLInputElement | null;
    detailRef: HTMLInputElement | null;
  }>({
    titleRef: null,
    detailRef: null,
  });

  const postData = async() => {
    const formData = {
      title: inputRefs.current.titleRef?.value,
      details: inputRefs.current.detailRef?.value,
    };

    const added = await addDataToFireStore(formData.title,formData.details);
    if (added) {
      alert("Add Success");
    }

    // axios
    //   .post("http://localhost:3000/api/todo", formData)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.error(e));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(inputRefs.current.titleRef?.value);
    console.log(inputRefs.current.detailRef?.value);
    postData();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Todo</Button>
      <Modal
        open={open.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col gap-4 justify-center items-center bg-blue-50">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="standard"
            inputRef={(ref) => (inputRefs.current.titleRef = ref)}
          />
          <TextField
            id="outlined-basic"
            label="Detail"
            variant="standard"
            inputRef={(ref) => (inputRefs.current.detailRef = ref)}
          />
          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
        </div>
      </Modal>
    </div>
  );
}
