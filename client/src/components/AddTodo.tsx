import React, { useState, useEffect } from "react";
import MessageTag from "./MessageTag";
import Loading from "./Loading";
import {
  DialogActions,
  TextField,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Container,
  Button,
} from "@mui/material";
//helpers
import { TITLE_LENGTH, MIN_DESC_LENGTH } from "../helpers/config";
interface Props {
  onAdd: (todo: { title: string; description: string }) => Promise<void>;
  onError: Boolean;
  onLoading: Boolean;
}

const AddTodo: React.FC<Props> = ({ onAdd, onError, onLoading }) => {
  //hooks
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //checks when tiltle/description changes
  useEffect(() => {
    if (title.length <= TITLE_LENGTH) {
      setErrorMessage("Title must be 4 characters long");
    } else if (description.length <= MIN_DESC_LENGTH) {
      setErrorMessage("Description must be at least 20 characters long");
    }
  }, [title, description]);

  //handle add to button
  const handleClickOpen = () => {
    setOpen(true);
  };

  //handle close button
  const handleClose = () => {
    setOpen(false);
  };

  //display when there is an error
  if (onError) return <MessageTag text="Something went wrong" />;
  if (onLoading) return <Loading />;

  //submit todo
  const submitTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //validate
    if (
      title.length !== TITLE_LENGTH ||
      description.length <= MIN_DESC_LENGTH
    ) {
      return;
    }
    onAdd({ title, description });
    if (!onLoading) {
      setOpen(false);
    }
    //clear form
    setTitle("");
    setDescription("");
  };
  return (
    <Container>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add todos
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD TO DO</DialogTitle>
        <form onSubmit={submitTodo}>
          <DialogContent>
            <DialogContentText>Enter your to do item here</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="TITLE"
              type="text"
              fullWidth
              value={title}
              variant="standard"
              helperText={title.length !== TITLE_LENGTH ? errorMessage : ""}
              error={title.length !== TITLE_LENGTH}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="DESCRIPTION"
              type="text"
              fullWidth
              variant="standard"
              value={description}
              helperText={
                description.length <= MIN_DESC_LENGTH ? errorMessage : ""
              }
              error={description.length <= MIN_DESC_LENGTH}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default AddTodo;
