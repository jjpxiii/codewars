IO.puts "Hello world from Elixir"

IO.puts Enum.join(["hello", "world"])

defmodule Solution do
  def remove(s) do
    Regex.replace(~r/[!]*(?![!]*$)/, s, "")
  end
end

IO.puts Solution.remove("!Hi !!")

defmodule Pipeline do
  def fix_pipe([head | tail]) do
  if (List.first tail) != nil and (head + 1) != hd tail do
    # head = head ++ [(hd head) + 1]
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