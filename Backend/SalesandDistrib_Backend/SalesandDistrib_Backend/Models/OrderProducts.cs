using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesandDistrib_Backend.Models
{
    public class OrderProducts
    {
        [Key]
        public int Id { get; set; }
       

       

        public int ProductId { get; set; }
        public AgentCustomer _agentcustomer { get; set; }
        [ForeignKey("_agentcustomer")]
        public int AgentCustomerId { get; set; }


        public int QTY { get; set; }
        [DataType(DataType.Date)]
        public DateTime OrderDate { get; set; }
        
    } 
}
