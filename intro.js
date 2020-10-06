/* eslint-disable no-console */
const inquirer = require('inquirer');
const displayImage = require('display-image');
const sound = require('sound-play');
const path = require('path');
const validator = require('email-validator');
const chalk = require('chalk');
const fetch = require('node-fetch');

const start = async() => {
    await displayImage.fromURL('https://www.havenwoodacademy.org/wp-content/uploads/2016/06/what_leads_girls_to_be_targeted_by_bullies-1-1024x536.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('"Welcome to the neighborhood!" You pick at the grass as a jogging mom waves emphatically from the sidewalk. This place sucks already, you miss your old house and friends.'),
                name: 'intro1',
                choices: [chalk.bold.white('You lay back and look at the clouds. (PRESS ENTER TO CONTINUE)')]
            }
        ])
        .then(answer => {
            answer ? intro2() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

start();

const intro2 = async() => {
    await displayImage.fromURL('https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/09/11163558/main-972x597.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('The clouds are peaceful. You close your eyes and start to think about school. It\'s going to be horrible. When you open your eyes again, there\'s a kid leaning over you, sneering.'),
                name: 'intro2',
                choices: [chalk.bold.white('"Hey! Who are you?"')]
            }
        ])
        .then(answer => {
            answer ? intro3() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const intro3 = async() => {
    await displayImage.fromURL('https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/05/GettyImages-1158031584-e1592292359511.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('"You must be new to the neighborhood," the kid says. You sit up and see a crew of other kids leering toward you. Great, you\'ve already found the neighborhood bullies.'),
                name: 'intro3',
                choices: [chalk.bold.white('"What do you guys want?"')]
            }
        ])
        .then(answer => {
            answer ? intro4() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const intro4 = async() => {
    await displayImage.fromURL('https://i.pinimg.com/originals/66/fe/15/66fe15b530102eddc18262a881920485.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('The leader of the gang gets a gleam in their eye, and starts inching toward you. "Since you’re new here, you have to prove you’re not a baby. We don’t hang out with babies."'),
                name: 'intro4',
                choices: [chalk.bold.white('"I\'m no baby!"')]
            }
        ])
        .then(answer => {
            answer ? intro5() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const intro5 = async() => {
    await displayImage.fromURL('https://static.turbosquid.com/Preview/2019/08/07__04_32_48/screenshot013.png7ED1A127-D677-43E3-9107-710130718E02Default.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('"Then we dare you to go inside the abandoned house at the end of the street," they jeer. You stand up, determined to prove yourself. You begin to march toward the house at the end of the street, with the group of kids trailing along behind you.'),
                name: 'intro5',
                choices: [chalk.bold.white('You approach the house. It doesn\'t look so bad...')]
            }
        ])
        .then(answer => {
            answer ? intro6() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const intro6 = async() => {
    await displayImage.fromURL('https://networkencyclopedia.com/wp-content/uploads/2020/04/terminal-retro-green.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('You boldly stride up the cracked walkway, pausing in front of the door. Over your shoulder, you see the group of kids with their arms crossed, waiting expectantly. After taking a deep breath, you push the front door open. It’s heavier than you expected...'),
                name: 'intro6',
                choices: [chalk.bold.white('You step inside. There’s a thick layer of dust and cobwebs, and it\'s suddenly very dark.')]
            }
        ])
        .then(answer => {
            answer ? intro7() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const intro7 = async() => {
    await displayImage.fromURL('https://networkencyclopedia.com/wp-content/uploads/2020/04/terminal-retro-green.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('You start to feel panicky. This must have been a bad idea. Before your eyes adjust, you notice a glowing coming from underneath a door. You walk toward the glow, and open the door to the basement.'),
                name: 'intro7',
                choices: [chalk.bold.white('>You enter the basement. What could go wrong?')]
            }
        ])
        .then(answer => {
            answer ? intro8() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const intro8 = async() => {
    await displayImage.fromURL('https://networkencyclopedia.com/wp-content/uploads/2020/04/terminal-retro-green.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('You take a step onto the cold concrete floor. You hear an eerie buzzing, and look to your left. There’s an old computer blinking in the corner.'),
                name: 'intro8',
                choices: [chalk.bold.white('You head over to investigate.')]
            }
        ])
        .then(answer => {
            answer ? intro9() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const intro9 = async() => {
    await displayImage.fromURL('https://networkencyclopedia.com/wp-content/uploads/2020/04/terminal-retro-green.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('"Welcome. Please enter your login information to continue." You’re curious. How did this computer get here? What’s the deal?'),
                name: 'intro9',
                choices: [chalk.bold.white('Enter your login details.')]
            }
        ])
        .then(answer => {
            answer ? signUpPrompt() : null;
        })
        .catch(error => {
            console.log(error);
        });
};

const signUpInput = [
    {
        type: 'input',
        message: chalk.green('Enter your email:'),
        name: 'email',
        validate: function validEmail(email) {
            if(!validator.validate(email)) {
                return 'Please enter a valid email.';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'password',
        name: 'password',
        message: chalk.green('Please enter password.'),
        validate: function validPass(pass) {
            if(pass.length !== 0) {
                return true;
            }
            else {
                return 'Please enter a valid password.';
            }
        }
    }
];

const signUpPrompt = () =>
    inquirer.prompt(signUpInput)
        .then(answers => {
            const user = {
                email: answers.email,
                password: answers.password
            };
            return fetch('https://haunted-terminal-game-dev.herokuapp.com/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user),
            })
                .then(res => res.json())
                .then(answer => {
                    answer ? storySelect() : null;
                });
        });

const storySelect = async() => {
    await displayImage.fromURL('https://i.imgur.com/hQ0rD12.jpeg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('Choose a story path'),
                name: 'storySelect',
                choices: [chalk.bold.white('D.O.M.'), chalk.bold.white('B.R.O.'), chalk.bold.white('Soul')]
            }
        ])
        .then(answer => {
            if(answer === 'D.O.M.') { 
                play('dom-start');
            } else if(answer === 'B.R.O.') {
                play('bro-start');
            } else if(answer === 'Soul') {
                play('soul-start');
            }
        })
        .catch(error => {
            console.log(error);
        });
};
