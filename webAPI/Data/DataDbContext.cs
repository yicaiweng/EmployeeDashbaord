using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using webAPI.Models;

namespace webAPI.Data
{
    public class DataDbContext: DbContext
    {
        public DataDbContext(DbContextOptions<DataDbContext> options) : base(options) {

        }

        public DbSet<Employee> Employees {get; set;}
    }
}