using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesandDistrib_Backend.Models
{
    public class OrderStatus
    {
        [Key]
        public int Id { get; set; }
        
        public Status _status { get; set; }
        [ForeignKey("_status")]
        public int StatusId { get; set; }
        public AgentCustomer _agentcustomer { get; set; }
        [ForeignKey("_agentcustomer")]
        public int AgentCustomerId { get; set; }

    }
}
