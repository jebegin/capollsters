import _ from 'lodash';

//output
var data = {};

// for git repo test only
data.TEST_MODE = true && document.location.origin == 'https://ibio.github.io';

data.ROOT = caInfo.root;
data.HOST = document.location.origin + '/';
//
data.URL_SURVEY = data.ROOT === '' ? 'res/survey_item.json' : data.ROOT + '?id=100';
data.URL_RESULT = data.ROOT === '' ? 'res/survey_result.json' : data.ROOT + '?id=100';

data.DIR_RULE = '#';
data.NAV_DEFAULT = '';

data.NAV_STUDENT = 'student';
data.NAV_STUDENT_POLL = 'student/poll';
data.NAV_STUDENT_COMPLETED = 'student/completed';
data.NAV_STUDENT_RESULT = 'student/completed/poll';
data.NAV_TEACHER = 'teacher';
data.NAV_TEACHER_COMPLETED = 'teacher/completed';
data.NAV_TEACHER_RESULT = 'teacher/completed/poll';
data.NAV_TEACHER_CREATE_POLL = 'teacher/createpoll';


data.SEARCH_SPLITOR = '+';

// data.VALID_SEARCH = '^_\\d+$';

// console.log(data);

export default data;
