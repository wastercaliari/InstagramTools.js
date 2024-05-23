(async function() {
    const delays = [4, 5, 7, 12, 20];

    // Function to perform the action of clicking "Seguir" elements
    async function clickFollowElements() {
        try {
            while (true) {
                // Locate all elements with the text "Seguir"
                let followElements = Array.from(document.querySelectorAll('button')).filter(button => button.textContent.trim() === 'Seguir');

                if (followElements.length === 0) {
                    // Scroll down to load more elements if no "Seguir" button is found
                    window.scrollTo(0, document.body.scrollHeight);
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    continue;
                }

                for (let element of followElements) {
                    try {
                        // Scroll to the element and ensure it is at the top of the viewport
                        element.scrollIntoView({ block: 'start' });
                        await new Promise(resolve => setTimeout(resolve, 500));
                        element.click();

                        // Random delay between 4 to 20 seconds
                        let delay = delays[Math.floor(Math.random() * delays.length)] * 1000;
                        await new Promise(resolve => setTimeout(resolve, delay));

                    } catch (error) {
                        console.error(`Error clicking element: ${error}`);
                        continue;
                    }
                }

                // Scroll down to load more elements
                window.scrollTo(0, document.body.scrollHeight);
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        } catch (error) {
            console.error(`Error during execution: ${error}`);
        }
    }

    // Call the function to click "Seguir" elements
    await clickFollowElements();
})();
