using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace Katas
{
    public class ConwayLife
    {
        public static int[,] GetGeneration(int[,] cells, int generation)
        {
            Console.WriteLine(JsonConvert.SerializeObject(cells));

            for (int gen = 1; gen <= generation; gen++)
            {
                cells = AddDeadCells(cells);
                cells = GetNewCells(cells);
                cells = CropCells(cells);
            }

            return cells;
        }

        private static int[,] AddDeadCells(int[,] cells)
        {
            int[,] withDeadCells = new int[cells.GetLength(0) + 2, cells.GetLength(1) + 2];

            for (int i = 0; i < cells.GetLength(0); i++)
            {
                for (int j = 0; j < cells.GetLength(1); j++)
                {
                    withDeadCells[i + 1, j + 1] = cells[i, j];
                }

            }
            return withDeadCells;
        }

        private static int[,] CropCells(int[,] cells)
        {
            List<int> colToRemove = new List<int>();
            List<int> lineToRemove = new List<int>();

            int lineIndex = 0;
            while (true)
            {
                int total = 0;
                for (int j = 0; j < cells.GetLength(1); j++)
                {
                    total += cells[lineIndex, j];
                }
                if (total == 0)
                {
                    lineToRemove.Add(lineIndex);
                }
                else break;
                lineIndex += 1;
            }

            lineIndex = cells.GetLength(0) - 1;
            while (true)
            {
                int total = 0;
                for (int j = 0; j < cells.GetLength(1); j++)
                {
                    total += cells[lineIndex, j];
                }
                if (total == 0)
                {
                    lineToRemove.Add(lineIndex);
                }
                else break;
                lineIndex -= 1;
            }

            int colIndex = 0;
            while (true)
            {
                int total = 0;
                for (int j = 0; j < cells.GetLength(0); j++)
                {
                    total += cells[j, colIndex];
                }
                if (total == 0)
                {
                    colToRemove.Add(colIndex);
                }
                else break;

                colIndex += 1;
            }

            colIndex = cells.GetLength(1) - 1;
            while (true)
            {
                int total = 0;
                for (int j = 0; j < cells.GetLength(0); j++)
                {
                    total += cells[j, colIndex];
                }
                if (total == 0)
                {
                    colToRemove.Add(colIndex);
                }
                else break;

                colIndex -= 1;
            }

            int[,] croppedCells = new int[cells.GetLength(0) - lineToRemove.Count(), cells.GetLength(1) - colToRemove.Count()];

            int linesRemoved = 0;
            int colsRemoved;
            for (int i = 0; i < cells.GetLength(0); i++)
            {
                colsRemoved = 0;
                for (int j = 0; j < cells.GetLength(1); j++)
                {
                    if (lineToRemove.All(o => o != i) && colToRemove.All(o => o != j))
                    {
                        croppedCells[i - linesRemoved, j - colsRemoved] = cells[i, j];
                    }
                    if (colToRemove.Contains(j))
                        colsRemoved++;

                }
                if (lineToRemove.Contains(i))
                    linesRemoved++;

            }
            return croppedCells;
        }

        private static int[,] GetNewCells(int[,] cells)
        {
            var newCells = new int[cells.GetLength(0), cells.GetLength(1)];
            for (int i = 0; i < cells.GetLength(0); i++)
            {
                bool isFirstLine = i == 0;
                bool isLastLine = i == cells.GetLength(0) - 1;
                for (int j = 0; j < cells.GetLength(1); j++)
                {
                    bool isFirstCol = j == 0;
                    bool isLastCol = j == cells.GetLength(1) - 1;
                    int aliveNeighbors = 0;
                    // check same col
                    if (!isLastLine)
                    {
                        if (cells[i + 1, j] == 1) aliveNeighbors++;
                    }
                    if (!isFirstLine)
                    {
                        if (cells[i - 1, j] == 1) aliveNeighbors++;
                    }

                    // check left col
                    if (!isFirstCol)
                    {
                        if (cells[i, j - 1] == 1) aliveNeighbors++;
                        if (!isLastLine)
                        {
                            if (cells[i + 1, j - 1] == 1) aliveNeighbors++;
                        }
                        if (!isFirstLine)
                        {
                            if (cells[i - 1, j - 1] == 1) aliveNeighbors++;
                        }

                    }

                    // check right col
                    if (!isLastCol)
                    {
                        if (cells[i, j + 1] == 1) aliveNeighbors++;
                        if (!isLastLine)
                        {
                            if (cells[i + 1, j + 1] == 1) aliveNeighbors++;
                        }
                        if (!isFirstLine)
                        {
                            if (cells[i - 1, j + 1] == 1) aliveNeighbors++;
                        }
                    }

                    if (cells[i, j] == 1)
                    {
                        if (aliveNeighbors == 2 || aliveNeighbors == 3)
                        {
                            newCells[i, j] = 1;
                        }
                        else newCells[i, j] = 0;
                    }
                    if (cells[i, j] == 0)
                    {
                        if (aliveNeighbors == 3)
                        {
                            newCells[i, j] = 1;
                        }
                        else newCells[i, j] = 0;
                    }
                }
            }
            return newCells;
        }
    }
}