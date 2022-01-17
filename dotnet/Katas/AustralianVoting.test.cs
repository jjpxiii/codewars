using NUnit.Framework;
using System;
using System.IO;

namespace Katas
{

    [TestFixture]
    public class AustralianVotingTest
    {
        [Test]
        public void AustralianVotingSimple()
        {
            using (StringWriter sw = new StringWriter())
            {
                Console.SetOut(sw);

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
                AustralianVoting.DeclareAWinner(sampleInput);
                Assert.AreEqual(sw.ToString(), "John Doe\r\n\r\n");
            }
        }

        [Test]
        public void AustralianVotingFirstSample()
        {
            using (StringWriter sw = new StringWriter())
            {
                Console.SetOut(sw);

                var sampleInput = @"100

4
A
B
C
D
1 2 4 3
4 1 2 3
2 4 3 1
3 1 4 2
3 2 4 1
4 1 2 3
2 4 3 1

5
A
B
C
D
E
5 1 2 4 3
1 3 4 2 5
3 1 5 2 4
3 1 4 5 2
5 1 3 4 2

2
A
B
2 1
2 1
2 1
2 1
2 1

2
A
B
1 2
1 2
1 2
1 2
2 1
1 2
1 2
1 2

3
A
B
C
2 1 3
2 1 3
1 2 3
2 3 1
1 2 3

2
A
B
2 1

3
A
B
C
3 2 1
2 1 3
3 2 1
1 2 3
2 3 1
2 3 1
2 1 3

4
A
B
C
D
4 1 2 3
3 2 1 4
2 3 4 1

1
A
1
1
1
1
1
1
1
1
1

3
A
B
C
1 2 3
2 3 1
1 3 2

5
A
B
C
D
E
4 2 1 5 3
3 5 1 4 2
2 3 1 5 4
5 2 1 4 3
5 1 4 2 3
2 4 5 3 1
1 5 3 4 2
4 5 1 2 3
2 3 1 4 5

2
A
B
1 2
1 2

4
A
B
C
D
4 1 3 2
3 1 4 2
4 2 1 3
1 4 3 2
2 3 4 1
3 2 4 1
1 2 4 3
1 4 2 3
3 1 4 2

2
A
B
2 1
2 1
1 2
1 2
2 1
1 2
2 1
2 1
1 2

4
A
B
C
D
2 4 1 3
3 2 4 1
1 2 4 3
2 3 1 4

1
A
1
1
1
1
1
1
1

3
A
B
C
1 3 2
2 1 3
2 3 1

3
A
B
C
3 1 2
1 3 2
1 3 2
2 3 1
2 1 3

5
A
B
C
D
E
1 2 5 3 4
4 2 5 3 1
5 4 1 2 3
3 2 1 5 4
4 5 2 3 1
3 1 4 5 2
3 1 2 5 4

3
A
B
C
3 2 1
2 1 3
2 1 3
3 2 1
1 3 2

3
A
B
C
2 3 1
3 1 2
2 3 1
2 1 3
1 3 2
3 1 2
3 2 1
3 2 1

3
A
B
C
1 2 3
3 2 1
3 1 2
3 2 1
3 2 1
1 2 3
3 2 1
1 3 2
2 1 3

1
A
1
1
1

3
A
B
C
2 3 1

4
A
B
C
D
2 4 3 1
2 3 1 4
1 4 2 3
3 4 2 1
4 2 3 1
3 4 2 1
3 2 1 4
3 1 2 4

2
A
B
1 2
2 1
1 2
1 2

4
A
B
C
D
4 3 2 1
3 2 4 1
4 3 1 2
1 2 4 3
2 1 4 3
2 3 4 1
1 2 3 4

4
A
B
C
D
2 3 1 4
4 1 3 2
2 3 4 1
3 2 1 4
3 2 1 4
3 2 4 1
4 3 1 2
4 1 3 2

2
A
B
1 2
2 1
2 1
1 2

4
A
B
C
D
1 2 3 4
1 3 2 4
3 1 4 2
4 3 1 2
4 3 2 1
4 3 2 1
4 1 3 2
3 4 2 1
3 2 4 1

5
A
B
C
D
E
2 5 3 4 1
4 2 5 3 1
4 5 1 3 2
4 5 3 1 2
3 2 4 5 1
2 1 4 3 5
1 3 2 4 5

3
A
B
C
3 2 1
3 1 2
1 2 3
1 2 3
2 1 3
2 1 3
1 2 3

5
A
B
C
D
E
4 1 2 3 5
2 4 1 5 3
3 5 2 1 4
3 2 5 4 1
2 3 1 5 4
3 5 1 4 2
1 5 4 3 2
2 1 3 4 5
3 5 1 4 2
2 3 1 5 4

1
A
1
1
1
1
1
1
1
1
1

5
A
B
C
D
E
1 3 5 4 2

5
A
B
C
D
E
4 1 5 3 2
5 1 4 3 2
1 2 4 3 5

2
A
B
1 2
1 2
2 1
2 1
1 2
2 1
1 2
1 2
2 1

1
A
1
1
1
1
1
1
1

2
A
B
2 1
1 2
1 2
1 2
1 2
2 1
2 1

2
A
B
2 1
1 2
1 2
2 1
1 2
2 1
2 1
2 1
1 2
2 1

3
A
B
C
3 1 2
2 3 1
3 2 1
2 1 3

3
A
B
C
1 3 2
1 2 3
1 3 2
1 2 3

4
A
B
C
D
3 1 4 2
1 3 4 2
4 2 3 1
2 1 3 4
3 2 1 4
1 4 2 3
1 4 2 3

4
A
B
C
D
2 3 1 4
2 3 1 4
1 4 3 2
4 1 2 3
2 1 4 3

2
A
B
1 2
1 2
1 2
1 2
2 1
2 1
1 2
1 2
2 1
2 1

2
A
B
2 1
1 2
2 1
1 2

3
A
B
C
1 2 3
3 1 2
3 2 1
1 2 3

3
A
B
C
1 2 3
3 2 1
1 3 2
2 3 1
2 1 3
2 3 1
1 2 3
1 2 3

4
A
B
C
D
1 2 3 4
4 3 2 1

2
A
B
1 2
2 1
2 1
2 1

3
A
B
C
1 3 2
3 1 2
1 2 3
1 2 3

3
A
B
C
1 2 3
2 1 3
1 3 2
1 2 3
2 3 1
3 1 2
3 1 2
3 1 2
1 3 2

1
A
1
1
1
1
1
1
1
1
1

4
A
B
C
D
4 2 3 1

5
A
B
C
D
E
5 4 1 3 2
5 2 4 3 1
2 1 3 5 4
3 2 1 4 5
1 5 2 3 4
4 3 1 2 5
2 5 3 4 1

3
A
B
C
2 3 1
3 1 2
1 3 2
2 1 3
2 3 1
3 2 1
3 1 2
1 2 3
1 2 3

5
A
B
C
D
E
5 4 1 3 2
3 2 5 1 4
3 2 1 4 5

1
A
1

3
A
B
C
3 2 1
3 1 2
2 1 3
3 1 2
3 2 1
3 1 2
2 1 3

2
A
B
1 2
1 2
2 1
2 1
2 1
1 2
2 1
1 2
2 1

3
A
B
C
1 3 2
2 1 3
1 2 3
3 1 2
1 3 2
1 2 3
2 1 3
1 3 2
3 1 2
3 2 1

3
A
B
C
2 1 3
3 1 2
2 3 1
1 2 3
2 3 1
3 2 1
3 1 2
3 1 2
2 1 3

3
A
B
C
2 3 1

5
A
B
C
D
E
2 1 3 5 4
5 4 1 3 2
2 1 5 4 3
5 2 1 4 3
4 5 1 3 2

3
A
B
C
3 2 1
1 2 3
2 1 3

2
A
B
1 2
1 2
1 2

5
A
B
C
D
E
1 3 2 4 5
3 2 1 5 4
1 3 2 4 5
4 5 1 2 3
3 1 5 2 4
5 2 4 1 3
3 5 4 2 1
1 2 4 3 5
5 3 2 4 1

4
A
B
C
D
1 2 4 3
1 2 4 3
2 3 1 4
4 1 2 3
3 4 2 1

4
A
B
C
D
3 1 4 2
3 4 2 1
2 4 1 3
3 4 1 2

3
A
B
C
3 1 2
3 1 2
3 2 1
3 2 1
1 3 2
2 3 1
3 2 1
3 1 2

5
A
B
C
D
E
4 1 3 2 5
1 4 3 5 2
5 4 2 1 3
5 1 4 2 3
2 3 1 5 4

3
A
B
C
1 3 2
3 1 2
1 2 3
2 3 1
1 3 2
3 2 1
2 1 3

5
A
B
C
D
E
3 5 4 2 1
5 3 2 1 4
5 1 4 3 2
1 3 2 4 5

1
A
1

1
A
1
1
1
1
1
1
1
1
1

4
A
B
C
D
1 4 3 2
4 1 2 3

2
A
B
2 1
1 2
1 2
2 1
1 2
1 2
2 1
1 2
2 1
1 2

3
A
B
C
3 2 1
3 1 2
1 2 3
1 3 2
2 3 1
3 1 2
1 2 3
3 2 1
1 3 2

4
A
B
C
D
3 2 1 4
4 2 1 3
1 2 4 3
3 2 4 1
4 3 2 1

2
A
B
2 1
1 2
1 2
1 2
2 1
1 2

5
A
B
C
D
E
3 1 5 2 4
5 4 3 1 2
4 3 2 5 1
1 3 2 5 4

5
A
B
C
D
E
2 5 1 3 4

1
A
1
1
1
1
1
1
1

5
A
B
C
D
E
4 3 1 5 2
3 4 5 2 1
3 2 1 4 5
2 5 4 1 3
2 5 1 4 3
2 1 5 3 4
3 1 5 4 2
3 2 4 1 5

2
A
B
2 1
2 1
1 2
1 2
2 1
2 1
2 1
2 1
2 1
2 1

4
A
B
C
D
3 1 4 2
1 4 2 3

1
A
1
1
1
1
1
1

2
A
B
1 2
1 2
2 1
1 2
1 2
2 1
1 2

1
A
1
1
1
1
1

2
A
B
1 2
1 2
1 2
2 1
2 1
2 1
2 1
2 1
1 2
1 2

1
A
1
1
1
1
1
1
1
1
1

5
A
B
C
D
E
4 2 1 5 3
4 1 3 2 5
1 5 2 3 4

1
A
1
1
1
1
1
1

4
A
B
C
D
2 1 3 4
1 2 4 3
3 1 4 2
4 1 2 3
4 3 1 2
2 1 3 4
1 3 2 4
1 4 3 2
4 1 2 3
3 4 2 1

1
A
1
1
1
1
1
1

2
A
B
2 1
1 2
1 2
2 1
1 2
1 2
2 1
1 2
1 2
2 1

5
A
B
C
D
E
4 1 2 3 5
4 5 1 2 3
3 4 2 1 5
5 1 4 3 2

2
A
B
2 1
2 1
2 1
2 1
1 2
2 1
1 2
1 2
2 1
1 2

1
A
1
1

1
A
1
1
";
                AustralianVoting.DeclareAWinner(sampleInput);
                Assert.AreEqual(sw.ToString(), "B\r\n\r\nC\r\n\r\nB\r\n\r\nA\r\n\r\nB\r\n\r\nB\r\n\r\nB\r\n\r\nB\r\nC\r\nD\r\n\r\nA\r\n\r\nA\r\n\r\nE\r\n\r\nA\r\n\r\nA\r\n\r\nB\r\n\r\nB\r\n\r\nA\r\n\r\nB\r\n\r\nA\r\n\r\nC\r\n\r\nC\r\n\r\nC\r\n\r\nC\r\n\r\nA\r\n\r\nB\r\n\r\nB\r\nC\r\n\r\nA\r\n\r\nB\r\n\r\nC\r\n\r\nA\r\nB\r\n\r\nC\r\n\r\nB\r\n\r\nA\r\n\r\nB\r\nC\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\nD\r\nE\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\n\r\nB\r\n\r\nB\r\nC\r\n\r\nA\r\n\r\nA\r\n\r\nB\r\n\r\nA\r\n\r\nA\r\nB\r\n\r\nA\r\nC\r\n\r\nA\r\nB\r\n\r\nA\r\nD\r\n\r\nB\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\n\r\nD\r\n\r\nB\r\n\r\nA\r\nB\r\nC\r\n\r\nC\r\n\r\nA\r\n\r\nC\r\n\r\nB\r\n\r\nA\r\n\r\nB\r\n\r\nB\r\n\r\nE\r\n\r\nA\r\nB\r\nC\r\n\r\nA\r\n\r\nA\r\nC\r\nE\r\n\r\nA\r\n\r\nC\r\n\r\nC\r\n\r\nE\r\n\r\nA\r\n\r\nE\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\nD\r\n\r\nA\r\n\r\nC\r\n\r\nD\r\n\r\nA\r\n\r\nA\r\nC\r\nD\r\nE\r\n\r\nB\r\n\r\nA\r\n\r\nC\r\n\r\nB\r\n\r\nA\r\nC\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\nB\r\n\r\nA\r\n\r\nD\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\n\r\nA\r\n\r\nD\r\n\r\nB\r\n\r\nA\r\n\r\nA\r\n\r\n\r\n");
            }
        }
    }
}