using NUnit.Framework;
using System;

namespace Katas
{

    [TestFixture]
    public class ConwayLifeTest
    {
        [Test]
        public void TestGlider()
        {
            int[][,] gliders =
            {
                new int[,] {{1,0,0},{0,1,1},{1,1,0}},
                new int[,] {{0,1,0},{0,0,1},{1,1,1}}
            };
            Console.WriteLine("Glider");
            int[,] res = ConwayLife.GetGeneration(gliders[0], 1);
            CollectionAssert.AreEqual(gliders[1], res, "Output doesn't match expected");
        }

        [Test]
        public void TestGliders()
        {
            int[][,] gliders =
            {
                new int[,] {{1,0,0},{0,1,1},{1,1,0}},
                new int[,] {{1,0,1},{0,1,1},{0,1,0}}
            };

            int[,] res = ConwayLife.GetGeneration(gliders[0], 2);
            CollectionAssert.AreEqual(gliders[1], res, "Output doesn't match expected");
        }

        [Test]
        public void TestTwoGliders()
        {
            int[][,] gliders =
            {
                new int[,] {{ 1, 1, 1, 0, 0, 0, 1, 0 },{ 1, 0, 0, 0, 0, 0, 0, 1 },{ 0, 1, 0, 0, 0, 1, 1, 1 } },
                new int[,] {{0,1,0,0,0,0,0,0 },{1,1,0,0,0,0,0,0 },{1,0,1,0,0,1,0,1 },{0,0,0,0,0,0,1,1 },{0,0,0,0,0,0,1,0 }}
            };

            int[,] res = ConwayLife.GetGeneration(gliders[0], 1);
            CollectionAssert.AreEqual(gliders[1], res, "Output doesn't match expected");
        }
    }
}