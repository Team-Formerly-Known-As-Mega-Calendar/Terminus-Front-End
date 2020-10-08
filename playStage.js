#!/usr/bin/env node
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-console */
const inquirer = require('inquirer');
const displayImage = require('display-image');
const sound = require('sound-play');
const path = require('path');
const chalk = require('chalk');
const request = require('superagent');
const agent = request.agent();
const validator = require('email-validator');

const authInput = [
    {
        type: 'input',
        message: chalk.green('Enter your email:'),
        name: 'email',
        validate: function validEmail(email) {
            if (!validator.validate(email)) {
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
            if (pass.length !== 0) {
                return true;
            }
            else {
                return 'Please enter a valid password.';
            }
        }
    }
];

const signUpPrompt = () =>
    inquirer.prompt(authInput)
        .then(answers => {
            const user = {
                email: answers.email,
                password: answers.password
            };
            return agent.post('https://haunted-terminal-game-main.herokuapp.com/api/v1/auth/signup')
                .send(user)
                .then(answer => {
                    return answer ? playStage('intro-7') : null;
                })
                .catch(console.log);
        });

const loginPrompt = () =>
    inquirer.prompt(authInput)
        .then(answers => {
            const user = {
                email: answers.email,
                password: answers.password
            };
            return agent.post('https://haunted-terminal-game-main.herokuapp.com/api/v1/auth/login')
                .send(user)
                .then(answer => {
                    return answer ? playStage('intro-7') : null;
                })
                .catch(error => {
                    console.log(chalk.bold.red(error.response.body.message));
                    return playStage('intro-6');
                });
        });

const playStage = async (stageId) => {
    const response = await agent.get(`https://haunted-terminal-game-main.herokuapp.com/api/v1/stage/${stageId}`);
    const json = response.body;

    if (json.img && process.env.TERM_PROGRAM !== 'mintty') {
        await displayImage.fromURL(json.img).then(image => {
            console.log(image);
        });
    }
    if (json.sound) {
        const filePath = path.join(__dirname, `sounds/${json.sound}`);
        await sound.play(filePath);
    }

    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: chalk.green(json.message),
            name: 'stageId',
            choices: json.choices.map(choice => ({ name: chalk.bold.white(choice.prompt), value: choice.next }))
        }
    ]);
    if (answers.stageId === 'loginPrompt') {
        return loginPrompt();
    } else if (answers.stageId === 'signUpPrompt') {
        return signUpPrompt();
    } else if (answers.stageId === 'exit') {
        return process.exit();
    } else {
        return playStage(answers.stageId);
    }
};

playStage('intro-1');
