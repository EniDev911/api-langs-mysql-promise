import {db} from '../database/connection'

const getAllLanguages = async (req, res) => {
    try {
        const conn = await db.getConnection()
        const result = await conn.query("SELECT * FROM languages");
        res.status(200).json(result);
    } catch(err) {
        console.log(err.message);
        res.status(500).send("Problemas en el servidor")
    }
}
const getLanguage = async (req, res) => {
    try {
        const conn = await db.getConnection()
        const id = req.params.id;
        const result = await conn.query("SELECT * FROM languages WHERE id=?", [id]);
        res.status(200).json(result);
    } catch(err) {
        console.log(err.message);
        res.status(500).send("Problemas en el servidor")
    }
}

const updateLanguage = async (req, res) => {
    try {
        const conn = await db.getConnection()
        const {name, programmers}  = req.body;
        const id = req.params.id;
        if (name === undefined || programmers === undefined || id === undefined){
            return res.json({message: "Bad request: require(name, programmers)"})
        }
        const result = await conn.query("UPDATE languages SET ? WHERE id=?", [{name, programmers}, id])
        res.status(200).json({message: "updated", result})
    }catch(err){
        console.log(err.message);
        res.status(500).json({message: "Problemas en el servidor"})
    }
}

const addLanguage = async(req, res) => {
    try {
        const conn = await db.getConnection()
        const {name, programmers} = req.body;

        if (name === undefined || programmers === undefined){
            return res.status(400).json(
                {message: "Bad request. fields require (name, programmers)"})
        }
        const sql = "INSERT INTO languages SET ?" 
        const result = await conn.query(sql, {name, programmers});
        res.status(200).json({message: "Saved", result})
    }catch(err){
        console.log(err.message);
        res.status(500).send("Problemas en el servidor")
    }
}

const deleteLanguage = async (req, res) => {
    try {
        const conn = await db.getConnection()
        const id = req.params.id;
        const result = await conn.query("DELETE FROM languages WHERE id=?", [id]);
        res.status(200).json({message: "deleted", result});
    } catch(err) {
        console.log(err.message);
        res.status(500).send("Problemas en el servidor")
    }
}

export const methods = {
    getAllLanguages,
    getLanguage,
    addLanguage,
    deleteLanguage,
    updateLanguage
}