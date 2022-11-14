using System;
using teachersrestapi.Models.Domain;
namespace teachersrestapi.Repositories

{
    public interface ITeacherRepository
    {
        Task<IEnumerable<Teacher>> GetAllAsync();

        Task<Teacher> GetAsync(int Id);

        Task<Teacher> AddAsync(Teacher teacher);

        Task<Teacher> DeleteAsync(int Id);

        Task<Teacher> UpdateAsync(int Id, Teacher teacher);
    }
}

