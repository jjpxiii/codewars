using NUnit.Framework;
using System;

namespace Katas
{

    [TestFixture]
    public class AustralianVotingTest
    {
        [Test]
        public void Australian()
        {
            var sampleInput = @"1

3
John Doe
Jane Smith
Sirhan Sirhan
1 2 3
2 1 3
2 3 1
1 2 3
3 1 2";

            Assert.AreEqual(AustralianVoting.CountVotes(sampleInput), "John Doe");
        }
    }
}