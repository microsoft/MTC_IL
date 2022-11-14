using Microsoft.EntityFrameworkCore;
using teachersrestapi.Models.Domain;

namespace teachersrestapi.Data
{
    public class TeachersDbContext: DbContext
    {
        public TeachersDbContext(DbContextOptions<TeachersDbContext> options): base(options)
        {
        }

        public DbSet<Teacher> Teachers { get; set; }
    }
}

