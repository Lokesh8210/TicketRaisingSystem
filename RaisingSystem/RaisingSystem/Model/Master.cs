using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace RaisingSystem.Model
{
    public class Master
    {
      
            [Key]
            public int EmpId { get; set; }

            [Required]
            public string EmpName { get; set; } = null!;
            [Required]
            public string MailId { get; set; } = null!;

            [Required]
            public string Password { get; set; } = null!;
            [Required]
            public string Role { get; set; } = null!;
  
    }
}