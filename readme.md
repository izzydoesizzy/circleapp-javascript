# Circle.so Blurred Text and Name Shortening Script

## Description
This script helps prepare your Circle.so content for screenshots by blurring text content and anonymizing last names. All modifications are temporary and only affect your view for taking screenshots.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)
- [Acknowledgements](#acknowledgements)

## Installation
No installation required. Simply copy the provided JavaScript code and paste it into your browser's console.

## Usage
Follow these steps to use the script on Circle.so:

1. **Open Your Circle.so Community Page**:
   Navigate to the Circle.so community page where you want to apply the modifications.

2. **Open Developer Tools**:
   - Right-click on the page and select "Inspect" or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open the Developer Tools.
   - Navigate to the "Console" tab.

3. **Paste the JavaScript Code**:
   Copy and paste the following JavaScript code into the console:

   ```javascript
   // Function to replace the content of elements with class 'post__inside' with blurred lorem ipsum text
   document.querySelectorAll('.post__inside').forEach(postInside => {
     // Create a new <p> tag with 130 characters of lorem ipsum text
     const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
     const newParagraph = document.createElement('p');
     newParagraph.textContent = loremIpsumText.substring(0, 130);

     // Apply blur effect to the paragraph
     newParagraph.style.filter = 'blur(5px)';

     // Clear the existing content inside the post__inside element
     postInside.innerHTML = '';

     // Append the new <p> tag with the blurred lorem ipsum text to the post__inside element
     postInside.appendChild(newParagraph);
   });

   // Function to shorten last names to the first initial in elements with data-testid 'post-avatar'
   document.querySelectorAll('[data-testid="post-avatar"]').forEach(element => {
     // Get the full name from the element's text content
     let fullName = element.textContent;

     // Split the full name into parts (assumes first and last name)
     let nameParts = fullName.split(' ');

     // If the name contains more than one part (first and last name), shorten the last name to its first initial
     if (nameParts.length > 1) {
       let firstName = nameParts[0];
       let lastNameInitial = nameParts[1].charAt(0) + '.';

       // Combine the first name and the shortened last name
       let shortName = `${firstName} ${lastNameInitial}`;

       // Update the element's text content with the shortened name
       element.textContent = shortName;
     }
   });
   ```

4. **Execute the Code**:
   Press `Enter` to run the script.

5. **Take Screenshots**:
   Now simply adjust the window however you want and take the screenshots you need.

## Features

- **Privacy Protection**: Blur out sensitive content while keeping important headers readable.
- **Anonymization**: Shorten last names to protect identities in screenshots.
- **Efficiency**: Take quick screenshots without needing to make time-consuming edits.
- **Ease of Use**: Easily plug the script into the browser console and execute.

## Configuration
No specific configuration is needed. Simply paste the code and run it.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Information
For support or inquiries, contact:

- Name: Izzy Piyale-Sheard
- Email: izzy@joinclearcareer.com
- LinkedIn: [linkedin.com/in/izzydoesizzy](https://linkedin.com/in/izzydoeszzy)
- Twitter: [@izzydoesizzy](https://twitter.com/izzydoesizzy)

## Acknowledgements

- Hat tip to ChatGPT for helping me easily write a script to come up with the changes I needed in just a few minutes.
