using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAngularAuthCRUD1.Models
{
    public class AdvertTypes
    {
        public int Id { get; set; }

        [StringLength(60, MinimumLength = 2)]
        [Required]
        public string Type { get; set; }

        [StringLength(60, MinimumLength = 3)]
        [Required]
        public string TypeDescription { get; set; }
    }
}
