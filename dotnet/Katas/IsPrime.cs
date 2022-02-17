using System;

namespace Katas
{

    public static class Is
    {
        public static bool Prime(int n)
        {
            if (n <= 2 || n % 2 == 0) return n == 2;
            for (int i = 3; i <= Math.Sqrt(n); i += 2) if (n % i == 0) return false;
            return true;
        }
    }
}
