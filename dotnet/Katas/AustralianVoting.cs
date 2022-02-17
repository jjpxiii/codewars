using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Katas
{
    public static class AustralianVoting
    {
        public static void DeclareAWinner(string input)
        {
            var args = input.Split("\r\n", StringSplitOptions.None);
            var cases = int.Parse(args[0]);
            var sb = new StringBuilder();
            args = args.Skip(2).ToArray();
            for (int nb = 0; nb < cases; nb++)
            {
                var candidates = new string[int.Parse(args[0])];
                for (int i = 0; i < candidates.Length; i++)
                {
                    candidates[i] = args[i + 1];
                }

                var ballots = CountBallots(args.Skip(candidates.Length + 1).TakeWhile(s => !string.IsNullOrEmpty(s)).ToArray());
                var winners = ProcessBallots(ballots);
                foreach (var winner in winners)
                {
                    sb.AppendLine(candidates[winner - 1]);
                }
                if (nb < cases)
                {
                    sb.AppendLine();
                }
                args = args.Skip(candidates.Length).SkipWhile(s => !string.IsNullOrEmpty(s)).Skip(1).ToArray();
            }
            Console.WriteLine(sb.ToString());
        }

        private static int[][] CountBallots(string[] args)
        {
            var ballots = new int[args.Length][];
            for (int i = 0; i < args.Length; i++)
            {
                ballots[i] = args[i].Split(' ').Select(o => Int32.Parse(o)).ToArray();
            }
            return ballots;
        }

        private static int[] ProcessBallots(int[][] ballots)
        {
            var candidates = Enumerable.Range(1, ballots[0].Length);
            while (true)
            {
                var votes = new Dictionary<int, int>();
                for (int i = 0; i < ballots.Length; i++)
                {
                    if (votes.ContainsKey(ballots[i][0]))
                    {
                        votes[ballots[i][0]] += 1;
                    }
                    else
                    {
                        votes[ballots[i][0]] = 1;
                    }
                }
                if (votes.Values.Max() >= ballots.Length / 2 + 1)
                {
                    return votes.Where(o => o.Value == votes.Values.Max()).Select(s => s.Key).ToArray();
                }
                if (votes.Values.Distinct().Count() == 1)
                {
                    return votes.Select(e => e.Key).OrderBy(x => x).ToArray();
                }

                var eliminated = votes.Where(o => o.Value == votes.Values.Min() || o.Value == 0).Select(s => s);
                candidates = candidates.Except(eliminated.Select(o => o.Key));
                if (candidates.Count() == 1)
                {
                    return candidates.Select(e => e).ToArray();
                }
                for (int i = 0; i < ballots.Length; i++)
                {
                    if (eliminated.Any(e => e.Key == ballots[i][0]))
                    {
                        ballots[i] = ballots[i].Skip(1).ToArray();
                    }
                }
            }
        }
    }
}

