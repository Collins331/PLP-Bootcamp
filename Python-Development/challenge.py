def large_power(base, exponent):
    result = pow(base, exponent)
    if result > 5000:
        return True
    else:
        return False
    
def divisible_by_ten(num):
    if num % 10 == 0:
        return True
    else:
        return False
    
if __name__ == "__main__":
    base = int(input("Enter base number: "))
    exp = int(input("Enter exponent: "))
    print(large_power(base, exp))
    print("--------------------------------------------------")
    print("Challenge 2:")
    num =  int(input("Enter a number: "))
    print(divisible_by_ten(num))