const repository = require('./hangout.repsitory')

const express = require("express");
//Instantiate express router
const router = express.Router();

router.post("/login",async(req,res)=>{
    try {
        const {name} = req.body
        const player = await repository.loginUser(name)
        res.status(200).json({data:player})
    } catch (error) {
        res.status(500).json({data:"error man"})
    }
})
router.post("/respond",async(req,res)=>{
    try {
        const {playerId,response,gameId,session} = req.body
        const result = await repository.response(playerId,response,gameId,session)
        res.status(200).json({data:result})

    } catch (error) {
        res.status(500).json({data:"error man"})        
    }
})

router.get("/responses",async(req,res)=>{
    try {
        const {gameId,session} = req.query
        const data = await repository.getResponses(session,gameId)
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({data:"error man"})
    }
})
router.post("/answer",async(req,res)=>{
    try {
        const {gameId,answer} = req.body
        const game = await repository.changeAnswer(gameId,answer)
        res.status(201).json({data:"Answer set"})
    } catch (error) {
        res.status(500).json({data:"error man"})
    }
})
