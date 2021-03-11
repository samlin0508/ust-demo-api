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
        public ActionResult<IList<Reminder>> Get()
        {
            return Ok(_reminderLogic.RetrieveAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Reminder> Get(int id)
        {
            var result = _reminderLogic.RetrieveById(id);
            if (result == null) return NotFound();
            return Ok();
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] Reminder value)
        {
            _reminderLogic.Create(value);
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Reminder value)
        {
            value.Id = id;
            _reminderLogic.Update(value);
            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _reminderLogic.DeleteById(id);
            return Ok();
        }
    }
}
