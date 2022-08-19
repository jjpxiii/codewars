using System;
using System.Linq;
using NUnit.Framework;

namespace Katas
{
    [TestFixture]
    public class HexagonBeamTests
    {
        [Test, Description("5 Example Tests"), TestCaseSource("examples")]
        public static void ExampleTest((int, int[], int) ex)
        {
            (int n, int[] seq, int sol) = ex;
            //Assert.That(HexagonBeam(n, seq), Is.EqualTo(sol));
        }

        private static readonly (int, int[], int)[] examples =
        {
            (2,new int[]{5,8,3,8},24),
            (3,new int[]{1,3,5,7},23),
            (4,new int[]{2,4,6,8},34),
            (5,new int[]{1,0,4,-6},9),
            (5,new int[]{2,},18),
        };
    }
}