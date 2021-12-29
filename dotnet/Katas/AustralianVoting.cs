using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Katas
{
    public static class AustralianVoting
    {
        public static string CountVotes(string input)
        {
            var args = input.Split("\r\n", StringSplitOptions.None);
            var cases = int.Parse(args[0]);
            var candidates = new List<string>();
            for (int nb = 0; nb < cases; nb++)
            {
                for (int i = 3; i < 3 + int.Parse(args[2]); i++)
                {
                    candidates.Add(args[i]);
                }

                var ballots = new Dictionary<string, int>();
                for (int i = 3 + int.Parse(args[2]); i < args.Length; i++)
                {
                    var vote = args[i].Split(' ')[0];
                    if (ballots.ContainsKey(vote))
                    {
                        ballots[vote] += ballots[vote];
                    }
                    else
                    {
                        ballots[vote] = 1;
                    }
                }
            }
            return "";
        }
    }
}
