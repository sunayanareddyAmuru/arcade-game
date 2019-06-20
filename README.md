# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## i successfully developed this game by following these steps

-   "Udacity" provided github link <https://github.com/udacity/frontend-nanodegree-arcade-game> in rubic structure and I downloaded the skeleton project  regarding to this game.
-   I downloaded the zip file and extracted all files from it .
-   I choose ATOM application and modified the skeleton project to  achieve the game as per Instructions.
-   Initially I open the index.html in browser. Then by inspecting the page I can console the code so that I can know the errors.
-   while modifying I came to know that, mostly the modifications are done in `app.js` file. 
-   After read all the instructiions, I came to understand that there are some errors while consoling in google console. So i used array as `allEnemies[]` and resolved the errors and I saw canvas when I run the code.
-   I created class for player as `Girl` and also created objects in it.
-   I implemented three functions for player. They are
    +  update()
    +  render()
    +  handleInput()
-   The `update()` function is used to update the player moves. The `render()` function is used to fix the player position.
-   The `handleInput()` is used to handle the inputs provided by the user.
-   I used key codes to take moves of the player (sprite) with arrow keys. The key arrows are
    + left arrow
    + right arrow
    + up arrow
    + down arrow
-   Left arrow to move left side and it will not work when sprite is near to cross canvas area.
-   Right arrow to move right side and it will not work when sprite is near to canvas area.
-   Up arrow to  move upside and it will not work when the sprite is near to canvas.
-   Down arrow to move downside and it will not work when the sprite is near to cross canvas area.
-   I implemented two functions for enemy. They are
   + update()
   + render()
-   The `update()` function automatically update the enemy moves based on the based on the speed.
-   The `render()` function initially fixes the enemy position.
-   Please, open `index.html` in browser to view the game. 
-   When the player reaches to water level by escaping the enemy then runs will increase.
-   I created the different characters at the top of the canvas and these characters will appear.
-   The user can choose the character to play the game.
