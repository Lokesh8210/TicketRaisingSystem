using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RaisingSystem.Model
{
    public class Ticket
    {
        [Key]
        public int TicketId { get; set; }

        [Required]
        public string? IssueType { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime? TicketRaisedDate { get; set; }
        public string? Status { get; set; }
        public string? AssignedTo { get; set; }
        [Required]
        [ForeignKey("EmpId")]
        public int? EmpId { get; set; }
        [JsonIgnore]
      
        public virtual Master? Master { get; set; }
    }
}