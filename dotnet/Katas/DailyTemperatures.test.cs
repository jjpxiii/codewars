using NUnit.Framework;
using System;
using System.Linq;

namespace Katas
{
    [TestFixture]
    public class DailyTemperaturesTest
    {
        [Test]
        public void Test1()
        {
            var entry = new[] { 73, 74, 75, 71, 69, 72, 76, 73 };
            var expected = new[] { 1, 1, 4, 2, 1, 1, 0, 0 };
            Assert.IsTrue(expected.SequenceEqual(DailyTemp.DailyTemperatures(entry)));
        }

        [Test]
        public void Test2()
        {
            var entry = new[] { 30, 40, 50, 60 };
            var expected = new[] { 1, 1, 1, 0 };
            Assert.IsTrue(expected.SequenceEqual(DailyTemp.DailyTemperatures(entry)));
        }

        [Test]
        public void Test3()
        {
            var entry = new[] { 30, 60, 90 };
            var expected = new[] { 1, 1, 0 };
            Assert.IsTrue(expected.SequenceEqual(DailyTemp.DailyTemperatures(entry)));
        }
    }
}
