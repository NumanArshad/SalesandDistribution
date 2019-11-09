using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesandDistrib_Backend.Models
{
    public class AgentCustomer
    {
        [Key]
        public int Id { get; set; }
        public Users _saleagent { get; set; }
       [ForeignKey("_saleagent")]
        public int SaleAgentId { get; set; }
        public Users _customer { get; set; }
          [ForeignKey("_customer")]
        public int CustomerId { get; set; }
    }
}
