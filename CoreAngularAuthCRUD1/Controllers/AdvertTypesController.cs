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
    public class AdvertTypesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdvertTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/AdvertTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdvertTypes>>> GetAdvertTypes()
        {
            return await _context.AdvertTypes.ToListAsync();
        }

        // GET: api/AdvertTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AdvertTypes>> GetAdvertTypes(int id)
        {
            var advertTypes = await _context.AdvertTypes.FindAsync(id);

            if (advertTypes == null)
            {
                return NotFound();
            }

            return advertTypes;
        }

        // PUT: api/AdvertTypes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdvertTypes(int id, AdvertTypes advertTypes)
        {
            if (id != advertTypes.Id)
            {
                return BadRequest();
            }

            _context.Entry(advertTypes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdvertTypesExists(id))
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

        // POST: api/AdvertTypes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<AdvertTypes>> PostAdvertTypes(AdvertTypes advertTypes)
        {
            _context.AdvertTypes.Add(advertTypes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdvertTypes", new { id = advertTypes.Id }, advertTypes);
        }

        // DELETE: api/AdvertTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AdvertTypes>> DeleteAdvertTypes(int id)
        {
            var advertTypes = await _context.AdvertTypes.FindAsync(id);
            if (advertTypes == null)
            {
                return NotFound();
            }

            _context.AdvertTypes.Remove(advertTypes);
            await _context.SaveChangesAsync();

            return advertTypes;
        }

        private bool AdvertTypesExists(int id)
        {
            return _context.AdvertTypes.Any(e => e.Id == id);
        }
    }
}
