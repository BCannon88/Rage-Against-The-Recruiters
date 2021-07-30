const seedCategories = require('./01_QuestionCategories_Seed');
const seedAnswerTemplates = require('./02_AnswerTemplate_Seed');
const seedAnswers = require('./03_Answers');
const seedQuestions = require('./04_Questions');
const seedUsers = require('./05_Users');
const seedUserInfo = require('./06_UserInfo');
const seedJobDetails = require('./07_JobDetails');
const seedJobQuestions = require('./08_JobQuestions');
const seedSurveyAnswers = require('./09_SurveyAnswers');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedCategories();
  console.log('--------------');
  await seedAnswerTemplates();
  console.log('--------------');
  await seedAnswers();
  console.log('--------------');
  await seedQuestions();
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedUserInfo();
  console.log('--------------');
  await seedJobDetails();
  console.log('--------------');
  await seedJobQuestions();
  console.log('--------------');
  await seedSurveyAnswers();
  console.log('--------------');
  process.exit(0);
};

seedAll();