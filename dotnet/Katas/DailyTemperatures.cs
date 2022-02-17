namespace Katas
{
    public static class DailyTemp
    {
        public static int[] DailyTemperatures(int[] temperatures)
        {
            int[] result = new int[temperatures.Length];
            for (int i = 0; i < temperatures.Length - 1; i++)
            {

                for (int j = i; j < temperatures.Length; j++)
                {
                    if (temperatures[j] > temperatures[i])
                    {
                        result[i] = j - i;
                        break;
                    }
                }
            }
            result[temperatures.Length - 1] = 0;
            return result;
        }
    }
}
