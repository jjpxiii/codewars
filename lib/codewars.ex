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