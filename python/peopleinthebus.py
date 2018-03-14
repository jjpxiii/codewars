# def number(bus_stops):
#     result = 0
#     for x in bus_stops:
#         result += x[0] - x[1]
#     return result

# meilleure


def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])


print(number([[10, 0], [3, 5], [5, 8]]))

def is_square(n):
    return n > 0 and n**(1/2) % 1 == 0    

def number_to_string(n):
    return str(n)

# def validate_pin(pin):
#     result = len(pin) == 4 or len(pin) == 6
#     try:
#         toto = int(pin)
#         return result and toto >= 0
#     except ValueError:
#         return False

def validate_pin(pin):
    return len(pin) in (4, 6) and pin.isdigit()