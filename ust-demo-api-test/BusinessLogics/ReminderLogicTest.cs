using System;
using System.Collections.Generic;
using NSubstitute;
using NUnit.Framework;
using ust_demo_api.BusinessLogics;
using ust_demo_api.Models;
using ust_demo_api.Repositories;

namespace ust_demo_api_test.BusinessLogics
{
    [TestFixture]
    public class ReminderLogicTest
    {
        private IReminderLogic _target;
        private IReminderRepository _reminderRepository;

        public ReminderLogicTest()
        {
        }

        [SetUp]
        public void SetUp()
        {
            _reminderRepository = Substitute.For<IReminderRepository>();
            _target = new ReminderLogic(_reminderRepository);
        }

        [Test]
        public void RetrieveAll_Success_ResultShouldNotBeEmpty()
        {
            //arrange
            _reminderRepository.RetrieveAll().ReturnsForAnyArgs(x => new List<Reminder>()
            {
                new Reminder {
                    Summary = "Test Summary",
                    Description = "Test Description"
                }
            });

            //act
            var result = _target.RetrieveAll();

            //assert
            _reminderRepository.Received(1).RetrieveAll();
            Assert.That(result.Count, Is.GreaterThan(0));
        }

        [Test]
        public void RetrieveAll_Success_ResultShouldBeEmpty()
        {
            //arrange
            _reminderRepository.RetrieveAll().ReturnsForAnyArgs(x => new List<Reminder>());

            //act
            var result = _target.RetrieveAll();

            //assert
            _reminderRepository.Received(1).RetrieveAll();
            Assert.That(result.Count, Is.EqualTo(0));
        }
    }
}
