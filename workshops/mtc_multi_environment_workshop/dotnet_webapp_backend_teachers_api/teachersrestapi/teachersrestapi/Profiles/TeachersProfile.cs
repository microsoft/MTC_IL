using System;
using AutoMapper;
namespace teachersrestapi.Profiles
{
    public class TeachersProfile: Profile
    {
        public TeachersProfile()
        {
            CreateMap<Models.Domain.Teacher, Models.DTO.Teacher>()
                .ReverseMap();
        }
    }
}

