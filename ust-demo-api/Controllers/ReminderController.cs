using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ust_demo_api.BusinessLogics;
using ust_demo_api.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ust_demo_api.Controllers
{
    [Route("api/[controller]")]
    public class ReminderController : Controller
    {
        private readonly IReminderLogic _reminderLogic;

        public ReminderController(IReminderLogic reminderLogic)
        {
            _reminderLogic = reminderLogic;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Reminder> Get()
        {
            return _reminderLogic.RetrieveAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Reminder Get(int id)
        {
            return _reminderLogic.RetrieveById(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Reminder value)
        {
            _reminderLogic.Create(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Reminder value)
        {
            value.Id = id;
            _reminderLogic.Update(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _reminderLogic.DeleteById(id);
        }
    }
}
