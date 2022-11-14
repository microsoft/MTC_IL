using System;
namespace teachersrestapi.Models.DTO
{
    public class AddTeacherRequest
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string Class { get; set; }
    }
}

