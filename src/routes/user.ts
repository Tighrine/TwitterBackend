import { Router } from "express";

const router = Router();

//Create a user
router.post("/", (req, res) => {
    res.status(501).json({error: "Not Implemented"});
});

//Get users
router.get("/", (req, res) => {
    res.status(501).json({error: "Not Implemented"});
});

//Get one user
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: "Not Implemented"});
});

//update a user
router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: "Not Implemented"});
});

//delete a user
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: "Not Implemented"});
});

export default router;