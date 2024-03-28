import express from 'express';

import {Router} from 'express'

type Usuario = {
    id: number,
    name: string
}

const router=Router()

router.get("/", (req,res)=>{
    res.send("Hola Perrita. Tragatelo Todo!")
})


router.post("/", (req,res)=>{
    const {name} =req.body as Usuario
    res.send('ok')
    console.log(`Hola, Eres una Zorrita y tu nombre es: ${name}`)
})

export default router