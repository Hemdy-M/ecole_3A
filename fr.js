import Lesson from "./lesson.js"

class French extends Lesson {
    lesson_name;
    constructor(lesson_name) {
        super(lesson_name)
    }
}


const app = () => {
    const fr = new French();

    fr.createLesson("Accord du Participe Passé", true, "")
}

if (true) {
    app();
}