IO.puts "Hello world from Elixir"

IO.puts Enum.join(["hello", "world"])

defmodule Solution do
  def remove(s) do
    Regex.replace(~r/[!]*(?![!]*$)/, s, "")
  end
end

IO.puts Solution.remove("!Hi !!")