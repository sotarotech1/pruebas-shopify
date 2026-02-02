import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("Hola mundo");
  res.json({
    msg: "Hola mundo",
  });
});

export default router;
