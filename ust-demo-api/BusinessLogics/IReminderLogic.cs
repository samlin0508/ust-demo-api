using System;
using System.Collections.Generic;
using ust_demo_api.Models;

namespace ust_demo_api.BusinessLogics
{
    public interface IReminderLogic
    {
        public IList<Reminder> RetrieveAll();

        public Reminder RetrieveById(int id);

        public void DeleteById(int id);

        public void Create(Reminder reminder);

        public void Update(Reminder reminder);
    }
}
