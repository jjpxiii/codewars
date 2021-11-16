using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Katas
{
    public class Program
    {
        public record NamedPoint(string Name, int X, int Y);

        public static void Main()
        {
            //var p1 = new NamedPoint("A", 0, 0);
            //Console.WriteLine($"{nameof(p1)}: {p1}");  // output: p1: NamedPoint { Name = A, X = 0, Y = 0 }

            //var p2 = p1 with { Name = "B", X = 5 };
            //Console.WriteLine($"{nameof(p2)}: {p2}");  // output: p2: NamedPoint { Name = B, X = 5, Y = 0 }

            //var p3 = p1 with
            //{
            //    Name = "C",
            //    Y = 4
            //};
            //Console.WriteLine($"{nameof(p3)}: {p3}");  // output: p3: NamedPoint { Name = C, X = 0, Y = 4 }

            //Console.WriteLine($"{nameof(p1)}: {p1}");  // output: p1: NamedPoint { Name = A, X = 0, Y = 0 }
            Console.WriteLine(Tribonacci.Compute(new double[] { 0, 1, 1 }, 1000));
        }
    }
}
