# def number(bus_stops):
#     result = 0
#     for x in bus_stops:
#         result += x[0] - x[1]
#     return result

# meilleure


def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])


print(number([[10, 0], [3, 5], [5, 8]]))
