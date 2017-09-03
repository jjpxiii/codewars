using System.Linq;
using System;

public class MaxRotate {
    public static long MaxRot(long number)
    {
        var s = number.ToString();
        var max = 0;
        for (int i = 0; i < s.Length; i++)
        {
            Console.WriteLine(s);
            s = s.Substring(0,i) + s.Substring(i+2) + s.Substring(i,1);
            if (int.Parse(s) > max)
            max = int.Parse(s);
        }
        return max;
    }
}