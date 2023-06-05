CREATE DATABASE afterhours_ia;
\c afterhours_ia

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE quotes(
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    name TEXT,
    quote TEXT
);

INSERT INTO quotes(user_id, name, quote)
VALUES
    ('1', 'Kasun', 'Do not do your work on the main branch'),
    ('1', 'Bree', 'Have you tried asking your question with efficiency?'),
    ('1', 'Neil', 'Console log it!'),
    ('1', 'Jordan', 'Wanna go to a breakout room?'),
    ('1', 'Jordan', 'I am leaving now')



INSERT INTO quotes(user_id, name, quote)
VALUES
    ('1', 'Jordan', '... do not quote me on that'),
    ('1', 'Neil', 'Do not think, just type'),
    ('1', 'Bree', 'learn to see joy in the small things'),
    ('1', 'Bree', 'Have you tried asking questions with efficiency?'),
    ('1', 'Bree', 'Have you followed the variable Choo Choo train?'),
    ('1', 'Bree', 'What is your code currently doing? And what do you want it to do?'),
    ('1', 'Bree', 'Step 1: give it a go. Step 2: make it work. Step 3: make it pretty.'),
    ('1', 'Neil', 'Break it down into little steps'),
    ('1', 'Neil', 'Let me think'),
    ('1', 'Neil', 'You are doing great, legend'),
    ('1', 'Neil', 'I think the problem is PEBCAK (Problem Exists Between Keyboard and Chair)'),
    ('1', 'Neil', 'Do not think, just type what I say'),
    ('1', 'Neil', 'I am a visual learner'),
    ('1', 'Kasun', 'It lives and dies in here'),
    ('1', 'Kasun', 'Have you read the error message'),
    ('1', 'Kasun', 'How did everyone go on the warmup?'),
    ('1', 'Kasun', 'It is JavaScript, not Java'),        
    ('1', 'Kasun', 'Have you saved your file? Restarted your server?');