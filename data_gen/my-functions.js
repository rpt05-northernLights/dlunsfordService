'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  const email = Faker.internet.email();
  const password = Faker.internet.password();
  const title = Faker.lorem.sentence();
  const text = Faker.lorem.sentences(3);
  const jobTitle = Faker.name.jobTitle();
  const jobType = Faker.name.jobType();
  const phoneNumber = Faker.phone.phoneNumber();
  const messageText = Faker.lorem.sentences(4);
  const messageDate = Faker.date.recent();
  const caseOpenDate = Faker.date.recent();
  const caseClosedDate = Faker.date.past();
  const companyName = Faker.company.companyName();
  // const previousNPS = Faker.random.number({ min: 0, max: 100 });

  // add variables to virtual user's context:
  userContext.vars.name = name;
  userContext.vars.email = email;
  userContext.vars.password = password;
  userContext.vars.title = title;
  userContext.vars.text = text;
  userContext.vars.jobTitle = jobTitle;
  userContext.vars.jobType = jobType;
  userContext.vars.phoneNumber = phoneNumber;
  userContext.vars.messageText = messageText;
  userContext.vars.messageDate = messageDate;
  userContext.vars.caseOpenDate = caseOpenDate;
  userContext.vars.caseClosedDate = caseClosedDate;
  userContext.vars.companyName = companyName;
  // userContext.vars.previousNPS = previousNPS;

  // continue with executing the scenario:
  return done();
}
