const { querys} = require('../database/querys');
const { getConnection } = require('../database/connection');
const sql = require('mssql');

// Get all workers
exports.getWorkers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllWorkers);
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Create new worker
exports.createNewWorker = async (req, res) => {
  const { email, name, age, gender } = req.body;
  console.log(email, name, age, gender);

  // validation
  if (email == null || name == null || age == null || gender == null) {
    return res.status(400).json({
      message: "Bad Request. Please fill all the fields",
    });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("name", sql.VarChar, name)
      .input("age", sql.Int, age)
      .input("gender", sql.VarChar, gender)
      .query(querys.addNewWorker);

    res.status(200).json({ email, name, age, gender });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Get Worker By Id
exports.getWorkerById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getWorkerById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Update Worker By Id
exports.updateWorkerById = async (req, res) => {
    const { name, age, married, gender } = req.body;

  // validating
  if (name == null || age == null || married == null || gender == null) {
    return res.status(400).json({
      message: "Bad Request. Please fill all the fields",
    });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("name", sql.VarChar, name)
      .input("age", sql.Int, age)
      .input("gender", sql.VarChar, gender)
      .input("id", req.params.id)
      .query(querys.updateWorkerById);
    res.json({ email, name, age, gender });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


// Delete Worker by id
exports.deleteWorkerById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.deleteWorkerById);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

