"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TodoProps } from "@/type";
import axios from "axios";

export default function HomePageCard(props: TodoProps) {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = (postId: unknown) => {
    console.log("delete");
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        console.log(res.data);
        alert("delete success");
      })
      .catch((e) => console.error(e));
  };

  return (
    <Card sx={{ maxWidth: 500 }} className="flex">
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          fontWeight={"bold"}
        >
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="info" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
