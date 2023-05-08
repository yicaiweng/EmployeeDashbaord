using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webAPI.Data;
using webAPI.Models;

namespace webAPI.Controllers {
    [Route("api/[controller]")]
    [ApiController]

    public class EmployeeController : ControllerBase {
        // public DataDbContext dc { get; }
        private readonly DataDbContext dc;
        public EmployeeController(DataDbContext dc) {
            this.dc = dc;
        }

        //Get api/employee
        [HttpGet]
        public async Task<IActionResult> GetEmployees() {
            var employees = await dc.Employees.ToListAsync();
            return Ok(employees);
        }

          //POST api/employee
        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employeeReq) {
        
           await dc.Employees.AddAsync(employeeReq);
           await dc.SaveChangesAsync();

           return Ok(employeeReq);
        }
    }
}