using Newtonsoft.Json;
using System;
using System.Linq;

namespace Katas
{
    class Dinglemouse
    {
        public static int[] TheLift(int[][] queues, int capacity)
        {
            Console.WriteLine(JsonConvert.SerializeObject(queues));
            Console.WriteLine(capacity);
            var res = new int[] { 0 };
            int peopleInTheLift = 0;
            int[] liftQueues = new int[queues.Length];
            var isGoingUp = true;
            // lift loop
            while (queues.ToList().Any(l => l.Length > 0) || peopleInTheLift > 0)
            {
                for (int level = isGoingUp ? 0 : queues.Length - 1; (isGoingUp ? level < queues.Length : level >= 0); level = (isGoingUp ? level + 1 : level - 1))
                {
                    var hasStopped = false;
                    // empty lift
                    if (peopleInTheLift > 0 && liftQueues[level] > 0)
                    {
                        hasStopped = true;
                        peopleInTheLift -= liftQueues[level];
                        liftQueues[level] = 0;
                    }

                    // fill lift
                    if (queues[level].Any(p => isGoingUp ? p > level : p < level))
                    {
                        hasStopped = true;
                        while (peopleInTheLift < capacity && queues[level].Any(p => isGoingUp ? p > level : p < level))
                        {
                            peopleInTheLift++;
                            var nearestLevelToStop = queues[level].First(p => isGoingUp ? p > level : p < level);
                            liftQueues[nearestLevelToStop]++;
                            var foo = queues[level].ToList();
                            foo.Remove(nearestLevelToStop);
                            queues[level] = foo.ToArray();
                        }
                    }

                    if (hasStopped && res.Last() != level)
                    {
                        Array.Resize(ref res, res.Length + 1);
                        res[res.Length - 1] = level;
                    }
                }
                isGoingUp = !isGoingUp;
            }

            if (res.Last() != 0)
            {
                Array.Resize(ref res, res.Length + 1);
                res[res.Length - 1] = 0;
            }
            return res;
        }
    }
}
