# The Issue at Hand

## Global Waste Management

Waste management is a very serious issue across the world. In simple terms, only specific materials can be recycled, and when other objects are mixed in, the entire batch has to be thrown into the garbage. Whenever citizens don’t recycle properly or dispose of waste improperly, waste management is a harder process. Instead of sorting through the waste, it is simply dumped into landfills or oceans, or is incinerated. If everyday citizens were to recycle items correctly, it would make a huge positive impact on the world.

## Carbon Emissions

Due to ineffective waste management methods, carbon emissions increase. When items that are supposed to be recycled are also thrown into waste, the level of toxins, such as dioxins, released increases by tons. This increases air pollution, contributes to acid rain, and harms the environment.

## Resources

When materials are recycled, much fewer resources are required to recreate the same product. This increases efficiency, decreases release of toxins, decreases need to acquire resources from the environment, and provides a “greener” way to create products. However, due to ineffective waste management, a lot of recyclable items are incinerated or disposed of as waste. This increases the carbon footprint of each individual by tons.

# The Importance of the Product

## Why is this Product Important?

To tackle the aforementioned issues, ecoSort was developed. This product sorts through waste items one by one as they are thrown, determines whether they are recyclable, compostable, or simply garbage. It then alerts the user to throw it in a specific bin. This will increase awareness in citizens, reduce carbon emissions by millions of tons if applied properly, and reduce environment harm. This product is necessary to improve waste management because no matter how many guides or brochures are given, people get caught up and forget to take time to dispose of items correctly. By applying this software to a simple bot in a large trashcan, it can automatically sort the items into the required bins. This minimizes the efforts required by the user, and maximizes effective waste management. In short, this product is the necessary bridge between pure laziness and a clean world

## How is it different from other Products?

There are several other products out in the market which are working towards the same goal. However, they are ineffective due to the fact that they are applied to large waste management and recycling plants. Most of this work is done through labor workers at plants, but with the introduction of machine learning, large machines and software have been used to sort through recycling. The key difference between these sorting methods and ecoSort is the fact that ecoSort can be applied to smaller locations. It tackles the root of the problem right away, when the item is disposed of, instead of when all the items are gathered. This makes the problem much easier to solve, and this AI system can easily be implemented using a camera, and a simple lever system within a disposal container.

# How it Works

1. When index.html is opened, and the user snaps a picture of the item, the JavaScript camera draws the image onto a canvas.
2. This canvas provides a base 64 Data URL. This is stored in a variable and uploaded to the Firebase Database. The image URL is retrieved and stored in local storage.
3. The ML component retrieves this URL from local storage when necessary and uploads it to the ML Microsoft Azure application. It inputs the image into the machine learning app.
4. The image is compared inside the machine learning component and the material category is determined. This then provides data to ecoSort.
5. The image is compared inside the machine learning component and the material category is determined. This then provides data to ecoSort.

# The Processes and Challenges

## Javascript Camera

The foundation of ecoSort is the camera which allows pictures to be taken via webcam. This was a minor challenge we faced, but it was the first challenge. The process to code a Javascript SDK camera was new and confusing at first. After learning about image canvas and camera output sources, we were able to create a functioning webpage camera which captured an image and posted it to the top right of the screen. This took approximately the first 3-4 hours of the hackathon. Jaimil and Mahtab worked on this, while Sam and Ayush figured out the machine learning component.

## Machine Learning

The machine learning component required several components setup to run efficiently. The first part was navigating through the used software. Microsoft Azure was used to develop a machine learning algorithm, but since no one had experience with it, it was really challenging. When someone has experience with a concept, it is much easier to implement it to the application, but with no experience, it requires time and effort to learn. The second part of the challenge was actually training the algorithm. This required hundreds of images to be inputted and the machine to be trained several times to recognize patterns. This part was necessary, and the most time consuming because to determine whether an object was recyclable, compostable, or garbage, the software had to recognize it accurately. The machine learning is also the base to this project.

## Input Processing

The biggest challenge, which took approximately 7-8 hours, was figuring out how to input the data to the ML component. The image that was drawn from the camera was recorded as a data URL, which was inapplicable to the Machine Learning app. Several possible solutions were tested including imgur and img bb APIs, PHP servers, and databases. APIs required a lot more code than we were experienced with since there were few tutorials, and it was a post method. We worked for hours to implement this, to somehow upload a base 64 Data URL to imgur and retrieve an image link, but to no avail. We looked into PHP servers, but that required a completely new level of complexity to our application. At 3 am, Jaimil looked into a Firebase Database system to upload the data URL as an image. This required a lot more code and was complex as it required several components in the script. By 5 am, the Firebase code was implemented and the image URLs were successfully retrieved for the ML component. These were stored in session storage.

## Putting them Together

The final step and challenge to this project was putting the machine learning code and the camera code together into one web app. This caused several errors and issues in the code, which required hours to be sorted through and debugged. The final code was organized into appropriate folders and then uploaded to GitHub. This required several tests before it was ready to be submitted.

# Future Applications

## Model

Using a simple sort system (similar to movable garbage chutes), a camera, and simple levers, this software can be applied to almost any everyday garbage chute, or modified to be simpler for waste disposal bins at home.

## How it would work

The user throws the items one by one into an input chute which contains the camera. The software snaps a picture of the item, and the ML component determines which bin it should go into. Based on this, the required chute is opened and the object would fall into the designated bin (recycling, compost, or garbage). With more information, this system can be applied easily to all around the world to reduce carbon emissions!

# Links
The website no longer functions due to the expired Microsoft Azure API; however, you can  check out the devpost submission here:https://devpost.com/software/ecosort-jhrp0e
