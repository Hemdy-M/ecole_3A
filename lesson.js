class Lesson {
    lesson;
    constructor(lesson) {
        this.lesson = lesson;
        this.body = document.querySelector("body");
    }

    createLesson (lesson_name, usingIFrame, iFrame_path) {
        let lesson_data = document.createElement("article")
        lesson_data.innerHTML = lesson_name;
        if (usingIFrame) {
            let iFrame = document.createElement("iFram");
            iFrame.innerHTML = iFrame_path;
        }
    }

    getLessonName () {
        return this.lesson;
    }

    setLessonName(new_lesson) {
        this.lesson = new_lesson;
    }
}


export default Lesson;