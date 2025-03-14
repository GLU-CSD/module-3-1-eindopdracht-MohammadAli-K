import random
import string
import time

# Function to generate a natural-sounding username
def generate_complex_username(desired_length=50):
    # Personal Information and Randomized Elements
    first_name_half = 'Mo'  # Half of your first name
    favorite_anime = 'Kudo'  # Your favorite anime protagonist
    favorite_number = '4'  # Your favorite number
    secret = 'web'  # Your secret
    city_short = 'scus'  # Shortened city name for Damascus
    
    # Additional randomization elements (to be mixed in)
    random_elements = ['leveling', 'empress', 'frontend', 'pyramids', 'anime', 'supreme', 'coding']
    
    # Set a seed based on the current time to make the randomization different each time
    random.seed(time.time())
    
    # Create a pool of components for the username
    components = [
        first_name_half,
        favorite_anime,
        favorite_number,
        secret,
        city_short
    ]
    
    # Include a few random elements to add flavor but still keep it natural
    components.extend(random.sample(random_elements, 2))  # Add 2 random elements from the list
    
    # Shuffle components to add variation while keeping it human-readable
    random.shuffle(components)
    
    # Form the username by joining the components
    base_username = ''.join(components)
    
    # Ensure the base username fits the desired length
    base_username = base_username[:desired_length]  # Adjust the length to the desired length
    
    # Generate the final email address with @proton.me
    random_email = f"{base_username}@proton.me"
    
    # Ensure the email length does not exceed the desired length (including @proton.me)
    if len(random_email) > desired_length + 14:
        random_email = random_email[:desired_length + 14]
    
    # Print the length of the generated email
    print("Length of generated email:", len(random_email))
    
    return random_email

# Generate and print a complex random email with a customizable length
if __name__ == "__main__":
    desired_length = int(input("Enter the desired length of the username (excluding '@proton.me'): "))
    
    if desired_length < 1:
        print("Username length must be at least 1 character.")
    else:
        email = generate_complex_username(desired_length)
        print("Generated email:", email)
