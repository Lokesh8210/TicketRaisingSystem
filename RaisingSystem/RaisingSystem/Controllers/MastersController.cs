using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RaisingSystem.Model;

namespace RaisingSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MastersController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public MastersController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/Masters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Master>>> GetMasters()
        {
          if (_context.Masters == null)
          {
              return NotFound();
          }
            return await _context.Masters.ToListAsync();
        }

        // GET: api/Masters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Master>> GetMaster(int id)
        {
          if (_context.Masters == null)
          {
              return NotFound();
          }
            var master = await _context.Masters.FindAsync(id);

            if (master == null)
            {
                return NotFound();
            }

            return master;
        }

        // PUT: api/Masters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaster(int id, Master master)
        {
            if (id != master.EmpId)
            {
                return BadRequest();
            }

            _context.Entry(master).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Masters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    /*    [HttpPost]
        public async Task<ActionResult<Master>> PostMaster(Master master)
        {
          if (_context.Masters == null)
          {
              return Problem("Entity set 'ProjectDBContext.Masters'  is null.");
          }
            _context.Masters.Add(master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaster", new { id = master.EmpId }, master);
        }*/
        //=============================================================
        // POST: api/Masters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Master>> PostMaster(Master master)
        {
            if (_context.Masters == null)
            {
                return Problem("Entity set 'ProjectDBContext.Masters' is null.");
            }

            // Check if the mailId is already in use
            if (_context.Masters.Any(m => m.MailId == master.MailId))
            {
                return Conflict($"Email '{master.MailId}' is already in use.");
            }

            _context.Masters.Add(master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaster", new { id = master.EmpId }, master);
        }


        // DELETE: api/Masters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaster(int id)
        {
            if (_context.Masters == null)
            {
                return NotFound();
            }
            var master = await _context.Masters.FindAsync(id);
            if (master == null)
            {
                return NotFound();
            }

            _context.Masters.Remove(master);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        // GET: api/Masters/getemployeeid/{email}
        [HttpGet("getemployeeid/{email}")]
        public async Task<ActionResult<int>> GetEmployeeId(string email)
        {
            int empid = 0;
            var employee = await _context.Masters.FirstOrDefaultAsync(emp => emp.MailId == email);

            if (employee != null)
                empid = employee.EmpId;

            return empid;
        }

        private bool MasterExists(int id)
        {
            return (_context.Masters?.Any(e => e.EmpId == id)).GetValueOrDefault();
        }
    }
}
