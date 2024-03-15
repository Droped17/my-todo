"use client";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";

type ModalType = {
    isOpen: boolean
  };

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("click");
    console.log(inputRefs.current.titleRef?.value);
    console.log(inputRefs.current.detailRef?.value);
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
          <Button variant="contained" onClick={handleClick}>Add</Button>
        </div>
      </Modal>
    </div>
  );
}
