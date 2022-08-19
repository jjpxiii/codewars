// See https://aka.ms/new-console-template for more information
var lines = File.ReadAllLines("assets\\data.txt");
var max = -1;
var maxAdress = "";

foreach (var line in lines)
{
    var address = line.Substring(line.IndexOf(" ") + 1);
    var conso = Convert.ToInt32(line.Substring(0, line.IndexOf(" ") + 1));

    if (conso > max)
    {
        max = conso;
        maxAdress = address;
    }
}
Console.WriteLine(maxAdress);

var lines2 = File.ReadAllLines("assets\\data2.txt");
var res = 0;
for (int i = 3; i < lines2.Length - 1; i++)
{
    var n = Convert.ToInt32(lines2[i]);
    if (lines2[i].Length == 6 && n % 2 == 0 && n % 7 == 0 &&
        lines2[i + 1].Contains('4') &&
        !lines2[i - 1].Contains('3') &&
        !lines2[i - 2].Contains('3') &&
        !lines2[i - 3].Contains('3'))
    {
        res = n;
        break;
    }
}

Console.WriteLine(res);

var lines3 = File.ReadAllLines("assets\\data3.txt").Select(o => Convert.ToInt32(o)).ToList();
var dict = new Dictionary<Tuple<int, int>, long>();

for (int i = 0; i < lines3.Count(); i++)
{
    var remainder = 987654321 - lines3[i];
    for (int j = 0; j < lines3.Count(); j++)
    {
        if (lines3.Contains(remainder - lines3[j]))
        {
            Console.WriteLine(lines3[i]);
            Console.WriteLine(lines3[j]);
            Console.WriteLine(remainder - lines3[j]);

            break;
        }
    }
    Console.WriteLine(i);
}

//CancellationTokenSource cts = new CancellationTokenSource();

//// Use ParallelOptions instance to store the CancellationToken
//ParallelOptions po = new ParallelOptions();
//po.CancellationToken = cts.Token;
//po.MaxDegreeOfParallelism = System.Environment.ProcessorCount;
//public volatile int remainder;

//Parallel.For(0, lines3.Count, po, i =>
//{
//    remainder = 987654321 - lines3[i];
//    Parallel.For(0, lines3.Count, po, j =>
//    {
//        remainder -= lines3[j];
//        if (lines3.Contains(remainder))
//        {
//            Console.WriteLine(lines3[i]);
//            Console.WriteLine(lines3[j]);
//            Console.WriteLine(remainder);

//            cts.Cancel();
//        }
//    });

//    Console.WriteLine(i);
//});

Console.WriteLine(res);

