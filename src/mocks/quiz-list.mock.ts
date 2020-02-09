import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_ESPORT: Question = {
    label: 'Anivia se joue...',
    answers: [
        {
            value: 'Jungle',
            isCorrect: false,
        },
        {
            value: 'Mid',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Blabla', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'eSports',
        theme: 'League Of Legends',
        questions: [QUESTION_ESPORT],
    }
];

