using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Metrics;
using System.Net.Sockets;

namespace RaisingSystem.Model
{

    public class ProjectDBContext : DbContext
    {
        internal readonly object Employees;

        public ProjectDBContext(DbContextOptions<ProjectDBContext> options) : base(options)
        {
        }

        public DbSet<Master> Masters { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
