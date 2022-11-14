exports.querys = {
    // getAllWorkers: "SELECT TOP(500) * FROM [webstore].[dbo].[Workers]",
    getAllWorkers: "SELECT TOP(500) * FROM Workers",
    getWorkerById: "SELECT * FROM Workers Where id = @id",
    addNewWorker:
      "INSERT INTO Workers (Email, Name, Age, Gender) VALUES (@email,@name,@age,@gender);",
    deleteWorker: "DELETE FROM Workers WHERE id= @id",
    updateWorkerById:
      "UPDATE Workers SET Email = @email, Name = @name, Age = @age, Gender = @gender WHERE WorkerId = @WorkerId",
  };