def calculate_discount(price, discount_percent):
    """
    Calculates the final price after applying
    discount
    """
    if discount_percent >= 20:
        return price * (1 - discount_percent/100)
    return price

if __name__ == "__main__":
    original_price = int(input("Input original price: "))
    discount = int(input("Enter discount percent (exclude '%'): "))
    print(calculate_discount(original_price, discount))