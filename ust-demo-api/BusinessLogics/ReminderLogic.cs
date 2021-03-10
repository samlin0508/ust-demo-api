using System;
using System.Collections.Generic;
using ust_demo_api.Models;
using ust_demo_api.Repositories;

namespace ust_demo_api.BusinessLogics
{
    public class ReminderLogic : IReminderLogic
    {
        private readonly IReminderRepository _reminderRepository;

        public ReminderLogic(IReminderRepository reminderRepository)
        {
            _reminderRepository = reminderRepository;
        }

        public void Create(Reminder reminder)
        {
            _reminderRepository.Create(reminder);
        }

        public void DeleteById(int id)
        {
            _reminderRepository.DeleteById(id);
        }

        public IList<Reminder> RetrieveAll()
        {
            return _reminderRepository.RetrieveAll();
        }

        public Reminder RetrieveById(int id)
        {
            return _reminderRepository.RetrieveById(id);
        }

        public void Update(Reminder reminder)
        {
            _reminderRepository.Update(reminder);
        }
    }
}
