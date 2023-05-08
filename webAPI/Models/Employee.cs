using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email {get; set; }

        public long Phone { get; set; }

        public long Salary { get; set; }

        public string Department { get; set; }

        // public string Gender { get; set; }

        // public string photo { get; set; }
    }
}