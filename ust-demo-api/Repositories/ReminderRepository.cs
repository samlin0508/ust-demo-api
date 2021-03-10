using System;
using System.Collections.Generic;
using ust_demo_api.Models;
using System.Linq;

namespace ust_demo_api.Repositories
{
    public class ReminderRepository : IReminderRepository
    {
        private readonly UstDemoDbContext _dbContext;

        public ReminderRepository(UstDemoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Create(Reminder reminder)
        {
            _dbContext.Reminder.Add(reminder);
            _dbContext.SaveChanges();
        }

        public void DeleteById(int id)
        {
            var reminder = RetrieveById(id);
            _dbContext.Remove(reminder);
            _dbContext.SaveChanges();
        }

        public IList<Reminder> RetrieveAll()
        {
            return _dbContext.Reminder.ToList();
        }

        public Reminder RetrieveById(int id)
        {
            return _dbContext.Reminder.Where(e => e.Id == id).FirstOrDefault();
        }

        public void Update(Reminder reminder)
        {
            var _reminder = RetrieveById(reminder.Id);
            _reminder.Summary = reminder.Summary;
            _reminder.Description = reminder.Description;
            _dbContext.SaveChanges();
        }
    }
}
