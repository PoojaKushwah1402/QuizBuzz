const categoryGK = 'General Knowledge';
const categoryEB = 'Entairtanment : book';
const categoryEF = 'Entairtanment : film';
const categoryEM = 'Entairtanment Music';
const categoryEVG = 'Entairtainment VideoGame';
const categorySN = 'Science and Nature';
const categoryS = 'Sports';
const categoryP = 'Politics';

const category = [
    {
        category : categoryGK,
        id : 'GK',
        url : 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple'

    },//

    {
        category : categoryEB,
        id : 'EB',
        url : 'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple'

    },//

    {
        category : categoryEF,
        id : 'EF',
        url : 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple'

    },//

    {
        category : categoryEM,
        id : 'EM',
        url : 'https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple'

    },//

    {
        category : categoryEVG,
        id : 'EVG',
        url : 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple'

    },//

    {
        category : categorySN,
        id : 'SN',
        url : 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple'

    },

    {
        category : categoryS,
        id : 'S',
        url : 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple'

    },

    {
        category : categoryP,
        id : 'P',
        url : 'https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple'

    }
]

export default category;