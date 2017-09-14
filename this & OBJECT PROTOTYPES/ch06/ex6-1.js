// pseudo code

class Task {
    id;

    // 'Task()' 생성자
    Task(ID) { id = ID; }
    outputTask() { output( id ); }
}

class XYZ inherits Task {
    label;

    // 'XYZ()' 생성자
    XYZ(ID,Label) { super( ID ); label = Label; }
    outputTask() ( super(); output( label ); }
}

class ABC inherits Task {
    // ...
}
