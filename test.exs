IO.puts "Hello world from Elixir"

IO.puts Enum.join(["hello", "world"])

defmodule Solution do
  def remove(s) do
  end
end

IO.puts Solution.remove("!Hi !!")

IO.puts Regex.match?(~s/[!]*(?![!]*$)/, "!Hi !!") 