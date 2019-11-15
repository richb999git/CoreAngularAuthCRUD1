using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreAngularAuthCRUD1.Data;
using CoreAngularAuthCRUD1.Models;

namespace CoreAngularAuthCRUD1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdvertsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Adverts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Adverts>>> GetAdverts()
        {
            return await _context.Adverts.ToListAsync();
        }

        // GET: api/Adverts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Adverts>> GetAdverts(int id)
        {
            var adverts = await _context.Adverts.FindAsync(id);

            if (adverts == null)
            {
                return NotFound();
            }

            return adverts;
        }

        // PUT: api/Adverts/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdverts(int id, Adverts adverts)
        {
            if (id != adverts.Id)
            {
                return BadRequest();
            }

            _context.Entry(adverts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdvertsExists(id))
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

        // POST: api/Adverts
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Adverts>> PostAdverts(Adverts adverts)
        {
            _context.Adverts.Add(adverts);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdverts", new { id = adverts.Id }, adverts);
        }

        // DELETE: api/Adverts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Adverts>> DeleteAdverts(int id)
        {
            var adverts = await _context.Adverts.FindAsync(id);
            if (adverts == null)
            {
                return NotFound();
            }

            _context.Adverts.Remove(adverts);
            await _context.SaveChangesAsync();

            return adverts;
        }

        private bool AdvertsExists(int id)
        {
            return _context.Adverts.Any(e => e.Id == id);
        }
    }
}
