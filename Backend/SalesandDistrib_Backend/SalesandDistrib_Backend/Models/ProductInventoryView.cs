using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SalesandDistrib_Backend.Models
{
    public class ProductInventoryView
    {
        public Products products { get; set; }
        public Inventory inventory { get; set; }

    }
}
