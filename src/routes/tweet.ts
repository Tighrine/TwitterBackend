import { Router } from "express";

const router = Router();

//Create a tweet
router.post("/", (req, res) => {
    res.status(501).json({error: "Not Implemented"});
});

//Get tweets
router.get("/", (req, res) => {
    res.status(501).json({error: "Not Implemented"});
});

//Get one tweet
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: "Not Implemented"});
});

//update a tweet
router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: "Not Implemented"});
});

//delete a tweet
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: "Not Implemented"});
});

export default router;