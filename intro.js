/* eslint-disable no-console */
const inquirer = require('inquirer');
const displayImage = require('display-image');
const sound = require('sound-play');
const path = require('path');
const validator = require('email-validator');
const chalk = require('chalk');
const { request } = require('http');

const start = async() => {
    await displayImage.fromURL('https://www.havenwoodacademy.org/wp-content/uploads/2016/06/what_leads_girls_to_be_targeted_by_bullies-1-1024x536.jpg').then(image => {
        console.log(image);
    });  
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('You\'re new to the neighborhood and the local bullies have discovered you already! They keep calling you a baby, no fair!'),
                name: 'intro1',
                choices: [chalk.bold.white('"I\'m no baby!" you say. (PRESS ENTER TO CONTINUE)')]
            }
        ])
        .then(answer => {
            answer ? intro2() : null; })
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
                message: chalk.green('"I dare you to explore the abandoned house at the end of the street," says the biggest meanest bully.'),
                name: 'intro2',
                choices: [chalk.bold.white('Okay FINE," you say, and storm off toward the house.')]
            }
        ])
        .then(answer => {
            answer ? intro3() : null;})
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
                message: chalk.green('You timidly walk up to the door, with all the kids watching you from the sidewalk. "GO IN!" they shout.'),
                name: 'intro3',
                choices: [chalk.bold.white('Ease open the door and walk inside.')]
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
                message: chalk.green('Inside, it\'s dark and creepy. There\'s a glow coming from the basement.'),
                name: 'intro3',
                choices: [chalk.bold.white('Go to the basement')]
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
                message: chalk.green('You see a computer, powered on—its monitor glowing.'),
                name: 'intro3',
                choices: [chalk.bold.white('Investigate')]
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
                message: chalk.green('You see a computer, powered on—its monitor glowing.'),
                name: 'intro3',
                choices: [chalk.bold.white('Investigate')]
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
        message: chalk.green('Enter your name:'),
        name: 'name',
    },
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
            let user = {
                email: answers.email,
                password: answers.password,
                name: answers.name
            };
            return request(`${REQUEST_URL}/api/auth/signup`)
                .send(user)
                .then(({ body }) => {
                    user = body;
                });
        });
