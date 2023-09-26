import { pool } from "../db.js"



export const getEmployees = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows) 
    } catch (error) {
        return res.status(500).json({
            message: 'Error getting employees'
        })
    }
}

export const getEmployeeById = async (req, res) => {
    try{
        const {id} = req.params
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json(rows[0])
    }catch (error) {
        return res.status(500).json({
            message: 'Error getting employee'
        })
    }
}

export const createEmployees = async (req, res) => {
    try{
        const { name, salary } = req.body
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
            })
    }catch{
        return res.status(500).json({
            message: 'Error creating employee'
        })
    }
}

export const updateEmployees = async (req, res) => {
    try{
        const {id} = req.params
        const { name, salary } = req.body
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        console.log(result)
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        const [row] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(row[0])
    }catch{
        return res.status(500).json({
            message: 'Error updating employee'
        })
    }
}

export const deleteEmployeeById = async(req, res) => {
    try{
        const {id} = req.params
        const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [id])
    
        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.sendStatus(204) 
    }catch{
        return res.status(500).json({
            message: 'Error deleting employee'
        })
    }
}