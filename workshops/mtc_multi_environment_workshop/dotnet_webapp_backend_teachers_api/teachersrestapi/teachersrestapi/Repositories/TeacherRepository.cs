using System;
using Microsoft.EntityFrameworkCore;
using teachersrestapi.Data;
using teachersrestapi.Models.Domain;

namespace teachersrestapi.Repositories
{
    public class TeacherRepository: ITeacherRepository
    {
        private readonly TeachersDbContext teachersDbContext;

        // Get all teachers 
        public TeacherRepository(TeachersDbContext teachersDbContext)
        {
            this.teachersDbContext = teachersDbContext;
        }

        // Get teacher by Id
        public async Task<IEnumerable<Teacher>> GetAllAsync()
        {
            return await teachersDbContext.Teachers.ToListAsync();
        }


        public async Task<Teacher> GetAsync(int Id)
        {
           return await teachersDbContext.Teachers.FirstOrDefaultAsync(x => x.Id == Id);
        }

        // Create a teacher
        public async Task<Teacher> AddAsync(Teacher teacher)
        {
            await teachersDbContext.AddAsync(teacher);
            await teachersDbContext.SaveChangesAsync();

            return teacher;
        }

        // Delete a teacher
        public async Task<Teacher> DeleteAsync(int Id)
        {
            var teacher = await teachersDbContext.Teachers.FirstOrDefaultAsync(x => x.Id == Id);

            if (teacher == null)
            {
                return null;
            }

            // Delete the teacher
            teachersDbContext.Teachers.Remove(teacher);
            await teachersDbContext.SaveChangesAsync();
            return teacher;
        }

        // Update a teacher
        public async Task<Teacher> UpdateAsync(int Id, Teacher teacher)
        {
            var existingTeacher = await teachersDbContext.Teachers.FirstOrDefaultAsync(x => x.Id == Id);

            if (existingTeacher == null)
            {
                return null;
            }

            existingTeacher.Name = teacher.Name;
            existingTeacher.Age = teacher.Age;
            existingTeacher.Gender = teacher.Gender;
            existingTeacher.Class = teacher.Class;
            
       
            await teachersDbContext.SaveChangesAsync();

            return existingTeacher;
        }


    }
}

