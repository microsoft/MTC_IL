using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using teachersrestapi.Models.Domain;
using teachersrestapi.Repositories;


namespace teachersrestapi.Controllers
{
    [ApiController]
    [Route("/api/teachers")]
    public class TeachersController : Controller
    {
        private readonly ITeacherRepository teacherRepository;
        private readonly IMapper mapper;

        public TeachersController(ITeacherRepository teacherRepository, IMapper mapper)
        {
            this.teacherRepository = teacherRepository;
            this.mapper = mapper;
        }

        // GET All Teachers 
        [HttpGet]
        public async Task<IActionResult> GetAllTeachersAsync()
        {
            // Manual Teachers Response 
            //var teachers = new List<Teacher>()
            //{
            //    new Teacher
            //    {
            //        Id = Guid.NewGuid(),
            //        Name = "Arik Bidny",
            //        Age = 24,
            //        Gender = "Male",
            //        Class = "History"
            //    },
            //   new Teacher
            //    {
            //        Id = Guid.NewGuid(),
            //        Name = "Shani Bidny",
            //        Age = 22,
            //        Gender = "Female",
            //        Class = "Bscience"
            //    }
            //};
            var teachers = await teacherRepository.GetAllAsync();


            var teachersDTO = mapper.Map<List<Models.DTO.Teacher>>(teachers);


            return Ok(teachersDTO);
        }


        // GET Teacher by Id 
        [HttpGet]
        [Route("{Id:int}")]
        [ActionName("GetTeacherAsync")]
        public async Task<IActionResult> GetTeacherAsync(int Id)
        {
            var teacher = await teacherRepository.GetAsync(Id);

            if (teacher == null)
            {
                return NotFound();
            }

            var teacherDTO = mapper.Map<Models.DTO.Teacher>(teacher);

            return Ok(teacherDTO);
        }

        // POST create a teacher
        [HttpPost]
        public async Task<IActionResult> AddTeacherAsync(Models.DTO.AddTeacherRequest addTeacherRequest)
        {
            // Request(DTO) to Domain model
            var teacher = new Teacher()
            {
                Name = addTeacherRequest.Name,
                Age = addTeacherRequest.Age,
                Gender = addTeacherRequest.Gender,
                Class = addTeacherRequest.Class
            };

            // Pass details to Repository
            teacher = await teacherRepository.AddAsync(teacher);

            // Convert back to DTO
            var teacherDTO = new Models.DTO.Teacher
            {
                Id = teacher.Id,
                Name = teacher.Name,
                Age = teacher.Age,
                Gender = teacher.Gender,
                Class = teacher.Class
            };

            // return 201
            return CreatedAtAction(nameof(GetTeacherAsync), new { Id = teacherDTO.Id }, teacherDTO);
        }

        // DELETE delete a teacher
        [HttpDelete]
        [Route("{Id:int}")]
        public async Task<IActionResult> DeleteTeacherAsync(int Id)
        {
            // Get teacher from database
            var teacher = await teacherRepository.DeleteAsync(Id);

            // If null return NotFound
            if (teacher == null)
            {
                return NotFound();
            }

            // Convert response back to DTO
            var teacherDTO = new Models.DTO.Teacher
            {
                Id = teacher.Id,
                Name = teacher.Name,
                Age = teacher.Age,
                Gender = teacher.Gender,
                Class = teacher.Class
            };

            // Return Ok response
            return Ok(teacherDTO);
        }


        // PUT update a teacher
        [HttpPut]
        [Route("{Id:int}")]
        public async Task<IActionResult> UpdatingTeacherAsync([FromRoute] int Id, [FromBody] Models.DTO.UpdateTeacherRequest updateTeacherRequest) {

            // Convert DTO to Domain Model
            var teacher = new Models.Domain.Teacher()
            {
                Name = updateTeacherRequest.Name,
                Age = updateTeacherRequest.Age,
                Gender = updateTeacherRequest.Gender,
                Class = updateTeacherRequest.Class
            };

            // Update Teacher using repository
            teacher = await teacherRepository.UpdateAsync(Id, teacher);

            if (teacher == null)
            {
                return NotFound();
            }

            // Convert Domain back to DTO
            var teacherDTO = new Models.DTO.Teacher
            {
                Id = teacher.Id,
                Name = teacher.Name,
                Age = teacher.Age,
                Gender = teacher.Gender,
                Class = teacher.Class
            };

            return Ok(teacherDTO);

        }
    }
}

