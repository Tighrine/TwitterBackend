import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//Create a user
router.post("/", async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: "Email and username shuould be unique"});
  }
});

//Get users
router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.status(200).json(allUsers);
});

//Get one user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  if(user === null) return res.status(404).json({error: "No user associated to id: " + id});
  res.status(200).json(user);
});

//update a user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { bio, name, image } = req.body;

  try {
    const updatedUser = await prisma.user.update({
        where: {id: Number(id)},
        data: { bio, name, image }
    });
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(400).json({ error: "Failed to upadate user" });
  }
});

//delete a user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: "Not Implemented" });
});

export default router;
