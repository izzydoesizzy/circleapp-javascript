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