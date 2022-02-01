public class Day2
{
    public static int Main()
    {
        var input = @"";
        var inputSplitted = input.Split("\r\n").Select(o => Convert.ToInt32(o)).ToList();
        var count = 0;
        for (int i = 1; i < inputSplitted.Count; i++)
        {
            if (inputSplitted[i] - inputSplitted[i - 1] > 0)
            {
                count++;
            }
        }
        return count;
    }
}
