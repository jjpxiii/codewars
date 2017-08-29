ExUnit.start(exclude: [:skip])
defmodule Codewars do

end

defmodule Pipeline do
  def fix_pipe(pipes) do
    fix_pipe(Enum.sort(pipes), [])
  end

  defp fix_pipe([], final) do
    final
  end

  defp fix_pipe([head | tail], final) do
      if !Enum.empty?(tail) and hd(tail) != head + 1 do
            fix_pipe([head+1] ++ tail, final ++ [head])
        else 
            fix_pipe(tail, final ++ [head])
      end
  end

    def fix_pipe2(pipes) do
    {min, max} = Enum.min_max(pipes)
    min..max |> Enum.to_list
  end
end

defmodule Piapprox do

  # to get 10 decimals you can use:
  # num ---> (trunc num * :math.pow(10, 10)) / :math.pow(10, 10)
  
  def iter_pi(epsilon) do
    # your code
  end
  
end

defmodule SplitTheBill do
  def split_the_bill(group) do
    list = group |> Map.values 
    avg = Enum.sum(list) / Enum.count(list)   
    for {k, v} <- group, into: %{}, do: {k, Float.round(v-avg, 2)} 
    end
end
ExUnit.start()
defmodule SplitTheBillTest do

  use ExUnit.Case

  def testing(numtest, group, ans) do 
    IO.puts("Test #{numtest}")
    assert SplitTheBill.split_the_bill(group) == ans
  end
  
  @tag :skip
  test "split_the_bill" do    
    testing(1, %{:A => 20, :B => 15, :C => 10}, %{:A => 5.00, :B => 0.00, :C => -5.00 })
    testing(2, %{:A => 40, :B => 25, :X => 10}, %{:A => 15.00, :B => 0.00, :X => -15.00})
    testing(3, %{:A => 40, :B => 25, :C => 10, :D => 153, :E => 58}, %{:A => -17.20, :B => -32.20, :C => -47.20, :D => 95.80, :E => 0.80})
    testing(4, %{:A => 475, :B => 384, :C => 223, :D => 111, :E => 19}, %{:A => 232.6, :B => 141.6, :C => -19.4, :D => -131.4, :E => -223.4})
    testing(5, %{:A => 20348, :B => 493045, :C => 2948, :D => 139847, :E => 48937534, :F => 1938724, :G => 4, :H => 2084}, %{:A => -6421468.75, :B => -5948771.75, :C => -6438868.75, :D => -6301969.75, :E => 42495717.25, :F => -4503092.75, :G => -6441812.75, :H => -6439732.75})
  end
end

defmodule Pilecubes do
  def find_nb(m) do
  IO.inspect "!! #{m}"
    find_nb(m, 1, 0)
  end
  
  defp find_nb(m, start, temp) do
      cond do
        temp > m -> -1
        temp == m -> 
            IO.puts start
            start - 1
        true -> 
          start = start + 1
          temp = temp + (start*start*start)
          find_nb(m, start, temp)
      end
  end 

    def reverse(m, start, temp) do
      cond do
        start == m -> 
            IO.puts start
            temp
        true -> 
          start = start + 1
          temp = temp + (start*start*start)
          find_nb(m, start, temp)
      end
  end 
end

defmodule Pilecubes2 do

  defp do_find_nb(0, n), do: n - 1
  defp do_find_nb(nb, _) when nb < 0, do: -1
  defp do_find_nb(nb, n), do: do_find_nb(nb - (n*n*n), n+1)

  def find_nb(m) do
    do_find_nb(m, 1)
  end
  
end

defmodule PilecubesTest do
  
  use ExUnit.Case

  def testFindNb(numtest, m, ans) do 
    IO.puts("Test #{numtest}")
    assert  Pilecubes.find_nb(m) == ans
  end
  
  @tag :skip
  test "find_nb" do 
    testFindNb  1, 4183059834009, 2022
    testFindNb  2, 24723578342962, -1
    testFindNb  3, 135440716410000, 4824
    testFindNb  4, 40539911473216, 3568
  end
end

defmodule Buycar do

  def nb_months(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) do
    # your code
  end
end


defmodule BuycarTest do
  
  use ExUnit.Case

  defp testing(_, startPriceOld, startPriceNew, savingperMonth, percentLossByMonth, ans) do 
    assert Buycar.nb_months(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) == ans
  end
  
  test "nb_months" do 
    testing(1, 2000, 8000, 1000, 1.5, {6, 766})
    testing(2, 12000, 8000, 1000, 1.5, {0, 4000})
    testing(3, 8000, 12000, 500, 1, {8, 597})
    testing(4, 18000, 32000, 1500, 1.25, {8, 332})
  end
end
