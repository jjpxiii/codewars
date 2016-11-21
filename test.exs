IO.puts "Hello world from Elixir"

IO.puts Enum.join(["hello", "world"])
defmodule Solution do
  def remove(s) do
    Regex.replace(~r/[!]*(?![!]*$)/, s, "")
  end
end

IO.puts Solution.remove("!Hi !!")

<<<<<<< HEAD
defmodule Aretheythesame do

  	@spec comp([number], [number]) :: boolean
    def comp(a, b) do
      # c = Enum.map(a, fn(x) -> x * x end)
    Enum.sort(b) == Enum.sort(Enum.map(a, fn(x) -> x * x end)) 
    a |> Enum.map(fn(x) -> x * x end) |> Enum.sort()
    end
end 

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
    Aretheythesame.comp(a, b)
    a=[2,2,3]
    b=[4,9,9]
    Aretheythesame.comp(a, b)

defmodule PersistentBugger do
  def persistence(n) do
    persistence(n, 0)  
  end

  def persistence(n, total) when n > 9 do 
    total = total+1
      persistence(Enum.reduce(n |> Integer.digits, 1, fn(x, acc) -> x * acc end), total)
  end

  def persistence(n, total) do 
    IO.puts n
    total
  end
end

defmodule Revrot do
  def revrot(str, sz) do
    if str == "" or sz <= 0 or String.length(str) < sz do
      ""
    else
      chunk = str |> String.slice(0,sz) 
      t = chunk |> String.to_integer |> Integer.digits |> Enum.reduce(0, fn(x, acc) -> (:math.pow(x,3) |> round) + acc end)
      temp = case (rem t,2) do
        0 -> chunk |> String.reverse
        _ -> String.slice(chunk, 1, sz-1) <> String.first(chunk)
      end
      temp <> revrot(String.slice(str,sz..-1), sz)
    end
  end 
end

ExUnit.start

defmodule RevrotTest do
  
  use ExUnit.Case
  
  def testing(numtest, s, sz, ans) do 
    IO.puts("Test #{numtest}")
    assert Revrot.revrot(s, sz) == ans
  end
  
  test "revrot" do     
    # testing(1, "1234", 0, "")
    # testing(2, "", 0, "")
    # testing(3, "1234", 5, "")
    # s = "733049910872815764"
    # testing(4, s, 5, "330479108928157")
    s= "25209716599494641707802888663268147911385353847620835379032707252906"
    testing(5, s, 9, "520971652949464179780288860974186236138535381353802674903270727")
  end
  
end
=======
defmodule Pipeline do
  def fix_pipe([head | tail]) do
  if (List.first tail) != nil and (head + 1) != hd tail do
    head = head ++ [(hd head) + 1]
    IO.inspect head
    [ tl(head) | fix_pipe(tail)]
  else
    [(head+1)   | fix_pipe(tail)]
  end
  end

  def fix_pipe([]) do
    []
  end
end

IO.puts Pipeline.fix_pipe([2, 4, 6])

defmodule Math do
  def double_each([head | tail]) do
    [head * 2 | double_each(tail)]
  end

  def double_each([]) do
    []
  end
end

IO.puts Math.double_each([1, 2, 3])
>>>>>>> 0324a7047d320e2148f10c33042a9137dd080c66
