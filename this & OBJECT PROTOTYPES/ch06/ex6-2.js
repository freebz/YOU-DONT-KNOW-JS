Task = {
    setID: function(ID) { this.id = ID },
    outputID: function() { console.log( this.id ); }
};

// 'XYZ'가 'Task'에 위임한다.
XYZ = Object.create( Task );

XYZ.prepareTask = function(ID,Label) {
    this.setID( ID );
    this.label = Label;
};

XYZ.outputTaskDetails = function() {
    this.outputID();
    console.log( this.label );
};

// ABC = Object.create( Task );
// ABC ... = ...
